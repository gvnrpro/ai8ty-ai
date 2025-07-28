import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AI8TYPage } from '@/hooks/useAI8TYNavigation';

interface TopNavigationProps {
  currentPage: AI8TYPage;
  mobileMenuOpen: boolean;
  onNavigate: (page: AI8TYPage) => void;
  onMobileMenuToggle: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  currentPage,
  mobileMenuOpen,
  onNavigate,
  onMobileMenuToggle
}) => {
  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'what-we-build', label: 'What We Build' },
    { id: 'labs', label: 'Labs' },
    { id: 'insights', label: 'Insights' },
    { id: 'join-us', label: 'Join Us' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="text-headline font-bold text-white group-hover:text-primary transition-colors">
                AI8TY
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`text-body font-medium transition-colors ${
                    currentPage === item.id ? 'text-white' : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                variant="glass"
                size="sm"
              >
                Try AI8TY
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={onMobileMenuToggle}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={onMobileMenuToggle} />
          <div className="fixed top-16 right-4 left-4 glass-card rounded-2xl overflow-hidden">
            <div className="p-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`block w-full text-left px-4 py-3 text-body font-medium transition-colors rounded-xl ${
                    currentPage === item.id 
                      ? 'text-white bg-primary/20' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                variant="glass"
                className="w-full"
              >
                Try AI8TY
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavigation;