import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Shield, Users, Lightbulb } from 'lucide-react';

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Clarity over complexity',
      description: 'We cut through the noise to deliver solutions that make sense'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tools people actually use',
      description: 'Real usability for real people in real situations'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Impact beyond tech teams',
      description: 'Technology that reaches and empowers everyone'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Safety as foundation',
      description: 'Built into everything we create, not added as an afterthought'
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Mission Header */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 glass-card px-4 py-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-body-sm text-white/70 font-medium">Our mission</span>
          </div>
          
          <h2 className="text-display-lg font-semibold text-white leading-tight max-w-4xl mx-auto">
            Advanced intelligence should{' '}
            <span className="text-primary">serve more people</span>
          </h2>
          
          <p className="text-body-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            AI8TY was founded on the belief that advanced intelligence should serve more people—not just through breakthroughs, but through usability.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="glass-card border-0 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                
                <h3 className="text-headline font-semibold text-white">
                  {value.title}
                </h3>
                
                <p className="text-body text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goal Statement */}
        <div className="text-center">
          <div className="glass-card p-12 space-y-4">
            <h3 className="text-display-md font-semibold text-white">
              Our goal is simple
            </h3>
            <p className="text-headline text-primary/90 font-normal">
              Reduce friction between great ideas and great outcomes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;