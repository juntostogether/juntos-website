'use client';

import { STRIPE_PAYMENT_LINK, DONATION_CONFIG } from '@/lib/donation-config';

interface DonateButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function DonateButton({ 
  className = '', 
  children = 'Donate',
  variant = 'primary'
}: DonateButtonProps) {
  const handleDonateClick = () => {
    // Track donation click if configured
    if (DONATION_CONFIG.trackEvent && typeof window !== 'undefined') {
      // You can add analytics tracking here
      console.log('Donation button clicked');
    }

    // Open Stripe Payment Link
    if (DONATION_CONFIG.openInNewTab) {
      window.open(STRIPE_PAYMENT_LINK, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = STRIPE_PAYMENT_LINK;
    }
  };

  // Base styles for both variants
  const baseStyles = 'transition font-semibold cursor-pointer';
  
  // Variant-specific styles
  const variantStyles = variant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-white text-gray-900 hover:bg-gray-100';

  return (
    <button 
      onClick={handleDonateClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}