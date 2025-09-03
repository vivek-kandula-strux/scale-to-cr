import React from "react";
import { Helmet } from "react-helmet-async";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Business Growth Consulting</title>
        <meta name="description" content="Thank you for your interest in our business growth consulting services. We'll be in touch soon." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Thank You!
            </h1>
            
            <div className="space-y-4 text-lg text-muted-foreground max-w-xl mx-auto">
              <p>
                Thank you for your interest in our business growth consulting services.
              </p>
              
              <p>
                One of our team members will give you a call to remind you about the scheduled appointment. We're looking forward to meeting you and discussing how we can help grow your business.
              </p>
            </div>
          </div>
          
          <div className="pt-8">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYou;