import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Submit to sheets function called');
    
    const { 
      name, 
      email, 
      phone, 
      business_type, 
      current_revenue, 
      desired_revenue, 
      challenge 
    } = await req.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role key to bypass RLS
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store in Supabase database
    const { data: dbData, error: dbError } = await supabase
      .from('lead_submissions')
      .insert({
        name,
        email,
        phone,
        business_type,
        current_revenue,
        desired_revenue,
        challenge
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save to database' }), 
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Successfully saved to database:', dbData);

    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const sheetData = [
      timestamp,
      name || '',
      email || '',
      phone || '',
      business_type || '',
      current_revenue || '',
      desired_revenue || '',
      challenge || ''
    ];

    // Submit to Google Sheets using Service Account
    const GOOGLE_SERVICE_ACCOUNT_JSON = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_JSON');
    const SHEET_ID = Deno.env.get('GOOGLE_SHEET_ID');
    const SHEET_RANGE = Deno.env.get('GOOGLE_SHEET_RANGE') || 'Sheet1!A:H';
    
    console.log('Google Sheets Configuration:');
    console.log(`- Service Account configured: ${GOOGLE_SERVICE_ACCOUNT_JSON ? 'Yes' : 'No'}`);
    console.log(`- Sheet ID configured: ${SHEET_ID ? 'Yes' : 'No'}`);
    console.log(`- Target range: ${SHEET_RANGE}`);
    console.log(`- Target URL: ${SHEET_ID ? `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit` : 'Not configured'}`);
    
    // Headers for the sheet (will be manually added to row 1)
    console.log('Expected headers: Timestamp, Name, Email, Phone, Business Type, Current Revenue, Desired Revenue, Challenge');
    
    if (GOOGLE_SERVICE_ACCOUNT_JSON && SHEET_ID) {
      try {
        // Parse service account credentials
        const serviceAccount = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
        
        // Create JWT for Google OAuth2
        const now = Math.floor(Date.now() / 1000);
        const payload = {
          iss: serviceAccount.client_email,
          scope: 'https://www.googleapis.com/auth/spreadsheets',
          aud: 'https://oauth2.googleapis.com/token',
          exp: now + 3600,
          iat: now,
        };

        // Create JWT header and payload
        const header = { alg: 'RS256', typ: 'JWT' };
        const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

        // Import private key for signing
        const privateKeyPem = serviceAccount.private_key.replace(/\\n/g, '\n');
        const keyData = privateKeyPem.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, '');
        const keyBytes = Uint8Array.from(atob(keyData), c => c.charCodeAt(0));
        
        const cryptoKey = await crypto.subtle.importKey(
          'pkcs8',
          keyBytes,
          {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256',
          },
          false,
          ['sign']
        );

        // Sign the JWT
        const dataToSign = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
        const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, dataToSign);
        const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
          .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        
        const jwt = `${headerB64}.${payloadB64}.${signatureB64}`;

        // Exchange JWT for access token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
        });

        if (!tokenResponse.ok) {
          const tokenError = await tokenResponse.text();
          console.error('OAuth token error:', tokenError);
          throw new Error(`Failed to get access token: ${tokenError}`);
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Append data to Google Sheets
        const sheetsResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=RAW`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [sheetData]
            }),
          }
        );

        if (!sheetsResponse.ok) {
          const error = await sheetsResponse.text();
          console.error('Google Sheets API error:', error);
          
          // Still return success since we saved to database
          return new Response(
            JSON.stringify({ 
              success: true, 
              message: 'Saved to database. Google Sheets sync failed.',
              dbData,
              sheetsError: error
            }), 
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const sheetsResult = await sheetsResponse.json();
        console.log('Successfully added to Google Sheets:', sheetsResult);

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Successfully saved to database and Google Sheets',
            dbData,
            sheetsResult 
          }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (sheetsError) {
        console.error('Google Sheets integration error:', sheetsError);
        
        // Still return success since we saved to database
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Saved to database. Google Sheets sync failed.',
            dbData,
            sheetsError: sheetsError.message
          }), 
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } else {
      console.log('Google Sheets integration not configured, skipping...');
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Successfully saved to database. Google Sheets not configured.',
          dbData 
        }), 
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});