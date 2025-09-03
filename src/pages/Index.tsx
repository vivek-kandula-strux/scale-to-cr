import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import StickyNavbar from "@/components/StickyNavbar";
import ServiceCard from "@/components/ServiceCard";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import ChallengeCard from "@/components/ChallengeCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import LeadForm from "@/components/LeadForm";
import { 
  LazyFAQAccordion, 
  LazyTestimonialCard, 
  LazyChallengeCard 
} from "@/components/LazyComponents";
import { 
  FAQSkeleton, 
  TestimonialSkeleton, 
  ChallengeSkeleton 
} from "@/components/LoadingSkeletons";

// Lucide Icons
import { Target, Zap, TrendingUp, CheckCircle, Users, BarChart3, Shield, Rocket, DollarSign, Clock, Award, HeadphonesIcon, PieChart, Settings, AlertTriangle, BrainCircuit, Smartphone, Globe, PlayCircle } from "lucide-react";

// Images - Using Supabase Storage URLs
const heroClientLogos = "https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/Hero%20Client%20Logo%20Collage.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";

const Index = () => {
  const handleCtaClick = () => {
    window.open('https://tidycal.com/struxdigital/strux-discovery-call-email', '_blank');
  };

  return <div className="min-h-screen bg-background overflow-x-hidden">
      <StickyNavbar />
      
      {/* Hero Section - Modern 2025 Design */}
      <section className="relative pt-20 pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent-primary/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/20 rounded-full filter blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 sm:mb-6 leading-[1.1] tracking-tight animate-fade-in">
              Leading Marketing Partner for <span className="gradient-text">Coaches</span>, <span className="gradient-text">Creators</span> & Ed Tech Brands.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              Scale your coaching & training business with Strux Digital's fully managed performance marketing services!
            </p>
          </div>
          
          {/* Large Hero Image - Enhanced */}
          <div className="w-full flex justify-center mb-8 sm:mb-12 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative max-w-full">
              <img src={heroClientLogos} alt="Hero Client Logo Collage" className="rounded-2xl shadow-elevated w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button variant="hero" size="xl" onClick={handleCtaClick} className="w-full max-w-md sm:w-auto min-h-[56px] text-base sm:text-lg font-bold px-8">
                Get My Custom Growth Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Glass Morphism Design */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 glass-card"></div>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-card-foreground mb-3 sm:mb-4 animate-fade-in">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              Real results from real clients who've transformed their businesses with our proven systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Lokesh Lalwani" business="Data Analytics & Excel Coach (1.34M YouTube Followers)" result="₹0 → ₹3.7CR in 22 months" testimonial="Strux Digital's comprehensive funnel strategy and performance marketing helped us scale from zero to ₹3.7 crores in just 22 months. Their data-driven approach was exactly what our coaching business needed." />
            </Suspense>
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Rajni Singh" business="India's Top Autism Coach" result="₹0 → ₹70L/month" testimonial="The transformation has been incredible! From starting at zero to generating ₹70 lakhs monthly revenue. Their expertise in scaling coaching businesses is unmatched." />
            </Suspense>
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Gaurav Arora" business="India's Top Coach for CAs" result="250 → 1200+ attendees, 15% lower CPA" testimonial="Workshop attendance increased from 250 to over 1200 paid attendees in just 3 months, while our cost per acquisition dropped by 15%. Outstanding results!" />
            </Suspense>
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Sudhir Kove" business="Watch & Logo Analysis Coach" result="₹35L/month per funnel (3 funnels)" testimonial="They helped us launch and scale 3 profitable funnels over 14 months. Each funnel now generates ₹35 lakhs monthly - the systematic approach was game-changing." />
            </Suspense>
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Jatan Shah" business="Skill Nation - Top EdTech Platform" result="₹0 → ₹23L ad spend in 34 days, 40% lower CPA" testimonial="Aggressive scaling done right! We went from zero to ₹23 lakhs in ad spend within 34 days while maintaining 40% lower cost per acquisition. Exceptional execution." />
            </Suspense>
            <Suspense fallback={<TestimonialSkeleton />}>
              <LazyTestimonialCard image="/placeholder.svg" name="Rohini Sri" business="Montessori & Parenting Coach" result="₹0 → ₹25L/month profit in 3 months" testimonial="From zero to ₹25 lakhs monthly profit in just 3 months! Their funnel optimization and marketing strategy delivered results faster than I ever imagined possible." />
            </Suspense>
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="xl" onClick={handleCtaClick} className="animate-glow-pulse w-full max-w-md mx-auto px-4 py-3 text-sm sm:text-base">
              Ready to Be Our Next Success Story?
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section - Enhanced Modern Design */}
      <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-tertiary/20 rounded-full filter blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Our comprehensive approach combines strategy, execution, and optimization to deliver measurable growth for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-10">
            <ServiceCard icon={TrendingUp} title="Digital Marketing Strategy" description="Data-driven marketing campaigns across all channels to maximize ROI and customer acquisition." />
            <ServiceCard icon={Target} title="Sales Process Optimization" description="Streamline your sales funnel to convert more leads and increase average transaction values." />
            <ServiceCard icon={Users} title="Team & Operations Scaling" description="Build systems and hire the right people to support sustainable business growth." />
            <ServiceCard icon={BarChart3} title="Performance Analytics" description="Track, measure, and optimize every aspect of your business for continuous improvement." />
            <ServiceCard icon={Rocket} title="Growth Strategy Development" description="Custom roadmaps designed specifically for your industry and growth objectives." />
            <ServiceCard icon={CheckCircle} title="Implementation Support" description="Hands-on support to ensure strategies are executed properly and deliver results." />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={handleCtaClick} className="min-h-[44px]">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Value Stack - Mobile Optimized */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-card">
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
            <BenefitCard icon={Award} title="Proven Track Record" description="We've helped 200+ businesses achieve sustainable growth with our battle-tested strategies." />
            <BenefitCard icon={Clock} title="Rapid Implementation" description="See results in 90 days or less with our fast-track growth acceleration programs." />
            <BenefitCard icon={DollarSign} title="ROI Guarantee" description="We're so confident in our approach, we guarantee a 3:1 return on your investment within 6 months." />
            <BenefitCard icon={Users} title="Dedicated Team" description="Your own dedicated team of growth specialists working exclusively on your success." />
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={handleCtaClick} className="min-h-[44px]">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
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
            <Button variant="cta" size="lg" onClick={handleCtaClick} className="min-h-[44px]">
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
            <Suspense fallback={<ChallengeSkeleton />}>
              <LazyChallengeCard icon={AlertTriangle} title="Scaling ads effectively" description="Your ad costs keep increasing but leads quality is decreasing" />
            </Suspense>
            <Suspense fallback={<ChallengeSkeleton />}>
              <LazyChallengeCard icon={Settings} title="Wrong funnel strategy" description="Your funnel converts visitors but fails to generate enough revenue" />
            </Suspense>
            <Suspense fallback={<ChallengeSkeleton />}>
              <LazyChallengeCard icon={Users} title="Inconsistent client flow" description="Great months followed by dry spells - no predictable lead generation" />
            </Suspense>
            <Suspense fallback={<ChallengeSkeleton />}>
              <LazyChallengeCard icon={BrainCircuit} title="Tech overwhelm" description="Too many tools, platforms, and systems that don't work together" />
            </Suspense>
            <Suspense fallback={<ChallengeSkeleton />}>
              <LazyChallengeCard icon={TrendingUp} title="Revenue ceiling" description="Stuck at the same revenue level despite working harder" />
            </Suspense>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" onClick={handleCtaClick}>
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
            <div className="flex justify-center">
              <img src="https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/landing-page-assets/Partner-Logos-Meta-Google.webp" alt="Partner Logos - Meta and Google Certified Partners" className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
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
          </div>
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
          
          <Suspense fallback={<FAQSkeleton />}>
            <LazyFAQAccordion />
          </Suspense>
          
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="cta" size="lg" onClick={handleCtaClick}>
              Ready to Get Started? Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;