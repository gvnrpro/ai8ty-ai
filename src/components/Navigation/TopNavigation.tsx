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
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI8TY
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.id ? 'text-primary' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                className="glass-button text-white font-semibold"
              >
                Try AI8TY
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={onMobileMenuToggle}
                className="text-white/80 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onMobileMenuToggle} />
          <div className="fixed top-16 right-0 w-64 h-full glass-card border-l border-white/10">
            <div className="p-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.id ? 'text-primary' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                className="w-full glass-button text-white font-semibold"
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