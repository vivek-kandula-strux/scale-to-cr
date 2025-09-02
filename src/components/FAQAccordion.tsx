import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens on the first call?",
    answer: "During our initial consultation, we'll analyze your current business model, identify growth bottlenecks, and create a customized roadmap to scale your revenue to ₹1CR/month. This 60-minute session is completely free and provides immediate actionable insights."
  },
  {
    question: "How much ad spend is required?",
    answer: "We recommend a minimum monthly ad spend of ₹2-5 lakhs to achieve significant results. However, we work with businesses at various scales and can create strategies that fit your current budget while maximizing ROI."
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes! We guarantee a minimum 3x ROI within 90 days, or we'll work for free until you achieve it. Our proven frameworks and data-driven approach have helped over 500+ businesses scale successfully."
  },
  {
    question: "How long before I see results?",
    answer: "Most clients see initial improvements within 30-45 days. Significant revenue increases typically occur within 60-90 days. We focus on both quick wins and sustainable long-term growth strategies."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in coaches, consultants, course creators, agencies, and high-ticket service providers. Our frameworks are most effective for businesses with proven offers looking to scale their customer acquisition."
  },
  {
    question: "What's included in your service?",
    answer: "Complete funnel setup, ad campaign management, conversion optimization, growth strategy consulting, weekly reporting, and dedicated account management. Everything needed to scale your business systematically."
  },
  {
    question: "How is this different from other agencies?",
    answer: "Unlike traditional agencies, we focus specifically on scaling to ₹1CR/month and beyond. We use proprietary frameworks, guarantee results, and work as true partners in your business growth rather than just service providers."
  },
  {
    question: "What if I'm just starting out?",
    answer: "While we specialize in scaling existing businesses, we also help early-stage entrepreneurs with proven concepts. We'll assess your business readiness during our free consultation and recommend the best path forward."
  }
];

const FAQAccordion = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-gradient-card rounded-lg shadow-card px-6 border-none"
          >
            <AccordionTrigger className="text-left text-deep-brown font-semibold hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-deep-brown/80 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;