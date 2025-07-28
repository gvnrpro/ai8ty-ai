
import { useEffect, useState } from 'react';
import { useEnhancedReferralCapture } from './useEnhancedReferralCapture';

// Update the existing hook to use the enhanced version
export const useReferralCapture = () => {
  const enhancedHook = useEnhancedReferralCapture();
  
  return {
    isProcessingReferral: enhancedHook.isProcessingReferral,
    processReferralAfterSignup: enhancedHook.processReferralAfterSignup
  };
};
