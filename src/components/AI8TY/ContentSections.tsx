import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Users, Zap, Shield, Globe, Code, ArrowRight, CheckCircle } from 'lucide-react';

const ContentSections: React.FC = () => {
  const sections = [
    {
      id: 'what-we-build',
      title: 'What We Build',
      subtitle: 'Intelligent tools and infrastructure for real-world impact',
      icon: <Cpu className="w-12 h-12 text-space-blue" />,
      content: 'We create AI-powered systems that bridge the gap between complex technology and practical application. Our tools are designed to be powerful yet accessible, helping teams achieve more with intelligent automation.',
      features: [
        'Intelligent Automation Platforms',
        'AI-Powered Analytics Tools',
        'Scalable Infrastructure Solutions',
        'Custom AI Integration Services'
      ],
      gradient: 'from-space-blue to-space-purple'
    },
    {
      id: 'who-we-build-for',
      title: 'Who We Build For',
      subtitle: 'Builders, teams, and industries on the edge of possibility',
      icon: <Users className="w-12 h-12 text-space-purple" />,
      content: 'Our solutions serve ambitious businesses, innovative creators, and forward-thinking communities who want to harness AI without getting lost in complexity.',
      features: [
        'Ambitious Businesses',
        'Creative Teams & Agencies',
        'Educational Institutions',
        'Community Organizations'
      ],
      gradient: 'from-space-purple to-space-pink'
    },
    {
      id: 'why-it-matters',
      title: 'Why It Matters',
      subtitle: 'Making the next era of technology simpler, safer, and more inclusive',
      icon: <Zap className="w-12 h-12 text-space-pink" />,
      content: 'Technology should empower everyone, not just experts. We believe in reducing friction between great ideas and great outcomes, making advanced capabilities accessible to all.',
      features: [
        'Democratized Access to AI',
        'Reduced Technical Complexity',
        'Inclusive Innovation',
        'Sustainable Growth'
      ],
      gradient: 'from-space-pink to-space-blue'
    }
  ];

  return (
    <div className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-space-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-space-blue opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-40 relative z-10">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center gap-4 glass-card px-6 py-3 bg-gradient-to-r ${section.gradient} bg-opacity-20`}>
                    {section.icon}
                    <span className="text-lg font-semibold text-white">Featured</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    {section.title}
                  </h2>
                  
                  <p className="text-2xl font-light text-space-blue">
                    {section.subtitle}
                  </p>
                  
                  <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                    {section.content}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group">
                      <CheckCircle className="w-5 h-5 text-space-pink group-hover:scale-110 transition-transform" />
                      <span className="text-white/90 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className={`glass-button-blue px-6 py-3 text-white font-semibold rounded-lg group flex items-center gap-2`}>
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Enhanced Visual Card */}
              <div className="flex-1 max-w-lg">
                <Card className="glass-card border-0 hover:border-space-blue/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group overflow-hidden">
                  <CardContent className="p-0 relative">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    
                    <div className="p-8 relative z-10">
                      <div className="text-center space-y-8">
                        <div className="relative">
                          <div className={`w-24 h-24 mx-auto glass-card rounded-full flex items-center justify-center animate-pulse-glow bg-gradient-to-r ${section.gradient} bg-opacity-30`}>
                            {section.icon}
                          </div>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-space-pink to-space-blue opacity-20 blur-xl animate-glow"></div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white">
                          {section.title}
                        </h3>
                        
                        <div className="space-y-4">
                          {section.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="glass-card p-4 rounded-lg bg-gradient-to-r from-space-dark/50 to-transparent hover:from-space-blue/20 hover:to-space-purple/20 transition-all duration-300 cursor-pointer group/item">
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient}`}></div>
                                <span className="text-sm text-white/90 group-hover/item:text-white transition-colors">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContentSections;