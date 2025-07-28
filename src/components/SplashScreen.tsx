
import React, { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <img 
        src="/lovable-uploads/8537fa41-491d-41b7-b316-546d79611739.png" 
        alt="Space Ai" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default SplashScreen;
