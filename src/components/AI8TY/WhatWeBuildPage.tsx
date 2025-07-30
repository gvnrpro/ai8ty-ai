import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, Eye, Smartphone, Globe, 
  Brain, Mic, MessageSquare, BarChart3,
  TrendingUp, Target, Search, Zap,
  Code, Timer, Wrench, ArrowRight, Sparkles
} from 'lucide-react';

const WhatWeBuildPage: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      category: '🧠 Creative & Design',
      title: 'Vision Layer',
      description: 'Where intelligence meets aesthetics. We craft brand experiences that resonate and visual stories that convert.',
      icon: <Palette className="w-8 h-8 text-primary" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      services: [
        { name: 'Branding & Identity', icon: <Eye className="w-5 h-5" />, description: 'Complete brand systems that tell your story' },
        { name: '3D Visualization', icon: <Sparkles className="w-5 h-5" />, description: 'Immersive 3D experiences and product renders' },
        { name: 'UI/UX Design', icon: <Smartphone className="w-5 h-5" />, description: 'User-centered design that drives engagement' },
        { name: 'Web Design', icon: <Globe className="w-5 h-5" />, description: 'Responsive websites that perform and convert' },
        { name: 'Cinematic Media & Motion Graphics', icon: <Zap className="w-5 h-5" />, description: 'Dynamic visuals that captivate audiences' }
      ],
      deliveryTime: '5-14 days',
      startingPrice: 'From $2,500'
    },
    {
      category: '🤖 AI & Tech Solutions',
      title: 'Intelligence Engine',
      description: 'Custom AI that thinks like your team and works like magic. From chatbots to digital twins.',
      icon: <Brain className="w-8 h-8 text-accent" />,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      services: [
        { name: 'Custom AI Tools', icon: <Brain className="w-5 h-5" />, description: 'Tailored AI solutions for your specific workflows' },
        { name: 'Digital Clones & Voice Models', icon: <Mic className="w-5 h-5" />, description: 'AI replicas that sound and think like you' },
        { name: 'AI-Powered Chat Interfaces', icon: <MessageSquare className="w-5 h-5" />, description: 'Intelligent conversations that understand context' },
        { name: 'Data Visualization Dashboards', icon: <BarChart3 className="w-5 h-5" />, description: 'Transform data into actionable insights' }
      ],
      deliveryTime: '7-21 days',
      startingPrice: 'From $5,000'
    },
    {
      category: '📈 Strategy & Growth',
      title: 'Growth Catalyst',
      description: 'Data-driven strategies that scale. We optimize your path to growth with precision and intelligence.',
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      gradient: 'from-green-500/20 to-emerald-500/20',
      services: [
        { name: 'Business Modeling', icon: <Target className="w-5 h-5" />, description: 'Strategic frameworks for sustainable growth' },
        { name: 'Funnel Optimization', icon: <TrendingUp className="w-5 h-5" />, description: 'Convert more visitors into customers' },
        { name: 'Growth Strategy', icon: <Zap className="w-5 h-5" />, description: 'Roadmaps for scaling your business' },
        { name: 'SEO & Campaign Planning', icon: <Search className="w-5 h-5" />, description: 'Visibility strategies that drive results' }
      ],
      deliveryTime: '3-10 days',
      startingPrice: 'From $1,500'
    },
    {
      category: '🌐 Web & App Development',
      title: 'Execution Platform',
      description: 'Lightning-fast development that doesn\'t compromise on quality. From idea to deployment in 72 hours.',
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      gradient: 'from-orange-500/20 to-yellow-500/20',
      services: [
        { name: '72hr Web Builds', icon: <Timer className="w-5 h-5" />, description: 'Complete websites delivered in 3 days' },
        { name: 'Mobile-Optimized Sites', icon: <Smartphone className="w-5 h-5" />, description: 'Perfect experiences on every device' },
        { name: 'App Development & API Integration', icon: <Wrench className="w-5 h-5" />, description: 'Custom applications that scale with you' },
        { name: 'Hosting & Custom Domains', icon: <Globe className="w-5 h-5" />, description: 'Complete deployment and maintenance' }
      ],
      deliveryTime: '3-7 days',
      startingPrice: 'From $3,500'
    }
  ];

  const coreCapabilities = [
    'Rapid prototyping and deployment',
    'AI-first approach to all solutions',
    'Cross-platform compatibility',
    'Scalable architecture design',
    'Performance optimization',
    'Ongoing support and maintenance'
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Intelligence Stack
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Four interconnected layers that transform your business. From vision to execution, 
            each service builds upon the last to create comprehensive digital transformation.
          </p>
        </div>

        {/* Core Philosophy */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Where Art Meets Intelligence
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Every service we offer combines creative excellence with intelligent automation. 
              We don't just build solutions—we craft experiences that think, adapt, and evolve.
            </p>
          </CardContent>
        </Card>

        {/* Service Layers */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            The Four Pillars
          </h2>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <Card className={`glass-card border-white/10 transition-all duration-500 
                  ${activeService === index ? 'border-primary/50 scale-[1.02] shadow-2xl' : 'hover:border-primary/30'}
                `}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Service Header */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 glass-card rounded-full flex items-center justify-center 
                            bg-gradient-to-br ${service.gradient} transition-all duration-300
                            ${activeService === index ? 'scale-110 shadow-lg' : ''}
                          `}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-primary">{service.category}</p>
                          </div>
                        </div>
                        
                        <p className="text-white/80 leading-relaxed">{service.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-xs text-white/60">Delivery Time</p>
                            <p className="text-sm text-white font-semibold">{service.deliveryTime}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-white/60">Investment</p>
                            <p className="text-sm text-white font-semibold">{service.startingPrice}</p>
                          </div>
                        </div>
                      </div>

                      {/* Service Grid */}
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.services.map((subService, subIndex) => (
                            <div 
                              key={subIndex}
                              className={`glass-card p-4 rounded-lg transition-all duration-300 group-hover:bg-white/5
                                ${activeService === index ? 'border-primary/20 bg-white/5' : ''}
                              `}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center flex-shrink-0">
                                  {subService.icon}
                                </div>
                                <div className="space-y-1">
                                  <h4 className="text-white font-semibold text-sm">{subService.name}</h4>
                                  <p className="text-white/70 text-xs leading-relaxed">{subService.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <Button className={`w-full glass-button text-white font-semibold group/btn transition-all duration-300
                        ${activeService === index ? 'animate-pulse-glow' : ''}
                      `}>
                        <span>Explore {service.title}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Why Choose AI8TY
          </h2>
          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-white/90 group-hover:text-white transition-colors">{capability}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 72hr Build Highlight */}
        <Card className="glass-card border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto glass-card rounded-full flex items-center justify-center animate-pulse-glow">
                <Timer className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                72-Hour Web Builds
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our signature service: Complete, production-ready websites delivered in just 3 days. 
                No shortcuts, no compromises—just intelligent development at light speed.
              </p>
              <Button className="glass-button text-white font-semibold px-8 py-3 group">
                <Timer className="w-4 h-4 mr-2" />
                Start Your 72hr Build
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Let's build something extraordinary together. From concept to deployment, 
                we'll guide you through every layer of the Intelligence Stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glass-button text-white font-semibold px-8 py-3">
                  Start Your Project
                </Button>
                <Button className="glass-button-purple text-white font-semibold px-8 py-3">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhatWeBuildPage;