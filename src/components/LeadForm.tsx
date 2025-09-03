import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    currentRevenue: "",
    desiredRevenue: "",
    challenge: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-to-sheets', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          current_revenue: formData.currentRevenue,
          desired_revenue: formData.desiredRevenue,
          challenge: formData.challenge
        }
      });

      if (error) {
        console.error('Submission error:', error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success! 🎉",
        description: "We'll contact you within 24 hours with your custom growth plan.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        currentRevenue: "",
        desiredRevenue: "",
        challenge: ""
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission failed",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-card p-6 sm:p-8 md:p-10 rounded-2xl border border-border shadow-elevated max-w-3xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-3">
          Get Your Custom Growth Plan
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tell us about your business and we'll create a personalized strategy for your growth.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-card-foreground font-semibold text-sm">
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground h-12 text-base"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground font-semibold text-sm">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your@email.com"
              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground h-12 text-base"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-card-foreground font-semibold text-sm">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 9876543210"
              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground h-12 text-base"
              required
            />
          </div>

          {/* Business Type */}
          <div className="space-y-2">
            <Label htmlFor="businessType" className="text-card-foreground font-semibold text-sm">
              Business Type
            </Label>
            <Select onValueChange={(value) => handleChange("businessType", value)}>
              <SelectTrigger className="bg-background border-border focus:border-primary text-foreground">
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coach">Coach/Consultant</SelectItem>
                <SelectItem value="agency">Marketing Agency</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS/Software</SelectItem>
                <SelectItem value="service">Service Business</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Current Revenue */}
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="currentRevenue" className="text-card-foreground font-semibold text-sm">
              Current Monthly Revenue
            </Label>
            <Select onValueChange={(value) => handleChange("currentRevenue", value)}>
              <SelectTrigger className="bg-background border-border focus:border-primary text-foreground">
                <SelectValue placeholder="Select current revenue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1l">₹0 - ₹1 Lakh</SelectItem>
                <SelectItem value="1l-5l">₹1 - ₹5 Lakhs</SelectItem>
                <SelectItem value="5l-10l">₹5 - ₹10 Lakhs</SelectItem>
                <SelectItem value="10l-25l">₹10 - ₹25 Lakhs</SelectItem>
                <SelectItem value="25l-50l">₹25 - ₹50 Lakhs</SelectItem>
                <SelectItem value="50l+">₹50 Lakhs+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desired Revenue */}
          <div className="space-y-2 sm:col-span-1">
            <Label htmlFor="desiredRevenue" className="text-card-foreground font-semibold text-sm">
              Desired Monthly Revenue
            </Label>
            <Select onValueChange={(value) => handleChange("desiredRevenue", value)}>
              <SelectTrigger className="bg-background border-border focus:border-primary text-foreground">
                <SelectValue placeholder="Select target revenue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10l-25l">₹10 - ₹25 Lakhs</SelectItem>
                <SelectItem value="25l-50l">₹25 - ₹50 Lakhs</SelectItem>
                <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 CR</SelectItem>
                <SelectItem value="1cr+">₹1 CR+</SelectItem>
                <SelectItem value="2cr+">₹2 CR+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Challenge */}
        <div className="space-y-2">
          <Label htmlFor="challenge" className="text-card-foreground font-semibold text-sm">
            What's your biggest challenge right now?
          </Label>
          <Textarea
            id="challenge"
            value={formData.challenge}
            onChange={(e) => handleChange("challenge", e.target.value)}
            placeholder="Tell us about your current challenges in scaling your business..."
            className="bg-background border-border focus:border-primary min-h-[100px] text-foreground placeholder:text-muted-foreground"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="cta" 
          size="xl" 
          className="w-full min-h-[56px] text-base sm:text-lg font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get My Custom Growth Plan"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We respect your privacy. Your information is safe and will never be shared.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;