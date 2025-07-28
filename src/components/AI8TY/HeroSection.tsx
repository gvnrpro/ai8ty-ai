import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      className="relative px-6 py-32 text-center bg-black text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-center opacity-20"
        style={{ backgroundAttachment: 'fixed' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up">
        <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Building systems for a more intelligent,
          <br className="hidden sm:inline" />
          more accessible future.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
          AI8TY makes advanced digital capabilities—AI, automation, infrastructure—accessible to ambitious businesses, creators, and communities.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => onNavigate('about')}
            className="h-12 px-6 text-base font-medium bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Learn more
          </button>
          <button
            onClick={() => onNavigate('try-ai8ty')}
            className="h-12 px-6 text-base font-medium border border-white text-white hover:bg-white hover:text-black transition"
          >
            Try AI8TY
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;