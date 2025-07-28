import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Code, Lightbulb, MapPin, Clock } from 'lucide-react';

const JoinUsPage: React.FC = () => {
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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Help us build systems for a more intelligent, more accessible future. Join a team of passionate builders working to democratize AI and empower communities worldwide.
          </p>
        </div>

        {/* Company Values */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                      <p className="text-white/80 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Open Positions
          </h2>
          
          {/* Featured Position */}
          {positions.filter(pos => pos.featured).map((position, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Featured</span>
                        <span className="px-3 py-1 glass-card text-white/80 text-sm rounded-full">{position.department}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="glass-button text-white font-semibold">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-white/80 leading-relaxed">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 glass-card text-white/90 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Other Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.filter(pos => !pos.featured).map((position, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="px-3 py-1 glass-card text-white/80 text-xs rounded-full">{position.department}</span>
                      <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      <div className="flex items-center gap-3 text-white/60 text-sm">
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
                    <p className="text-white/70 text-sm leading-relaxed">{position.description}</p>
                    <div className="flex flex-wrap gap-1">
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
                    <Button variant="outline" className="w-full text-white border-white/20 hover:border-primary/40">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Why Work with Us
          </h2>
          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Don't See the Right Role?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our mission. Send us your resume and tell us how you'd like to contribute to making AI more accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glass-button text-white font-semibold px-8 py-3">
                  Send General Application
                </Button>
                <Button className="glass-button-purple text-white font-semibold px-8 py-3">
                  Join Our Talent Network
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinUsPage;
