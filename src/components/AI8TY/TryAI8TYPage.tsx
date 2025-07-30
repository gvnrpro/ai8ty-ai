import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, ArrowRight, Code, Zap, Users, Play, Power, BarChart3 } from 'lucide-react';

const TryAI8TYPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredDemo, setHoveredDemo] = useState<number | null>(null);
  const [bootingUp, setBootingUp] = useState<number | null>(null);

  const demos = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: '72hr Web Build Timer',
      description: 'Watch a complete website come to life in real-time. See our development process from concept to deployment.',
      features: ['Live progress tracking', 'Real deployment metrics', '3-day guarantee', 'Performance monitoring'],
      status: 'Available',
      color: 'primary',
      category: 'Development'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: '3D Visualization Sandbox',
      description: 'Interactive 3D product viewer showcasing our visualization capabilities and rendering quality.',
      features: ['Real-time rendering', '360° product views', 'Material customization', 'Export options'],
      status: 'Available',
      color: 'accent',
      category: 'Creative'
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: 'AI Clone Voice Generator',
      description: 'Experience voice cloning technology. Upload a voice sample and hear your AI digital twin.',
      features: ['Voice synthesis', 'Emotion control', 'Multi-language support', 'Real-time generation'],
      status: 'Beta',
      color: 'secondary',
      category: 'AI Solutions'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: 'Growth Analytics Dashboard',
      description: 'Live analytics dashboard showing real business metrics and AI-powered insights.',
      features: ['Real-time data', 'Predictive analytics', 'Custom reports', 'ROI tracking'],
      status: 'Available',
      color: 'yellow-400',
      category: 'Strategy'
    }
  ];

  const handleDemoHover = (index: number) => {
    setHoveredDemo(index);
    if (demos[index].status !== 'Coming Soon') {
      setBootingUp(index);
      setTimeout(() => setBootingUp(null), 2000);
    }
  };

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

        {/* Interactive Service Preview System */}
        <div className="space-y-12">
          <h2 className="text-5xl font-bold text-center text-white">
            Live Service Demos
          </h2>
          <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
            Experience our actual services in action. These aren't mockups—they're real tools 
            showcasing the quality and speed of AI8TY delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => handleDemoHover(index)}
                onMouseLeave={() => setHoveredDemo(null)}
              >
                <Card className={`glass-card border-white/10 transition-all duration-500 transform 
                  ${hoveredDemo === index ? `border-${demo.color}/50 scale-105 shadow-2xl` : 'hover:border-primary/30'}
                  ${bootingUp === index ? 'animate-pulse' : ''}
                `}>
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Boot-up Animation */}
                    {bootingUp === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
                    )}
                    
                    <div className="space-y-6 relative z-10">
                      {/* System Status Header */}
                      <div className="flex items-center justify-between">
                        <div className={`w-16 h-16 glass-card rounded-full flex items-center justify-center transition-all duration-300 
                          ${bootingUp === index ? `animate-pulse-glow shadow-lg shadow-${demo.color}/50` : ''}`}>
                          {bootingUp === index ? (
                            <Power className={`w-8 h-8 text-${demo.color} animate-pulse`} />
                          ) : (
                            demo.icon
                          )}
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2">
                            {bootingUp === index && (
                              <div className="flex items-center gap-1 text-xs text-primary">
                                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                                <span>LOADING</span>
                              </div>
                            )}
                            <span className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                              demo.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                              demo.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-blue-500/20 text-blue-400'
                            } ${hoveredDemo === index ? 'animate-pulse' : ''}`}>
                              {demo.status}
                            </span>
                          </div>
                          <span className="text-xs text-primary/80">{demo.category}</span>
                        </div>
                      </div>

                      {/* Terminal-Style Title */}
                      <div className="space-y-2">
                        <h3 className={`text-xl font-bold text-white transition-all duration-300 
                          ${hoveredDemo === index ? `text-${demo.color}` : ''}`}>
                          {bootingUp === index ? '> Initializing...' : demo.title}
                        </h3>
                        {bootingUp === index && (
                          <div className="text-xs text-white/60 font-mono">
                            <div className="animate-pulse">// Loading AI modules...</div>
                            <div className="animate-pulse delay-200">// Connecting to services...</div>
                            <div className="animate-pulse delay-500">// System ready</div>
                          </div>
                        )}
                      </div>

                      {!bootingUp && (
                        <>
                          <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {demo.description}
                          </p>
                          
                          {/* Feature Matrix */}
                          <div className="grid grid-cols-2 gap-2">
                            {demo.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className={`glass-card p-2 rounded text-xs text-center transition-all duration-300 
                                  ${hoveredDemo === index ? `border-${demo.color}/30 bg-${demo.color}/5` : ''}`}
                              >
                                <span className="text-white/80">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Interactive CTA */}
                      <Button 
                        className={`w-full font-semibold transition-all duration-300 group/btn
                          ${demo.status === 'Coming Soon' ? 'glass-button opacity-50 cursor-not-allowed' : 
                            `glass-button text-white hover:shadow-lg hover:shadow-${demo.color}/20`}
                          ${hoveredDemo === index && demo.status !== 'Coming Soon' ? 'animate-pulse' : ''}`}
                        disabled={demo.status === 'Coming Soon'}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {bootingUp === index ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Starting...</span>
                            </>
                          ) : (
                            <>
                              {demo.status === 'Available' && <Play className="w-4 h-4" />}
                              <span>
                                {demo.status === 'Available' ? 'Launch Demo' : 
                                 demo.status === 'Beta' ? 'Join Beta' : 'Notify Me'}
                              </span>
                              {demo.status !== 'Coming Soon' && (
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              )}
                            </>
                          )}
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
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