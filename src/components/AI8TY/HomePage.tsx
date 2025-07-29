import React from 'react';
import HeroSection from './HeroSection';
import StoryboardSection from './StoryboardSection';
import MissionSection from './MissionSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <StoryboardSection />
      <MissionSection />
    </div>
  );
};

export default HomePage;