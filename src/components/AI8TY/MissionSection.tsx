import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Shield, Users, Lightbulb, ArrowUpRight } from 'lucide-react';

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Clarity over complexity',
      description: 'We cut through the noise to deliver solutions that make sense',
      gradient: 'from-space-blue to-space-purple'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tools people can actually use',
      description: 'Real usability for real people in real situations',
      gradient: 'from-space-purple to-space-pink'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Impact beyond technologists',
      description: 'Technology that reaches and empowers everyone',
      gradient: 'from-space-pink to-space-blue'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Safety as a foundation',
      description: 'Not an afterthought, but built into everything we create',
      gradient: 'from-space-blue to-space-cyan'
    }
  ];

  return (
    <div className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-space-purple opacity-10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mission Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 mb-8 bg-gradient-to-r from-space-pink/20 to-space-purple/20">
            <Target className="w-6 h-6 text-space-pink" />
            <span className="text-lg font-semibold text-white">Our Mission</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Advanced intelligence should{' '}
            <span className="bg-gradient-to-r from-space-blue via-space-purple to-space-pink bg-clip-text text-transparent">
              serve more people
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            AI8TY was founded on the belief that advanced intelligence should serve more people—not just through breakthroughs, but through usability. Our mission is to design and deploy systems that accelerate access, automation, and innovation across industries and communities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 hover:border-space-blue/40 transition-all duration-500 transform hover:scale-105 group"
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 glass-card rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${value.gradient} bg-opacity-20 text-white`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-6 text-space-blue group-hover:text-space-pink transition-colors cursor-pointer">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goal Statement */}
        <div className="text-center">
          <div className="glass-card p-12 bg-gradient-to-r from-space-dark/50 to-space-blue/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-space-blue/10 to-space-pink/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our goal is simple
              </h3>
              <p className="text-2xl text-space-blue font-light">
                Reduce the friction between great ideas and great outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;