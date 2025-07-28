import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Zap, Shield, Globe, ArrowRight } from 'lucide-react';

const WhatWeBuildPage: React.FC = () => {
  const products = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: 'AI Development Platform',
      description: 'Complete toolkit for building, training, and deploying AI models with enterprise-grade security and scalability.',
      features: ['Model Training Studio', 'API Management', 'Version Control', 'Performance Monitoring'],
      category: 'Platform',
      status: 'Live'
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: 'Intelligent Automation Suite',
      description: 'End-to-end automation tools that learn and adapt to your business processes.',
      features: ['Visual Workflow Builder', 'Smart Triggers', 'Data Integration', 'Process Analytics'],
      category: 'Automation',
      status: 'Beta'
    },
    {
      icon: <Database className="w-10 h-10 text-secondary" />,
      title: 'Knowledge Intelligence Hub',
      description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
      features: ['Data Discovery', 'Predictive Analytics', 'Natural Language Queries', 'Custom Dashboards'],
      category: 'Analytics',
      status: 'Live'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'AI Safety & Governance',
      description: 'Comprehensive tools for responsible AI deployment with built-in compliance and monitoring.',
      features: ['Bias Detection', 'Compliance Monitoring', 'Audit Trails', 'Risk Assessment'],
      category: 'Security',
      status: 'Coming Soon'
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: 'Community AI Infrastructure',
      description: 'Open-source tools and infrastructure for democratizing AI access across communities.',
      features: ['Public APIs', 'Educational Resources', 'Community Models', 'Open Datasets'],
      category: 'Open Source',
      status: 'Alpha'
    }
  ];

  const capabilities = [
    'Custom AI Model Development',
    'Enterprise Integration Services',
    'Scalable Cloud Infrastructure',
    'Real-time Processing Systems',
    'Advanced Security & Compliance',
    'Multi-platform Deployment'
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Build
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We create intelligent tools and infrastructure that bridge the gap between cutting-edge AI research and practical, everyday applications. Our solutions are designed to be powerful yet accessible, scalable yet simple.
          </p>
        </div>

        {/* Core Message */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligent tools and infrastructure for real-world impact
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Every product we build is guided by one principle: making advanced AI capabilities accessible and useful for teams and organizations of all sizes.
            </p>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Product Suite
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-102">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                          {product.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{product.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-1 glass-card rounded-full text-white/80">
                              {product.category}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              product.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                              product.status === 'Beta' ? 'bg-blue-500/20 text-blue-400' :
                              product.status === 'Alpha' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {product.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="glass-card p-3 rounded-lg">
                          <span className="text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      className="w-full glass-button text-white font-semibold group"
                      disabled={product.status === 'Coming Soon'}
                    >
                      {product.status === 'Live' ? 'Learn More' :
                       product.status === 'Beta' ? 'Join Beta' :
                       product.status === 'Alpha' ? 'Request Access' :
                       'Coming Soon'}
                      {product.status !== 'Coming Soon' && (
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white">
            Core Capabilities
          </h2>
          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-white/90">{capability}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Ready to Build with AI8TY?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Whether you need a complete AI platform or custom solutions, our team can help you harness the power of intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glass-button text-white font-semibold px-8 py-3">
                  Explore Our Platform
                </Button>
                <Button className="glass-button-purple text-white font-semibold px-8 py-3">
                  Schedule a Demo
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