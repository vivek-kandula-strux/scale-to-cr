import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

const Debug = () => {
  const [testData, setTestData] = useState({
    name: "Test User",
    email: "test@example.com", 
    phone: "+1234567890",
    business_type: "E-commerce",
    current_revenue: "$10,000/month",
    desired_revenue: "$50,000/month",
    challenge: "Need better lead generation"
  });
  
  const [connectionStatus, setConnectionStatus] = useState<{
    database: 'pending' | 'success' | 'error';
    sheets: 'pending' | 'success' | 'error';
    message: string;
  }>({
    database: 'pending',
    sheets: 'pending', 
    message: ''
  });
  
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [isSubmittingTest, setIsSubmittingTest] = useState(false);
  const [lastResponse, setLastResponse] = useState<any>(null);
  
  const { toast } = useToast();

  const testConnection = async () => {
    setIsTestingConnection(true);
    setConnectionStatus({ database: 'pending', sheets: 'pending', message: 'Testing connections...' });
    
    try {
      // Test database connection
      const { data: dbTest, error: dbError } = await supabase
        .from('lead_submissions')
        .select('count')
        .limit(1);
        
      if (dbError) {
        setConnectionStatus({ 
          database: 'error', 
          sheets: 'pending', 
          message: `Database error: ${dbError.message}` 
        });
        return;
      }
      
      // Test edge function with dummy data
      const { data: functionData, error: functionError } = await supabase.functions.invoke('submit-to-sheets', {
        body: {
          name: 'Connection Test',
          email: 'test@connection.com',
          phone: '',
          business_type: 'Test',
          current_revenue: '',
          desired_revenue: '',
          challenge: 'Connection test'
        }
      });
      
      if (functionError) {
        setConnectionStatus({
          database: 'success',
          sheets: 'error', 
          message: `Edge function error: ${functionError.message}`
        });
        return;
      }
      
      // Analyze response to determine sheets status
      const message = functionData?.message || '';
      const sheetsStatus = message.includes('Google Sheets') && message.includes('Successfully') 
        ? 'success' 
        : message.includes('Google Sheets not configured') || message.includes('sync failed')
        ? 'error'
        : 'pending';
        
      setConnectionStatus({
        database: 'success',
        sheets: sheetsStatus,
        message: message || 'Connection test completed'
      });
      
      setLastResponse(functionData);
      
    } catch (error) {
      setConnectionStatus({
        database: 'error',
        sheets: 'error',
        message: `Connection test failed: ${error}`
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const submitTestData = async () => {
    setIsSubmittingTest(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-to-sheets', {
        body: testData
      });
      
      if (error) {
        toast({
          title: "Test Failed",
          description: error.message,
          variant: "destructive"
        });
        return;
      }
      
      setLastResponse(data);
      
      toast({
        title: "Test Submitted",
        description: data?.message || "Test data submitted successfully"
      });
      
    } catch (error) {
      toast({
        title: "Test Error", 
        description: `${error}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmittingTest(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success': return <Badge variant="default" className="bg-green-500">Connected</Badge>;
      case 'error': return <Badge variant="destructive">Failed</Badge>;
      case 'pending': return <Badge variant="secondary">Testing...</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Google Sheets Integration Debug</h1>
          <p className="text-muted-foreground">Test and debug your Google Sheets sync connection</p>
        </div>

        {/* Connection Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Connection Status
              <Button 
                onClick={testConnection} 
                disabled={isTestingConnection}
                size="sm"
                variant="outline"
              >
                {isTestingConnection ? "Testing..." : "Test Connection"}
              </Button>
            </CardTitle>
            <CardDescription>
              Current status of database and Google Sheets connections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(connectionStatus.database)}
                <span className="font-medium">Supabase Database</span>
              </div>
              {getStatusBadge(connectionStatus.database)}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(connectionStatus.sheets)}
                <span className="font-medium">Google Sheets Sync</span>
              </div>
              {getStatusBadge(connectionStatus.sheets)}
            </div>
            
            {connectionStatus.message && (
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">{connectionStatus.message}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Form */}
        <Card>
          <CardHeader>
            <CardTitle>Test Data Submission</CardTitle>
            <CardDescription>
              Submit test data to verify the complete flow works properly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={testData.name}
                  onChange={(e) => setTestData({...testData, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={testData.email}
                  onChange={(e) => setTestData({...testData, email: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={testData.phone}
                  onChange={(e) => setTestData({...testData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="business_type">Business Type</Label>
                <Input
                  id="business_type"
                  value={testData.business_type}
                  onChange={(e) => setTestData({...testData, business_type: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="current_revenue">Current Revenue</Label>
                <Input
                  id="current_revenue"
                  value={testData.current_revenue}
                  onChange={(e) => setTestData({...testData, current_revenue: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="desired_revenue">Desired Revenue</Label>
                <Input
                  id="desired_revenue"
                  value={testData.desired_revenue}
                  onChange={(e) => setTestData({...testData, desired_revenue: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="challenge">Challenge</Label>
              <Input
                id="challenge"
                value={testData.challenge}
                onChange={(e) => setTestData({...testData, challenge: e.target.value})}
              />
            </div>
            
            <Button 
              onClick={submitTestData}
              disabled={isSubmittingTest}
              className="w-full"
            >
              {isSubmittingTest ? "Submitting Test..." : "Submit Test Data"}
            </Button>
          </CardContent>
        </Card>

        {/* Last Response */}
        {lastResponse && (
          <Card>
            <CardHeader>
              <CardTitle>Last Response</CardTitle>
              <CardDescription>
                Response from the last test submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
                {JSON.stringify(lastResponse, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {/* Configuration Info */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration Guide</CardTitle>
            <CardDescription>
              How to properly configure your Google Sheets integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Required Secrets:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><code>GOOGLE_SHEETS_API_KEY</code> - Your Google Sheets API key</li>
                <li><code>GOOGLE_SHEET_ID</code> - The ID from your Google Sheet URL</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Sheet Setup:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Target: <code>Sheet1</code> tab, columns A-H</li>
                <li>Add headers in row 1: Timestamp | Name | Email | Phone | Business Type | Current Revenue | Desired Revenue | Challenge</li>
                <li>Data will be appended starting from row 2</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Get Sheet ID:</h4>
              <p className="text-sm text-muted-foreground">
                From your Google Sheet URL: <code>https://docs.google.com/spreadsheets/d/<strong>[SHEET_ID]</strong>/edit</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Debug;