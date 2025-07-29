import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Code, Lightbulb, MapPin, Clock, Zap } from 'lucide-react';

const JoinUsPage: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [visibleSections, setVisibleSections] = React.useState<Set<number>>(new Set());
  const sectionsRef = React.useRef<HTMLElement[]>([]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionsRef.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
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
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead the development of our core AI platform and help shape the future of accessible artificial intelligence.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'Machine Learning'],
      featured: true
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Design intuitive interfaces that make complex AI capabilities accessible to users of all technical backgrounds.',
      skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'AI/UX'],
      featured: false
    },
    {
      title: 'Community Manager',
      department: 'AI8TY Labs',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and nurture our community of developers, creators, and AI enthusiasts around the world.',
      skills: ['Community Building', 'Content Creation', 'Social Media', 'Event Planning', 'Communication'],
      featured: false
    },
    {
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Contract',
      description: 'Create clear, comprehensive documentation and educational content for our AI tools and platforms.',
      skills: ['Technical Writing', 'API Documentation', 'Developer Education', 'Content Strategy'],
      featured: false
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    'Flexible working arrangements and remote-first culture',
    'Professional development budget for conferences and learning',
    'Access to cutting-edge AI tools and technologies',
    'Opportunity to work on open source projects'
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: 'Impact-Driven',
      description: 'Everything we build aims to democratize access to AI and empower more people to innovate.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Collaborative',
      description: 'We believe the best solutions come from diverse perspectives working together.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: 'Curious',
      description: 'We embrace experimentation, learning from failures, and pushing the boundaries of what\'s possible.'
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: 'Craftsmanship',
      description: 'We take pride in building high-quality, reliable systems that people can depend on.'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
        }} />
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Cinematic Header */}
          <section ref={addToRefs} className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-8">
              <div 
                className="transform transition-all duration-1000"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  opacity: Math.max(0, 1 - scrollY / 1000)
                }}
              >
                <div className="w-24 h-24 mx-auto glass-card rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
                  Join Our Mission
                </h1>
                <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  Help us build systems for a more intelligent, more accessible future. Join a team of passionate builders working to democratize AI and empower communities worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Magnetic Cards for Values */}
          <section ref={addToRefs} className="space-y-16">
            <h2 className="text-5xl font-bold text-center text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    visibleSections.has(1) 
                      ? 'opacity-100 transform translate-y-0 rotate-0' 
                      : 'opacity-0 transform translate-y-20 rotate-1'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="glass-card border-white/10 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer h-full">
                    <CardContent className="p-8 h-full">
                      <div className="flex items-start gap-6 h-full">
                        <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow transition-all duration-300">
                          {value.icon}
                        </div>
                        <div className="space-y-4 flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Flying Position Cards */}
          <section ref={addToRefs} className="space-y-16">
            <h2 className="text-5xl font-bold text-center text-white">
              Open Positions
            </h2>
            
            {/* Featured Position with Cinematic Reveal */}
            {positions.filter(pos => pos.featured).map((position, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  visibleSections.has(2) 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-20'
                }`}
              >
                <Card className="glass-card border-primary/30 hover:border-primary/50 transition-all duration-500 transform hover:scale-102 group">
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <div className="flex items-start justify-between">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <span className="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full animate-pulse">
                                Featured
                              </span>
                              <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping" />
                            </div>
                            <span className="px-3 py-1 glass-card text-white/80 text-sm rounded-full">
                              {position.department}
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-6 text-white/60">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="glass-button text-white font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-300 group/btn">
                          Apply Now
                          <Zap className="ml-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        </Button>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed text-lg group-hover:text-white/95 transition-colors duration-300">
                        {position.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {position.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-4 py-2 glass-card text-white/90 rounded-full hover:border-primary/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Other Positions with Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.filter(pos => !pos.featured).map((position, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    visibleSections.has(2) 
                      ? 'opacity-100 transform translate-y-0 rotate-0' 
                      : 'opacity-0 transform translate-y-20 rotate-2'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <Card className="glass-card border-white/10 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer h-full">
                    <CardContent className="p-6 h-full">
                      <div className="space-y-4 h-full flex flex-col">
                        <div className="space-y-3">
                          <span className="px-3 py-1 glass-card text-white/80 text-xs rounded-full">
                            {position.department}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-4 text-white/60 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-white/70 text-sm leading-relaxed flex-1 group-hover:text-white/90 transition-colors duration-300">
                          {position.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {position.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 glass-card text-white/80 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                          {position.skills.length > 3 && (
                            <span className="px-2 py-1 glass-card text-white/60 text-xs rounded">
                              +{position.skills.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <Button className="w-full glass-button text-white border-white/20 hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Animated Benefits Matrix */}
          <section ref={addToRefs} className="space-y-12">
            <h2 className="text-5xl font-bold text-center text-white">
              Why Work with Us
            </h2>
            <Card className={`glass-card border-white/10 transition-all duration-1000 ${
              visibleSections.has(3) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}>
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-4 group cursor-pointer transition-all duration-500 ${
                        visibleSections.has(3) ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:animate-pulse transition-all duration-300" />
                      <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Final CTA with Magnetic Buttons */}
          <section ref={addToRefs}>
            <Card className={`glass-card border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 transition-all duration-1000 ${
              visibleSections.has(4) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}>
              <CardContent className="p-12 text-center">
                <div className="space-y-8">
                  <div className="w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">
                    Don't See the Right Role?
                  </h3>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    We're always looking for talented individuals who share our mission. Send us your resume and tell us how you'd like to contribute to making AI more accessible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button className="glass-button text-white font-semibold px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300 group">
                      Send General Application
                      <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                    <Button className="glass-button-purple text-white font-semibold px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300 group">
                      Join Our Talent Network
                      <Heart className="ml-2 w-5 h-5 group-hover:animate-pulse transition-all" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
