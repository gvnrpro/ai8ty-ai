import React from 'react';
import HeroSection from './HeroSection';
import ContentSections from './ContentSections';
import MissionSection from './MissionSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <ContentSections />
      <MissionSection />
    </div>
  );
};

export default HomePage;