import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, ArrowRight, Code, Zap, Users } from 'lucide-react';

const TryAI8TYPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const demos = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Intelligent Code Assistant',
      description: 'AI-powered coding companion that helps developers write, debug, and optimize code faster.',
      features: ['Code completion', 'Bug detection', 'Performance optimization', 'Documentation generation'],
      status: 'Available'
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Automation Workflow Builder',
      description: 'Visual workflow designer that creates intelligent automation without complex programming.',
      features: ['Drag-and-drop interface', 'Smart triggers', 'Data processing', 'Integration hub'],
      status: 'Beta'
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: 'Team Intelligence Platform',
      description: 'Collaborative AI that enhances team productivity and decision-making processes.',
      features: ['Meeting insights', 'Decision tracking', 'Knowledge management', 'Team analytics'],
      status: 'Coming Soon'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Trial request:', { email, company, useCase });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Try AI8TY
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the future of intelligent automation. See how AI8TY can transform your workflow and accelerate your success.
          </p>
        </div>

        {/* Demo Showcase */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Interactive Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                        {demo.icon}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        demo.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                        demo.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {demo.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {demo.description}
                    </p>
                    <div className="space-y-2">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-white/80 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full glass-button text-white font-semibold"
                      disabled={demo.status === 'Coming Soon'}
                    >
                      {demo.status === 'Available' ? 'Try Demo' : 
                       demo.status === 'Beta' ? 'Join Beta' : 'Notify Me'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trial Request Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      Request Early Access
                    </h3>
                    <p className="text-white/80">
                      Get personalized access to AI8TY tools and join our private beta program.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="glass-card border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Company/Organization (Optional)
                      </label>
                      <Input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your company name"
                        className="glass-card border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Tell us about your use case
                      </label>
                      <Textarea
                        value={useCase}
                        onChange={(e) => setUseCase(e.target.value)}
                        placeholder="How do you plan to use AI8TY? What challenges are you trying to solve?"
                        className="glass-card border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full glass-button text-white font-semibold group"
                  >
                    Request Access
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="text-white/80">
                    We've received your request for early access. Our team will review your application and get back to you within 24-48 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="glass-button text-white font-semibold"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Need Something Custom?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our team can build tailored AI solutions for your specific needs. Let's discuss how AI8TY can accelerate your goals.
          </p>
          <Button className="glass-button-purple text-white font-semibold px-8 py-3">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TryAI8TYPage;