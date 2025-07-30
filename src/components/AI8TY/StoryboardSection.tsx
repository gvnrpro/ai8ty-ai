import React, { useRef, useEffect, useState } from 'react';

const StoryboardSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate progress as the element passes through viewport
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + elementHeight)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scenes = [
    {
      title: 'What',
      subtitle: 'The Problem',
      content: 'AI is powerful but locked away in complexity. Most tools require engineering teams, months of setup, and constant maintenance.',
      visual: 'complexity',
    },
    {
      title: 'Who', 
      subtitle: 'The Builders',
      content: 'Creators, entrepreneurs, and teams with vision but not venture capital. People who need AI to work, not AI to tinker with.',
      visual: 'builders',
    },
    {
      title: 'Why',
      subtitle: 'The Mission', 
      content: 'Every breakthrough technology eventually becomes invisible infrastructure. We\'re accelerating that timeline for AI.',
      visual: 'mission',
    },
    {
      title: 'How',
      subtitle: 'The Method',
      content: 'Four interconnected layers: Creative vision, AI intelligence, growth strategy, and rapid execution. Each building on the last.',
      visual: 'method',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: '300vh' }} // Make it scrollable
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full">
            {/* Progress indicator */}
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-20">
              <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="w-full bg-primary rounded-full transition-all duration-300"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>

            {/* Scene container */}
            <div className="relative w-full h-screen flex items-center justify-center">
              {scenes.map((scene, index) => {
                const sceneProgress = Math.max(0, Math.min(1, 
                  (scrollProgress - index * 0.25) / 0.25
                ));
                
                const isActive = scrollProgress > index * 0.25 && scrollProgress < (index + 1) * 0.25;
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateX(${(1 - sceneProgress) * (index % 2 === 0 ? -100 : 100)}px) scale(${0.8 + sceneProgress * 0.2})`,
                    }}
                  >
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Text Content */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div>
                          <div className="text-primary text-lg font-medium mb-2">
                            {scene.title}
                          </div>
                          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
                            {scene.subtitle}
                          </h2>
                        </div>
                        <p className="text-xl text-white/70 leading-relaxed">
                          {scene.content}
                        </p>
                      </div>

                      {/* Visual Element */}
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                          {scene.visual === 'complexity' && (
                            <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-orange-900/20 flex items-center justify-center">
                              <div className="grid grid-cols-4 gap-4 p-8">
                                {Array.from({ length: 16 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-12 h-12 border border-red-500/30 rounded"
                                    style={{
                                      animation: isActive ? `complexity-pulse ${1 + i * 0.1}s ease-in-out infinite` : 'none',
                                      animationDelay: `${i * 0.1}s`
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {scene.visual === 'builders' && (
                            <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                              <div className="relative">
                                {Array.from({ length: 8 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-4 h-4 bg-blue-400/60 rounded-full"
                                    style={{
                                      left: `${Math.cos(i * Math.PI / 4) * 60 + 50}%`,
                                      top: `${Math.sin(i * Math.PI / 4) * 60 + 50}%`,
                                      animation: isActive ? `orbit ${3 + i * 0.2}s linear infinite` : 'none',
                                    }}
                                  />
                                ))}
                                <div className="w-8 h-8 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                              </div>
                            </div>
                          )}
                          
                          {scene.visual === 'mission' && (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-green-900/20 flex items-center justify-center">
                              <div className="relative w-32 h-32">
                                <div className="absolute inset-0 border-2 border-primary/30 rounded-full" />
                                <div 
                                  className="absolute inset-2 border-2 border-primary/50 rounded-full"
                                  style={{
                                    animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none'
                                  }}
                                />
                                <div 
                                  className="absolute inset-4 border-2 border-primary rounded-full"
                                  style={{
                                    animation: isActive ? 'pulse 2s ease-in-out infinite 0.5s' : 'none'
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          
                          {scene.visual === 'method' && (
                            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/20 flex items-center justify-center">
                              <div className="grid grid-cols-2 gap-8 p-8">
                                {['Creative', 'AI', 'Strategy', 'Development'].map((layer, i) => (
                                  <div
                                    key={i}
                                    className="w-20 h-20 glass-card rounded-xl flex items-center justify-center"
                                    style={{
                                      animation: isActive ? `layer-pulse ${1.5 + i * 0.3}s ease-in-out infinite` : 'none',
                                      animationDelay: `${i * 0.2}s`
                                    }}
                                  >
                                    <span className="text-xs text-white/80 font-semibold">{layer}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes complexity-pulse {
          0%, 100% { border-color: rgba(239, 68, 68, 0.3); background: transparent; }
          50% { border-color: rgba(239, 68, 68, 0.8); background: rgba(239, 68, 68, 0.1); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes layer-pulse {
          0%, 100% { transform: scale(1); border-color: rgba(255, 255, 255, 0.1); }
          50% { transform: scale(1.05); border-color: rgba(var(--primary), 0.5); }
        }
      `}} />
    </section>
  );
};

export default StoryboardSection;