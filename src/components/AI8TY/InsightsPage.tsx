import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp, Users, Calendar } from 'lucide-react';

const InsightsPage: React.FC = () => {
  const articles = [
    {
      category: 'Service Excellence',
      title: '72-Hour Web Builds: How AI8TY Delivers Production-Ready Sites in 3 Days',
      excerpt: 'Behind the scenes of our signature service: the tools, processes, and AI-powered workflows that make impossible timelines possible.',
      author: 'AI8TY Development Team',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      category: 'Creative Process',
      title: 'The Intelligence Stack: How Our Four Service Layers Work Together',
      excerpt: 'Deep dive into AI8TY\'s integrated approach: from creative vision through AI development to growth strategy and rapid execution.',
      author: 'Creative Director, AI8TY',
      date: '2024-01-10',
      readTime: '12 min read',
      featured: false
    },
    {
      category: 'Client Success',
      title: 'From Concept to Launch: Real Stories from AI8TY Clients',
      excerpt: 'Case studies showing how businesses transformed their operations using our Creative & Design, AI Solutions, Strategy, and Development services.',
      author: 'Client Success Team',
      date: '2024-01-05',
      readTime: '6 min read',
      featured: false
    },
    {
      category: 'Community Spotlight',
      title: 'Open Source AI: Building the Infrastructure for Tomorrow',
      excerpt: 'Highlighting the community-driven projects and open source initiatives that are making AI more accessible and transparent.',
      author: 'AI8TY Labs Team',
      date: '2024-01-01',
      readTime: '10 min read',
      featured: false
    }
  ];

  const categories = [
    { name: 'AI Trends', count: 12, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Technical Deep Dive', count: 8, icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Industry Analysis', count: 15, icon: <Users className="w-5 h-5" /> },
    { name: 'Community Spotlight', count: 6, icon: <Calendar className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Insights
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Thought leadership, technical insights, and industry analysis from the AI8TY team. Stay informed about the latest developments in accessible AI.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      {category.icon}
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{category.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article, index) => (
          <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Featured</span>
                  <span className="px-3 py-1 glass-card text-white/80 text-sm rounded-full">{article.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {article.title}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button className="glass-button text-white font-semibold">
                    Read Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Articles Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <span className="px-3 py-1 glass-card text-white/80 text-xs rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="space-y-3">
                      <div className="text-white/60 text-xs space-y-1">
                        <div>By {article.author}</div>
                        <div className="flex items-center gap-2">
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full text-white border-white/20 hover:border-primary/40">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Stay Updated with AI8TY Insights
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Get the latest articles, research findings, and industry insights delivered directly to your inbox. Join our community of AI enthusiasts and practitioners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 glass-card border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary/50"
                />
                <Button className="glass-button text-white font-semibold px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsightsPage;