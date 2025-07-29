import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Heart, Users, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionsRef = React.useRef<HTMLElement[]>([]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const manifestoWords = [
    'We', 'exist', 'between', 'the', 'world\'s', 'leading', 'AI', 'enterprises',
    'and', 'the', 'people', 'using', 'their', 'systems', 'to', 'power',
    'a', 'new', 'era', 'of', 'work,', 'learning,', 'and', 'creativity.'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 163, 127, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 163, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.2}px)`,
        }} />
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Cinematic Hero */}
          <section ref={addToRefs} className="min-h-screen flex items-center">
            <div className="w-full text-center space-y-12">
              <div 
                className="transform transition-all duration-1000"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  opacity: Math.max(0, 1 - scrollY / 800)
                }}
              >
                <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
                  About AI8TY
                </h1>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="text-2xl md:text-3xl font-light leading-relaxed text-white space-y-2">
                  {manifestoWords.map((word, index) => (
                    <span
                      key={index}
                      className={`inline-block mr-3 transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-8'
                      }`}
                      style={{
                        transitionDelay: `${index * 80}ms`,
                        color: ['AI', 'enterprises', 'systems', 'creativity'].some(w => word.includes(w)) 
                          ? 'hsl(var(--primary))' 
                          : 'white'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Scroll-Triggered Content Reveals */}
          <section ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen">
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Translating cutting-edge AI into 
                <span className="text-primary"> usable, accessible systems</span>
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  We help people build faster, automate better, and scale what matters. Our approach focuses on making advanced capabilities accessible without sacrificing power or flexibility.
                </p>
                <p>
                  Our goal is simple: reduce the friction between great ideas and great outcomes.
                </p>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                      <Lightbulb className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Our Approach</h3>
                    <div className="space-y-4">
                      {[
                        'Focus on practical applications',
                        'Prioritize user experience', 
                        'Ensure scalable solutions',
                        'Maintain security and reliability'
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`flex items-center gap-4 transition-all duration-500 ${
                            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
                          }`}
                          style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Split-Screen Morphing Layout */}
          <section ref={addToRefs} className="min-h-screen flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
              Our Dual-Structure Organization
            </h2>
            
            <div className="relative">
              {/* Morphing Center Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/60 to-primary/40 transform -translate-x-1/2 z-10">
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* AI8TY Inc - Sharp Business Side */}
                <div 
                  className={`p-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(34,34,34,0.8) 100%)',
                    transitionDelay: '300ms'
                  }}
                >
                  <Card className="glass-card border-primary/30 h-full transform hover:scale-105 transition-all duration-500">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">AI8TY Inc.</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed text-lg">
                          Our for-profit arm that builds intelligent tools and solutions for modern teams and businesses.
                        </p>
                        <div className="space-y-3">
                          {[
                            'Enterprise AI Solutions',
                            'Custom Automation Tools',
                            'Business Intelligence Platforms',
                            'Scalable Infrastructure'
                          ].map((item, index) => (
                            <div 
                              key={index}
                              className={`flex items-center gap-3 transition-all duration-500 ${
                                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
                              }`}
                              style={{ transitionDelay: `${500 + index * 100}ms` }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-white/70">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI8TY Labs - Organic Community Side */}
                <div 
                  className={`p-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(34,34,34,0.8) 0%, rgba(17,17,17,0.9) 100%)',
                    transitionDelay: '500ms'
                  }}
                >
                  <Card className="glass-card border-accent/30 h-full transform hover:scale-105 transition-all duration-500">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                            <Heart className="w-8 h-8 text-accent" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">AI8TY Labs</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed text-lg">
                          Our nonprofit initiative focused on education, open access, and democratized infrastructure for the AI age.
                        </p>
                        <div className="space-y-3">
                          {[
                            'Open Source Tools',
                            'Educational Resources',
                            'Community Programs',
                            'Research & Development'
                          ].map((item, index) => (
                            <div 
                              key={index}
                              className={`flex items-center gap-3 transition-all duration-500 ${
                                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
                              }`}
                              style={{ transitionDelay: `${700 + index * 100}ms` }}
                            >
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span className="text-white/70">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Flying Cards Section */}
          <section ref={addToRefs} className="text-center space-y-16 min-h-screen flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Accessibility First', desc: 'Advanced technology should be usable by everyone', icon: <Users className="w-8 h-8" /> },
                { title: 'Practical Innovation', desc: 'We build solutions that solve real-world problems', icon: <Lightbulb className="w-8 h-8" /> },
                { title: 'Responsible Development', desc: 'Safety and ethics guide every decision we make', icon: <Heart className="w-8 h-8" /> }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0 rotate-0' 
                      : 'opacity-0 transform translate-y-20 rotate-3'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <Card className="glass-card border-white/10 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                    <CardContent className="p-8 text-center h-full">
                      <div className="space-y-6">
                        <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center text-primary group-hover:animate-pulse-glow transition-all duration-300">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {value.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;