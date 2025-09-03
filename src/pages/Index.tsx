import { useRef } from "react";
import { Button } from "@/components/ui/button";
import StickyNavbar from "@/components/StickyNavbar";
import ServiceCard from "@/components/ServiceCard";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import ChallengeCard from "@/components/ChallengeCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";

// Lucide Icons
import { Target, Zap, TrendingUp, CheckCircle, Users, BarChart3, Shield, Rocket, DollarSign, Clock, Award, HeadphonesIcon, PieChart, Settings, AlertTriangle, BrainCircuit, Smartphone, Globe, PlayCircle } from "lucide-react";

// Images - Using Supabase Storage URLs
const heroClientLogos = "https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/Hero%20Client%20Logo%20Collage.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar onCtaClick={scrollToForm} />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-16 pb-8 px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Leading Marketing Partner for Coaches, Creators & Ed Tech Brands.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Scale your coaching & training business with Strux Digital's fully managed performance marketing services!
            </p>
          </div>
          
          {/* Large Hero Image - Full Width */}
          <div className="w-full flex justify-center mb-6 sm:mb-8 -mx-3 sm:-mx-6 lg:-mx-8">
            <img 
              src={heroClientLogos} 
              alt="Hero Client Logo Collage" 
              className="rounded-lg shadow-elevated w-full max-w-none sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] object-cover"
            />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
              <Button 
                variant="cta" 
                size="lg"
                onClick={scrollToForm}
                className="w-full sm:w-auto min-h-[44px]"
              >
                Get My Custom Growth Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Second Section */}
      <section className="py-8 sm:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-2 sm:mb-3">Success Stories</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients who've transformed their businesses with our proven systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Lokesh Lalwani" 
              business="Data Analytics & Excel Coach (1.34M YouTube Followers)" 
              result="₹0 → ₹3.7CR in 22 months" 
              testimonial="Strux Digital's comprehensive funnel strategy and performance marketing helped us scale from zero to ₹3.7 crores in just 22 months. Their data-driven approach was exactly what our coaching business needed." 
            />
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Rajni Singh" 
              business="India's Top Autism Coach" 
              result="₹0 → ₹70L/month" 
              testimonial="The transformation has been incredible! From starting at zero to generating ₹70 lakhs monthly revenue. Their expertise in scaling coaching businesses is unmatched." 
            />
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Gaurav Arora" 
              business="India's Top Coach for CAs" 
              result="250 → 1200+ attendees, 15% lower CPA" 
              testimonial="Workshop attendance increased from 250 to over 1200 paid attendees in just 3 months, while our cost per acquisition dropped by 15%. Outstanding results!" 
            />
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Sudhir Kove" 
              business="Watch & Logo Analysis Coach" 
              result="₹35L/month per funnel (3 funnels)" 
              testimonial="They helped us launch and scale 3 profitable funnels over 14 months. Each funnel now generates ₹35 lakhs monthly - the systematic approach was game-changing." 
            />
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Jatan Shah" 
              business="Skill Nation - Top EdTech Platform" 
              result="₹0 → ₹23L ad spend in 34 days, 40% lower CPA" 
              testimonial="Aggressive scaling done right! We went from zero to ₹23 lakhs in ad spend within 34 days while maintaining 40% lower cost per acquisition. Exceptional execution." 
            />
            <TestimonialCard 
              image="/placeholder.svg" 
              name="Rohini Sri" 
              business="Montessori & Parenting Coach" 
              result="₹0 → ₹25L/month profit in 3 months" 
              testimonial="From zero to ₹25 lakhs monthly profit in just 3 months! Their funnel optimization and marketing strategy delivered results faster than I ever imagined possible." 
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Ready to Be Our Next Success Story?
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section - Mobile Optimized */}
      <section className="py-8 sm:py-10 px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Our comprehensive approach combines strategy, execution, and optimization to deliver measurable growth for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <ServiceCard
              icon={TrendingUp}
              title="Digital Marketing Strategy"
              description="Data-driven marketing campaigns across all channels to maximize ROI and customer acquisition."
            />
            <ServiceCard
              icon={Target}
              title="Sales Process Optimization"
              description="Streamline your sales funnel to convert more leads and increase average transaction values."
            />
            <ServiceCard
              icon={Users}
              title="Team & Operations Scaling"
              description="Build systems and hire the right people to support sustainable business growth."
            />
            <ServiceCard
              icon={BarChart3}
              title="Performance Analytics"
              description="Track, measure, and optimize every aspect of your business for continuous improvement."
            />
            <ServiceCard
              icon={Rocket}
              title="Growth Strategy Development"
              description="Custom roadmaps designed specifically for your industry and growth objectives."
            />
            <ServiceCard
              icon={CheckCircle}
              title="Implementation Support"
              description="Hands-on support to ensure strategies are executed properly and deliver results."
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm} className="min-h-[44px]">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Value Stack - Mobile Optimized */}
      <section className="py-8 sm:py-10 px-3 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-2 sm:mb-3">
              Partnership <span className="text-primary">Value Stack</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              When you partner with us, you're not just hiring an agency - you're gaining a dedicated growth team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <BenefitCard
              icon={Award}
              title="Proven Track Record"
              description="We've helped 200+ businesses achieve sustainable growth with our battle-tested strategies."
            />
            <BenefitCard
              icon={Clock}
              title="Rapid Implementation"
              description="See results in 90 days or less with our fast-track growth acceleration programs."
            />
            <BenefitCard
              icon={DollarSign}
              title="ROI Guarantee"
              description="We're so confident in our approach, we guarantee a 3:1 return on your investment within 6 months."
            />
            <BenefitCard
              icon={Users}
              title="Dedicated Team"
              description="Your own dedicated team of growth specialists working exclusively on your success."
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm} className="min-h-[44px]">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-8 sm:py-10 px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              Why Choose <span className="text-primary">Strux Digital</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              We're not just another agency. We're your growth partners with a proven system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center p-4 sm:p-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Fast Results</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our proven methodology delivers measurable results within the first 90 days of partnership.
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Work with seasoned professionals who have scaled hundreds of businesses across various industries.
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Data-Driven</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Every decision is backed by data and analytics to ensure maximum ROI on your investment.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm} className="min-h-[44px]">
              Get Your Custom Growth Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-8 sm:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-2 sm:mb-3">Facing These Challenges?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              These are the most common roadblocks that prevent businesses from scaling to ₹1CR/month. Sound familiar?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-6xl mx-auto">
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Scaling ads effectively</h3>
              <p className="text-muted-foreground">Your ad costs keep increasing but leads quality is decreasing</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <Settings className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Wrong funnel strategy</h3>
              <p className="text-muted-foreground">Your funnel converts visitors but fails to generate enough revenue</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Inconsistent client flow</h3>
              <p className="text-muted-foreground">Great months followed by dry spells - no predictable lead generation</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <BrainCircuit className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Tech overwhelm</h3>
              <p className="text-muted-foreground">Too many tools, platforms, and systems that don't work together</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Revenue ceiling</h3>
              <p className="text-muted-foreground">Stuck at the same revenue level despite working harder</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card border-l-4 border-primary hover:shadow-glow transition-all duration-300">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Time constraints</h3>
              <p className="text-muted-foreground">No time to focus on marketing while running your business</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Get Solutions to These Challenges
            </Button>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-6 sm:py-8 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-muted-foreground mb-4">Trusted by Leading Platforms</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-70">
              <div className="text-primary font-bold text-lg sm:text-xl">Google Partner</div>
              <div className="text-primary font-bold text-lg sm:text-xl">Meta Business</div>
              <div className="text-primary font-bold text-lg sm:text-xl">LinkedIn Partner</div>
              <div className="text-primary font-bold text-lg sm:text-xl">ClickFunnels</div>
              <div className="text-primary font-bold text-lg sm:text-xl">HubSpot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-8 sm:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-2 sm:mb-3">Real Results from Real Clients</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              These transformation stories show exactly what's possible when you have the right strategy and execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <CaseStudyCard image={caseStudy1} clientName="Success Coaching Academy" industry="Online Coaching" beforeRevenue="₹8L" afterRevenue="₹85L" timeframe="7 months" story="Struggled with inconsistent lead flow despite good content. We implemented our proven funnel system and scaled their Facebook ads, resulting in 10x revenue growth." />
            <CaseStudyCard image={caseStudy2} clientName="Digital Growth Consultancy" industry="Business Consulting" beforeRevenue="₹15L" afterRevenue="₹1.8CR" timeframe="10 months" story="Had a proven service but couldn't scale effectively. Our automation systems and strategic ad campaigns helped them achieve sustainable growth to 8-figures." />
            <div className="bg-background backdrop-blur-sm p-6 rounded-lg shadow-card flex flex-col justify-between border border-border hover:border-primary/30 transition-all duration-300">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Your Business Could Be Next</h4>
                <p className="text-muted-foreground mb-4">
                  Every success story started with a single decision to invest in proven growth systems.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 bg-primary/10 rounded border border-primary/20">
                  <span className="text-foreground font-semibold">Average Growth:</span>
                  <span className="text-primary font-bold">800%+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-primary/10 rounded border border-primary/20">
                  <span className="text-foreground font-semibold">Time to Results:</span>
                  <span className="text-primary font-bold">60-90 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-primary/10 rounded border border-primary/20">
                  <span className="text-foreground font-semibold">Success Rate:</span>
                  <span className="text-primary font-bold">95%+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Ready to Transform Your Business?
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Recap Section */}
      <section className="py-8 sm:py-10 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              When You Work With Us, You'll Get:
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to scale systematically from wherever you are now to ₹1CR/month and beyond.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-8 sm:mb-10">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Custom Sales Funnels</h4>
              <p className="text-muted-foreground text-sm max-w-xs">High-converting landing pages and sequences</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Growth Playbooks</h4>
              <p className="text-muted-foreground text-sm max-w-xs">Step-by-step scaling strategies</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Dedicated Manager</h4>
              <p className="text-muted-foreground text-sm max-w-xs">Personal growth strategist</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Scaling System</h4>
              <p className="text-muted-foreground text-sm max-w-xs">Predictable growth framework</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <HeadphonesIcon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">24/7 Support</h4>
              <p className="text-muted-foreground text-sm max-w-xs">Direct access to our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section ref={formRef} className="py-8 sm:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with us and scaling your business to ₹1CR/month.
            </p>
          </div>
          
          <FAQAccordion />
          
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Ready to Get Started? Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;