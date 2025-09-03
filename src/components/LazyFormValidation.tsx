import { lazy } from 'react';

// Form validation hook for lazy loading
export const useLazyValidation = () => {
  const validateForm = async (formData: any) => {
    // Dynamic import only when validation is needed
    const { validateFormData } = await import('./FormValidation');
    return validateFormData(formData);
  };

  return { validateForm };
};