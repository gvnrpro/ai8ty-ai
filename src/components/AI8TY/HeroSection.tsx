import React, { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const neuralNetRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsLoaded(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neural network nodes data
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
  }));

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(16, 163, 127, 0.05) 0%, transparent 50%)',
      }}
    >
      {/* Neural Network Background */}
      <div
        ref={neuralNetRef}
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Connection lines */}
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map((targetNode, j) => {
              const distance = Math.sqrt(
                Math.pow(node.x - targetNode.x, 2) + Math.pow(node.y - targetNode.y, 2)
              );
              if (distance < 20) {
                return (
                  <line
                    key={`line-${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="rgba(16, 163, 127, 0.3)"
                    strokeWidth="0.1"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${node.delay}s`,
                      animationDuration: '4s',
                    }}
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Nodes */}
          {nodes.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill="rgba(16, 163, 127, 0.6)"
              className="animate-pulse"
              style={{
                animationDelay: `${node.delay}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: isLoaded ? `float ${4 + Math.random() * 6}s ease-in-out infinite` : 'none',
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-tight">
            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Intelligence
            </div>
            <div
              className="opacity-0 animate-fade-in-up bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              made accessible
            </div>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            We build AI systems that work. No complexity, no barriers—just tools that make the impossible, inevitable.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => onNavigate('about')}
              className="group relative px-8 py-4 bg-primary text-black font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              <span className="relative z-10">Explore our work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => onNavigate('try-ai8ty')}
              className="group relative px-8 py-4 border border-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try AI8TY
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center text-white/40 group cursor-pointer">
          <span className="text-sm mb-3 font-light">Discover more</span>
          <div
            className="w-6 h-10 border border-white/20 rounded-full relative group-hover:border-primary/50 transition-colors duration-300"
            style={{
              background: scrollY > 50 ? 'rgba(16, 163, 127, 0.1)' : 'transparent',
            }}
          >
            <div
              className="w-1.5 h-3 bg-white/40 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 group-hover:bg-primary/60 transition-colors duration-300"
              style={{
                animation: scrollY > 50 ? 'none' : 'bounce 2s infinite',
              }}
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}} />
    </section>
  );
};

export default HeroSection;