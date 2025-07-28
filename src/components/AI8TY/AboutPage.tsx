import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Heart, Users, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About AI8TY
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We exist between the world's leading AI enterprises and the people using their systems to power a new era of work, learning, and creativity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Translating cutting-edge AI into usable, accessible systems
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We help people build faster, automate better, and scale what matters. Our approach focuses on making advanced capabilities accessible without sacrificing power or flexibility.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our goal is simple: reduce the friction between great ideas and great outcomes.
            </p>
          </div>
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Approach</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Focus on practical applications</li>
                  <li>• Prioritize user experience</li>
                  <li>• Ensure scalable solutions</li>
                  <li>• Maintain security and reliability</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dual Structure */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Dual-Structure Organization
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI8TY Inc */}
            <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI8TY Inc.</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Our for-profit arm that builds intelligent tools and solutions for modern teams and businesses.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Enterprise AI Solutions</li>
                    <li>• Custom Automation Tools</li>
                    <li>• Business Intelligence Platforms</li>
                    <li>• Scalable Infrastructure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI8TY Labs */}
            <Card className="glass-card border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI8TY Labs</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Our nonprofit initiative focused on education, open access, and democratized infrastructure for the AI age.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Open Source Tools</li>
                    <li>• Educational Resources</li>
                    <li>• Community Programs</li>
                    <li>• Research & Development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Accessibility First', desc: 'Advanced technology should be usable by everyone' },
              { title: 'Practical Innovation', desc: 'We build solutions that solve real-world problems' },
              { title: 'Responsible Development', desc: 'Safety and ethics guide every decision we make' }
            ].map((value, index) => (
              <Card key={index} className="glass-card border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;