import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    currentRevenue: "",
    desiredRevenue: "",
    challenge: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate form submission
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
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-card max-w-2xl mx-auto border border-border hover:border-primary/30 transition-all duration-300">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-card-foreground mb-2">
          Get Your Custom Growth Plan
        </h3>
        <p className="text-muted-foreground">
          Tell us about your business and we'll create a personalized roadmap to ₹1CR/month
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-card-foreground font-semibold">
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your@email.com"
              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-space-dark font-semibold">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 9876543210"
              className="bg-glass-white/10 border-electric-cyan/20 focus:border-electric-cyan text-space-dark placeholder:text-space-dark/50 backdrop-blur-glass"
              required
            />
          </div>

          {/* Business Type */}
          <div className="space-y-2">
            <Label htmlFor="businessType" className="text-space-dark font-semibold">
              Business Type
            </Label>
            <Select onValueChange={(value) => handleChange("businessType", value)}>
              <SelectTrigger className="bg-glass-white/10 border-electric-cyan/20 focus:border-electric-cyan text-space-dark backdrop-blur-glass">
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
          <div className="space-y-2">
            <Label htmlFor="currentRevenue" className="text-space-dark font-semibold">
              Current Monthly Revenue
            </Label>
            <Select onValueChange={(value) => handleChange("currentRevenue", value)}>
              <SelectTrigger className="bg-glass-white/10 border-electric-cyan/20 focus:border-electric-cyan text-space-dark backdrop-blur-glass">
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
          <div className="space-y-2">
            <Label htmlFor="desiredRevenue" className="text-space-dark font-semibold">
              Desired Monthly Revenue
            </Label>
            <Select onValueChange={(value) => handleChange("desiredRevenue", value)}>
              <SelectTrigger className="bg-glass-white/10 border-electric-cyan/20 focus:border-electric-cyan text-space-dark backdrop-blur-glass">
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
          <Label htmlFor="challenge" className="text-space-dark font-semibold">
            What's your biggest challenge right now?
          </Label>
          <Textarea
            id="challenge"
            value={formData.challenge}
            onChange={(e) => handleChange("challenge", e.target.value)}
            placeholder="Tell us about your current challenges in scaling your business..."
            className="bg-glass-white/10 border-electric-cyan/20 focus:border-electric-cyan min-h-[100px] text-space-dark placeholder:text-space-dark/50 backdrop-blur-glass"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="hero" size="xl" className="w-full">
          Get My Custom Growth Plan
        </Button>

        <p className="text-center text-xs text-space-dark/60">
          We respect your privacy. Your information is safe and will never be shared.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;