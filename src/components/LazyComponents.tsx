import { lazy } from 'react';

// Lazy load components that appear below the fold
export const LazyTestimonialCard = lazy(() => import('./TestimonialCard'));
export const LazyFAQAccordion = lazy(() => import('./FAQAccordion'));
export const LazyCaseStudyCard = lazy(() => import('./CaseStudyCard'));
export const LazyChallengeCard = lazy(() => import('./ChallengeCard'));