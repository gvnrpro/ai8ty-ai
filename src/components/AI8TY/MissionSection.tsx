import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Shield, Globe } from 'lucide-react';

const MissionSection: React.FC = () => {
  const missionPoints = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Clarity over complexity',
      description: 'We believe powerful tools should be intuitive to use'
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: 'Tools people can actually use',
      description: 'Technology that enhances human capability rather than replacing it'
    },
    {
      icon: <Globe className="w-6 h-6 text-secondary" />,
      title: 'Impact that reaches beyond technologists',
      description: 'Making advanced AI accessible to creators, businesses, and communities'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Safety as a foundational principle',
      description: 'Building secure, responsible AI systems from the ground up'
    }
  ];

  return (
    <section id="mission" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🟣 Our Mission
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-white/90 leading-relaxed">
              AI8TY was founded on the belief that advanced intelligence should serve more people—not just through breakthroughs, but through usability.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our mission is to design and deploy systems that accelerate access, automation, and innovation across industries and communities.
            </p>
          </div>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionPoints.map((point, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 glass-card rounded-full flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/80 italic">
            We focus on reducing the friction between great ideas and great outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;