import { lazy } from 'react';

// Lazy load service cards for better performance
export const LazyServiceCard = lazy(() => import('./ServiceCard'));
export const LazyBenefitCard = lazy(() => import('./BenefitCard'));