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
import { 
  Target, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  BarChart3, 
  Shield, 
  Rocket,
  DollarSign,
  Clock,
  Award,
  HeadphonesIcon,
  PieChart,
  Settings,
  AlertTriangle,
  BrainCircuit,
  Smartphone,
  Globe,
  PlayCircle
} from "lucide-react";

// Images
import heroTeam from "@/assets/hero-team.jpg";
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
    <div className="min-h-screen bg-gradient-hero text-soft-peach">
      <StickyNavbar onCtaClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero font-bold mb-6 animate-fade-in">
              Scale Your Business to{" "}
              <span className="text-forest-green">₹1 CR/Month</span>{" "}
              with Our Proven Framework
            </h1>
            <p className="text-xl mb-8 text-soft-peach/90 leading-relaxed animate-slide-up">
              Join 500+ coaches, consultants, and service-based businesses who've transformed their revenue using our data-driven growth systems. Get your custom roadmap to predictable, sustainable scaling.
            </p>
            
            <div className="mb-12">
              <img 
                src={heroTeam} 
                alt="Strux Digital Team - Performance Marketing Experts" 
                className="mx-auto rounded-lg shadow-elevated max-w-2xl w-full animate-fade-in"
              />
            </div>
            
            <Button variant="hero" size="xl" onClick={scrollToForm} className="mb-4">
              Let's Discuss Your Growth
            </Button>
            <p className="text-sm text-soft-peach/70">
              Free consultation • Custom growth plan • No obligations
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-soft-peach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-deep-brown mb-4">What We Do</h2>
            <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
              We specialize in scaling service-based businesses through proven digital marketing frameworks and automation systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ServiceCard 
              icon={Target}
              title="Paid Ads Management"
              description="High-converting ad campaigns across Google, Facebook, and LinkedIn that consistently generate qualified leads at scale."
            />
            <ServiceCard 
              icon={Zap}
              title="Funnel Automation"
              description="Complete sales funnel setup with automated nurturing sequences that convert prospects into paying clients 24/7."
            />
            <ServiceCard 
              icon={TrendingUp}
              title="Scaling Roadmaps"
              description="Custom growth strategies tailored to your business model, with clear milestones from current revenue to ₹1CR/month."
            />
            <ServiceCard 
              icon={BarChart3}
              title="Proven Frameworks"
              description="Battle-tested systems and processes that have generated over ₹100CR in revenue for our clients across industries."
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Value Stack */}
      <section className="py-16 bg-deep-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-soft-peach mb-4">
              Here's What You Get When You Partner With Us...
            </h2>
            <p className="text-lg text-soft-peach/80 max-w-3xl mx-auto">
              Everything you need to scale your business systematically and predictably to ₹1CR/month and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            <BenefitCard 
              icon={Users}
              title="Dedicated Account Manager"
              description="Your personal growth strategist who knows your business inside-out and ensures every campaign is optimized for maximum ROI."
            />
            <BenefitCard 
              icon={Rocket}
              title="Custom Sales Funnels"
              description="High-converting landing pages, email sequences, and sales processes designed specifically for your business model."
            />
            <BenefitCard 
              icon={BarChart3}
              title="Real-Time Analytics Dashboard"
              description="Complete visibility into your marketing performance with detailed reporting and actionable insights delivered weekly."
            />
            <BenefitCard 
              icon={Shield}
              title="90-Day ROI Guarantee"
              description="We guarantee minimum 3x return on ad spend within 90 days, or we work for free until you achieve it."
            />
            <BenefitCard 
              icon={CheckCircle}
              title="Proven Growth Playbooks"
              description="Step-by-step systems that have consistently helped businesses scale from 6-figures to 8-figures annually."
            />
            <BenefitCard 
              icon={HeadphonesIcon}
              title="Priority Support Access"
              description="Direct access to our team via Slack for immediate support and strategic guidance whenever you need it."
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-soft-peach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-deep-brown mb-4">Why Choose Strux Digital?</h2>
            <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
              We're not just another marketing agency. We're your growth partners, committed to your long-term success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <Award className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Proven Track Record</h3>
              <p className="text-deep-brown/80">500+ successful campaigns, ₹100CR+ revenue generated</p>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <PieChart className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Custom Growth Roadmap</h3>
              <p className="text-deep-brown/80">Tailored strategies based on your unique business model</p>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <Shield className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Guaranteed Results</h3>
              <p className="text-deep-brown/80">3x ROI guarantee or we work for free</p>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <BarChart3 className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Data-Driven Campaigns</h3>
              <p className="text-deep-brown/80">Every decision backed by real data and proven metrics</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta-secondary" size="lg" onClick={scrollToForm}>
              Fill Out This Form to Unlock Your Business Potential
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-deep-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-soft-peach mb-4">Facing These Challenges?</h2>
            <p className="text-lg text-soft-peach/80 max-w-3xl mx-auto">
              These are the most common roadblocks that prevent businesses from scaling to ₹1CR/month. Sound familiar?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <AlertTriangle className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Scaling ads effectively</h3>
              <p className="text-deep-brown/80">Your ad costs keep increasing but leads quality is decreasing</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <Settings className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Wrong funnel strategy</h3>
              <p className="text-deep-brown/80">Your funnel converts visitors but fails to generate enough revenue</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <Users className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Inconsistent client flow</h3>
              <p className="text-deep-brown/80">Great months followed by dry spells - no predictable lead generation</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <BrainCircuit className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Tech overwhelm</h3>
              <p className="text-deep-brown/80">Too many tools, platforms, and systems that don't work together</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <TrendingUp className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Revenue ceiling</h3>
              <p className="text-deep-brown/80">Stuck at the same revenue level despite working harder</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-card border-l-4 border-forest-green">
              <Clock className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-deep-brown mb-2">Time constraints</h3>
              <p className="text-deep-brown/80">No time to focus on marketing while running your business</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Get Solutions to These Challenges
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-soft-peach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-deep-brown mb-4">Success Stories</h2>
            <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
              Real results from real clients who've transformed their businesses with our proven systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <TestimonialCard 
              image={testimonial1}
              name="Rajesh Kumar"
              business="Digital Marketing Coach"
              result="₹2L → ₹75L/month"
              testimonial="Strux Digital completely transformed my coaching business. Their funnel strategy and ad management helped me scale from ₹2 lakhs to ₹75 lakhs per month in just 8 months. The ROI has been incredible!"
            />
            <TestimonialCard 
              image={testimonial2}
              name="Priya Sharma" 
              business="Business Consultant"
              result="₹5L → ₹1.2CR/month"
              testimonial="I was struggling to break through the ₹5 lakh ceiling for years. With their custom growth roadmap and automation systems, I achieved ₹1.2 CR monthly revenue in 6 months. Best investment ever!"
            />
            <div className="bg-gradient-card p-6 rounded-lg shadow-card">
              <div className="flex items-center justify-center mb-4">
                <PlayCircle className="w-12 h-12 text-forest-green" />
              </div>
              <h4 className="font-semibold text-deep-brown text-center mb-2">Video Testimonial</h4>
              <p className="text-deep-brown/80 text-center text-sm">
                "See how we helped Amit scale from ₹10L to ₹2CR in 12 months"
              </p>
              <div className="mt-4 text-center">
                <Button variant="cta-secondary" size="sm">Watch Story</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Ready to Be Our Next Success Story?
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-deep-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-soft-peach/80 mb-4">Trusted by Leading Platforms</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-soft-peach font-bold text-xl">Google Partner</div>
              <div className="text-soft-peach font-bold text-xl">Meta Business</div>
              <div className="text-soft-peach font-bold text-xl">LinkedIn Partner</div>
              <div className="text-soft-peach font-bold text-xl">ClickFunnels</div>
              <div className="text-soft-peach font-bold text-xl">HubSpot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-soft-peach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-deep-brown mb-4">Real Results from Real Clients</h2>
            <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
              These transformation stories show exactly what's possible when you have the right strategy and execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CaseStudyCard 
              image={caseStudy1}
              clientName="Success Coaching Academy"
              industry="Online Coaching"
              beforeRevenue="₹8L"
              afterRevenue="₹85L"
              timeframe="7 months"
              story="Struggled with inconsistent lead flow despite good content. We implemented our proven funnel system and scaled their Facebook ads, resulting in 10x revenue growth."
            />
            <CaseStudyCard 
              image={caseStudy2}
              clientName="Digital Growth Consultancy"
              industry="Business Consulting"
              beforeRevenue="₹15L"
              afterRevenue="₹1.8CR"
              timeframe="10 months"
              story="Had a proven service but couldn't scale effectively. Our automation systems and strategic ad campaigns helped them achieve sustainable growth to 8-figures."
            />
            <div className="bg-gradient-card p-6 rounded-lg shadow-card flex flex-col justify-between">
              <div>
                <h4 className="text-card-title font-bold text-deep-brown mb-2">Your Business Could Be Next</h4>
                <p className="text-deep-brown/80 mb-4">
                  Every success story started with a single decision to invest in proven growth systems.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 bg-forest-green/10 rounded">
                  <span className="text-deep-brown font-semibold">Average Growth:</span>
                  <span className="text-forest-green font-bold">800%+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-forest-green/10 rounded">
                  <span className="text-deep-brown font-semibold">Time to Results:</span>
                  <span className="text-forest-green font-bold">60-90 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-forest-green/10 rounded">
                  <span className="text-deep-brown font-semibold">Success Rate:</span>
                  <span className="text-forest-green font-bold">95%+</span>
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
      <section className="py-16 bg-deep-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-soft-peach mb-4">
              When You Work With Us, You'll Get:
            </h2>
            <p className="text-lg text-soft-peach/80 max-w-3xl mx-auto">
              Everything you need to scale systematically from wherever you are now to ₹1CR/month and beyond.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-soft-peach" />
              </div>
              <h4 className="text-lg font-bold text-soft-peach mb-2">Custom Sales Funnels</h4>
              <p className="text-soft-peach/80 text-sm max-w-xs">High-converting landing pages and sequences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-soft-peach" />
              </div>
              <h4 className="text-lg font-bold text-soft-peach mb-2">Growth Playbooks</h4>
              <p className="text-soft-peach/80 text-sm max-w-xs">Step-by-step scaling strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-soft-peach" />
              </div>
              <h4 className="text-lg font-bold text-soft-peach mb-2">Dedicated Manager</h4>
              <p className="text-soft-peach/80 text-sm max-w-xs">Personal growth strategist</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-soft-peach" />
              </div>
              <h4 className="text-lg font-bold text-soft-peach mb-2">Scaling System</h4>
              <p className="text-soft-peach/80 text-sm max-w-xs">Predictable growth framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-soft-peach" />
              </div>
              <h4 className="text-lg font-bold text-soft-peach mb-2">24/7 Support</h4>
              <p className="text-soft-peach/80 text-sm max-w-xs">Direct access to our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section ref={formRef} className="py-16 bg-soft-peach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-deep-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section font-bold text-soft-peach mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-soft-peach/80 max-w-2xl mx-auto">
              Everything you need to know about working with us and scaling your business to ₹1CR/month.
            </p>
          </div>
          
          <FAQAccordion />
          
          <div className="text-center mt-12">
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
