import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Users, Zap, Shield, Globe, Code } from 'lucide-react';

const ContentSections: React.FC = () => {
  const sections = [
    {
      id: 'what-we-build',
      title: 'What We Build',
      subtitle: 'Intelligent tools and infrastructure for real-world impact',
      icon: <Cpu className="w-8 h-8 text-primary" />,
      content: 'We create AI-powered systems that bridge the gap between complex technology and practical application. Our tools are designed to be powerful yet accessible, helping teams achieve more with intelligent automation.',
      features: [
        'Intelligent Automation Platforms',
        'AI-Powered Analytics Tools',
        'Scalable Infrastructure Solutions',
        'Custom AI Integration Services'
      ]
    },
    {
      id: 'who-we-build-for',
      title: 'Who We Build For',
      subtitle: 'Builders, teams, and industries on the edge of possibility',
      icon: <Users className="w-8 h-8 text-accent" />,
      content: 'Our solutions serve ambitious businesses, innovative creators, and forward-thinking communities who want to harness AI without getting lost in complexity.',
      features: [
        'Ambitious Businesses',
        'Creative Teams & Agencies',
        'Educational Institutions',
        'Community Organizations'
      ]
    },
    {
      id: 'why-it-matters',
      title: 'Why It Matters',
      subtitle: 'Making the next era of technology simpler, safer, and more inclusive',
      icon: <Zap className="w-8 h-8 text-secondary" />,
      content: 'Technology should empower everyone, not just experts. We believe in reducing friction between great ideas and great outcomes, making advanced capabilities accessible to all.',
      features: [
        'Democratized Access to AI',
        'Reduced Technical Complexity',
        'Inclusive Innovation',
        'Sustainable Growth'
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  {section.icon}
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-xl text-primary font-semibold">
                  {section.subtitle}
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  {section.content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Card */}
              <div className="flex-1 max-w-md">
                <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {section.title}
                      </h3>
                      <div className="space-y-3">
                        {section.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="glass-card p-3 rounded-lg">
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
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