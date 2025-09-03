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

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

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

    // Submit to Google Sheets
    const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    
    // You'll need to update this with your actual Google Sheets ID
    // Format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // User needs to provide this
    const RANGE = 'Sheet1!A:H'; // Adjust range as needed
    
    if (GOOGLE_SHEETS_API_KEY && SHEET_ID !== 'YOUR_GOOGLE_SHEET_ID_HERE') {
      try {
        const sheetsResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`,
          {
            method: 'POST',
            headers: {
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
              dbData 
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
            dbData 
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