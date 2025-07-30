import { 
  Palette, Eye, Smartphone, Globe, 
  Brain, Mic, MessageSquare, BarChart3,
  TrendingUp, Target, Search, Zap,
  Code, Timer, Wrench, ArrowRight, Sparkles
} from 'lucide-react';

export interface ServiceDetail {
  name: string;
  icon: any;
  description: string;
  price?: string;
  deliveryTime?: string;
}

export interface ServiceCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  services: ServiceDetail[];
  deliveryTime: string;
  startingPrice: string;
  cta: string;
  features: string[];
}

export const ai8tyServices: ServiceCategory[] = [
  {
    id: 'creative-design',
    category: '🧠 Creative & Design',
    title: 'Vision Layer',
    description: 'Where intelligence meets aesthetics. We craft brand experiences that resonate and visual stories that convert.',
    icon: Palette,
    gradient: 'from-purple-500/20 to-pink-500/20',
    cta: 'Transform Your Brand',
    features: [
      'Custom brand identity systems',
      'Interactive 3D experiences',
      'Conversion-optimized design',
      'Motion graphics & animation'
    ],
    services: [
      { 
        name: 'Branding & Identity', 
        icon: Eye, 
        description: 'Complete brand systems that tell your story',
        price: 'From $2,500',
        deliveryTime: '7-10 days'
      },
      { 
        name: '3D Visualization', 
        icon: Sparkles, 
        description: 'Immersive 3D experiences and product renders',
        price: 'From $3,500',
        deliveryTime: '5-12 days'
      },
      { 
        name: 'UI/UX Design', 
        icon: Smartphone, 
        description: 'User-centered design that drives engagement',
        price: 'From $3,000',
        deliveryTime: '8-14 days'
      },
      { 
        name: 'Web Design', 
        icon: Globe, 
        description: 'Responsive websites that perform and convert',
        price: 'From $2,000',
        deliveryTime: '5-8 days'
      },
      { 
        name: 'Cinematic Media & Motion Graphics', 
        icon: Zap, 
        description: 'Dynamic visuals that captivate audiences',
        price: 'From $4,000',
        deliveryTime: '10-14 days'
      }
    ],
    deliveryTime: '5-14 days',
    startingPrice: 'From $2,000'
  },
  {
    id: 'ai-tech-solutions',
    category: '🤖 AI & Tech Solutions',
    title: 'Intelligence Engine',
    description: 'Custom AI that thinks like your team and works like magic. From chatbots to digital twins.',
    icon: Brain,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    cta: 'Build AI Solutions',
    features: [
      'Custom AI model development',
      'Voice cloning & synthesis',
      'Intelligent chat interfaces',
      'Real-time data processing'
    ],
    services: [
      { 
        name: 'Custom AI Tools', 
        icon: Brain, 
        description: 'Tailored AI solutions for your specific workflows',
        price: 'From $5,000',
        deliveryTime: '14-21 days'
      },
      { 
        name: 'Digital Clones & Voice Models', 
        icon: Mic, 
        description: 'AI replicas that sound and think like you',
        price: 'From $7,500',
        deliveryTime: '10-14 days'
      },
      { 
        name: 'AI-Powered Chat Interfaces', 
        icon: MessageSquare, 
        description: 'Intelligent conversations that understand context',
        price: 'From $4,500',
        deliveryTime: '7-12 days'
      },
      { 
        name: 'Data Visualization Dashboards', 
        icon: BarChart3, 
        description: 'Transform data into actionable insights',
        price: 'From $3,500',
        deliveryTime: '8-15 days'
      }
    ],
    deliveryTime: '7-21 days',
    startingPrice: 'From $3,500'
  },
  {
    id: 'strategy-growth',
    category: '📈 Strategy & Growth',
    title: 'Growth Catalyst',
    description: 'Data-driven strategies that scale. We optimize your path to growth with precision and intelligence.',
    icon: TrendingUp,
    gradient: 'from-green-500/20 to-emerald-500/20',
    cta: 'Accelerate Growth',
    features: [
      'Strategic business modeling',
      'Conversion optimization',
      'Growth hacking strategies',
      'Performance marketing'
    ],
    services: [
      { 
        name: 'Business Modeling', 
        icon: Target, 
        description: 'Strategic frameworks for sustainable growth',
        price: 'From $2,500',
        deliveryTime: '5-7 days'
      },
      { 
        name: 'Funnel Optimization', 
        icon: TrendingUp, 
        description: 'Convert more visitors into customers',
        price: 'From $3,000',
        deliveryTime: '7-10 days'
      },
      { 
        name: 'Growth Strategy', 
        icon: Zap, 
        description: 'Roadmaps for scaling your business',
        price: 'From $4,000',
        deliveryTime: '5-8 days'
      },
      { 
        name: 'SEO & Campaign Planning', 
        icon: Search, 
        description: 'Visibility strategies that drive results',
        price: 'From $1,500',
        deliveryTime: '3-5 days'
      }
    ],
    deliveryTime: '3-10 days',
    startingPrice: 'From $1,500'
  },
  {
    id: 'web-app-development',
    category: '🌐 Web & App Development',
    title: 'Execution Platform',
    description: 'Lightning-fast development that doesn\'t compromise on quality. From idea to deployment in 72 hours.',
    icon: Code,
    gradient: 'from-orange-500/20 to-yellow-500/20',
    cta: 'Start 72hr Build',
    features: [
      '72-hour delivery guarantee',
      'Mobile-first development',
      'API integrations',
      'Performance optimization'
    ],
    services: [
      { 
        name: '72hr Web Builds', 
        icon: Timer, 
        description: 'Complete websites delivered in 3 days',
        price: 'From $3,500',
        deliveryTime: '3 days'
      },
      { 
        name: 'Mobile-Optimized Sites', 
        icon: Smartphone, 
        description: 'Perfect experiences on every device',
        price: 'From $4,000',
        deliveryTime: '5-7 days'
      },
      { 
        name: 'App Development & API Integration', 
        icon: Wrench, 
        description: 'Custom applications that scale with you',
        price: 'From $8,000',
        deliveryTime: '14-21 days'
      },
      { 
        name: 'Hosting & Custom Domains', 
        icon: Globe, 
        description: 'Complete deployment and maintenance',
        price: 'From $500/mo',
        deliveryTime: '1-2 days'
      }
    ],
    deliveryTime: '3-21 days',
    startingPrice: 'From $3,500'
  }
];

export const getServiceById = (id: string): ServiceCategory | undefined => {
  return ai8tyServices.find(service => service.id === id);
};

export const getAllServiceCategories = (): string[] => {
  return ai8tyServices.map(service => service.category);
};

export const getServicesByCategory = (category: string): ServiceCategory | undefined => {
  return ai8tyServices.find(service => service.category === category);
};