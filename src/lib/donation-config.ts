// Stripe Payment Link configuration
// Replace this with your actual Stripe Payment Link URL
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_cNi8wR8bk0CLcOudRe4F200';

// Optional: Different donation amounts with different links
export const DONATION_LINKS = {
  default: 'https://buy.stripe.com/test_XXXXXXXXXX', // Replace with your payment link
  // You can add multiple payment links for different amounts if needed:
  // small: 'https://buy.stripe.com/test_XXXXXXXXXX',
  // medium: 'https://buy.stripe.com/test_XXXXXXXXXX',
  // large: 'https://buy.stripe.com/test_XXXXXXXXXX',
};

// Configuration for opening donation links
export const DONATION_CONFIG = {
  // Open in new tab to avoid navigation away from site
  openInNewTab: true,
  // Optional: Track donation clicks with analytics
  trackEvent: true,
};