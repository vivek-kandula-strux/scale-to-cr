// Form validation logic - only loaded when needed
export interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  currentRevenue: string;
  desiredRevenue: string;
  challenge: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateFormData = (formData: FormData): ValidationResult => {
  const errors: string[] = [];

  // Required field validation
  if (!formData.name.trim()) {
    errors.push("Name is required");
  }

  if (!formData.email.trim()) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!formData.phone.trim()) {
    errors.push("Phone number is required");
  } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
    errors.push("Please enter a valid phone number");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Default export for lazy loading
const FormValidation = {
  validateFormData
};

export default FormValidation;