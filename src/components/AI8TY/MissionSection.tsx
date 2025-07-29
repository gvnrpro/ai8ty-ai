import React from 'react';

const MissionSection: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const manifesto = [
    'Every', 'breakthrough', 'begins', 'with', 'a', 'simple', 'question:', 'what', 'if?',
    '', // line break
    'What', 'if', 'AI', 'wasn\'t', 'just', 'for', 'Silicon', 'Valley?',
    '', // line break  
    'What', 'if', 'automation', 'served', 'creators,', 'not', 'just', 'corporations?',
    '', // line break
    'What', 'if', 'intelligence', 'was', 'a', 'tool', 'anyone', 'could', 'wield?',
    '', // line break
    'We', 'build', 'the', 'systems', 'that', 'make', 'these', 'questions', 'obsolete.'
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative px-6 py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 50%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 163, 127, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 163, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: isVisible ? 'grid-pulse 4s ease-in-out infinite' : 'none'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Manifesto Text */}
        <div className="text-center mb-20">
          <div className="text-3xl md:text-5xl font-light leading-relaxed text-white space-y-4">
            {manifesto.map((word, index) => {
              if (word === '') {
                return <br key={index} />;
              }
              return (
                <span
                  key={index}
                  className={`inline-block mr-3 transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    color: ['AI', 'automation', 'intelligence', 'systems'].includes(word.replace(/[,.]/, '')) 
                      ? 'hsl(var(--primary))' 
                      : 'white'
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        {/* Three Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: 'Deploy',
              description: 'Systems that work in production from day one.',
              delay: '0.8s'
            },
            {
              title: 'Scale', 
              description: 'Infrastructure that grows with your ambition.',
              delay: '1.0s'
            },
            {
              title: 'Trust',
              description: 'AI you can rely on for what matters most.',
              delay: '1.2s'
            }
          ].map((principle, index) => (
            <div
              key={index}
              className={`text-left transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{ transitionDelay: principle.delay }}
            >
              <h3 className="text-2xl font-medium text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}} />
    </section>
  );
};

export default MissionSection;