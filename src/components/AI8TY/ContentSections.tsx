import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Users, Zap, ArrowRight } from 'lucide-react';

const ContentSections: React.FC = () => {
  const sections = [
    {
      id: 'what-we-build',
      title: 'What we build',
      subtitle: 'AI-powered tools designed for real-world impact',
      icon: <Cpu className="w-6 h-6" />,
      content: 'We create intelligent systems that bridge the gap between advanced technology and practical application. Our tools are powerful yet accessible.',
      features: [
        'Automation platforms',
        'Analytics tools', 
        'Infrastructure solutions',
        'Integration services'
      ]
    },
    {
      id: 'who-we-serve',
      title: 'Who we serve',
      subtitle: 'Teams and organizations ready to harness AI',
      icon: <Users className="w-6 h-6" />,
      content: 'Our solutions empower ambitious businesses, creative teams, and forward-thinking communities who want AI without complexity.',
      features: [
        'Growing businesses',
        'Creative agencies',
        'Educational institutions', 
        'Community organizations'
      ]
    },
    {
      id: 'our-approach',
      title: 'Our approach',
      subtitle: 'Making advanced technology accessible to all',
      icon: <Zap className="w-6 h-6" />,
      content: 'Technology should empower everyone, not just experts. We reduce friction between great ideas and great outcomes.',
      features: [
        'Democratized access',
        'Reduced complexity',
        'Inclusive innovation',
        'Sustainable growth'
      ]
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {sections.map((section, index) => (
          <section key={section.id} className="scroll-mt-24">
            <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 glass-card px-4 py-2">
                    {section.icon}
                    <span className="text-body-sm text-white/70 font-medium">Featured</span>
                  </div>
                  
                  <h2 className="text-display-lg font-semibold text-white leading-tight">
                    {section.title}
                  </h2>
                  
                  <p className="text-headline text-primary/90 font-normal">
                    {section.subtitle}
                  </p>
                  
                  <p className="text-body-lg text-white/70 leading-relaxed max-w-xl">
                    {section.content}
                  </p>
                </div>

                <div className="space-y-3">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-body text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="group">
                    Explore solutions
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>

              {/* Visual Card */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="glass-card border-0 group">
                  <CardContent className="p-12 text-center space-y-8">
                    <div className="w-16 h-16 mx-auto glass-card rounded-2xl flex items-center justify-center text-primary">
                      {section.icon}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-headline font-semibold text-white">
                        {section.title}
                      </h3>
                      
                      <div className="space-y-3">
                        {section.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="glass-card p-4 rounded-xl">
                            <span className="text-body-sm text-white/80">{feature}</span>
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