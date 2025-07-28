import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Users, Globe, Code, Lightbulb } from 'lucide-react';

const LabsPage: React.FC = () => {
  const focusAreas = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Public Infrastructure',
      description: 'Building accessible AI infrastructure that serves communities and democratizes access to advanced capabilities.',
      projects: ['Open AI APIs', 'Community Computing Resources', 'Shared Learning Platforms']
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: 'Educational Tools',
      description: 'Creating resources that help people understand and effectively use AI in their work and creative pursuits.',
      projects: ['AI Literacy Programs', 'Interactive Learning Tools', 'Open Courseware']
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: 'Community Support',
      description: 'Supporting communities through transparent, inclusive innovation that prioritizes social impact.',
      projects: ['Community Grants', 'Mentorship Programs', 'Open Source Contributions']
    }
  ];

  const principles = [
    'Open access to AI education and tools',
    'Transparent development processes',
    'Community-driven innovation',
    'Ethical AI development practices',
    'Democratized access to advanced technology',
    'Sustainable and inclusive growth'
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
            <Heart className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🔹 AI8TY Labs
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The nonprofit arm of AI8TY, committed to ensuring that the benefits of artificial intelligence reach as far and as wide as possible.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glass-card border-accent/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Belief</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              AI's future should be something people help shape—not just something that happens to them.
            </p>
          </CardContent>
        </Card>

        {/* Focus Areas */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-white">
            What We Focus On
          </h2>
          
          <div className="space-y-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                        {area.icon}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {area.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="glass-card p-3 rounded-lg">
                            <span className="text-sm text-white/90">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/90 text-sm leading-relaxed">{principle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get Involved with AI8TY Labs
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join our mission to democratize AI and make advanced technology accessible to all. Whether you're a developer, educator, or community leader, there's a place for you in our movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glass-button text-white font-semibold">
                  Explore Open Projects
                </Button>
                <Button className="glass-button-purple text-white font-semibold">
                  Join Our Community
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LabsPage;