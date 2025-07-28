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
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-space-blue/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-space-blue via-space-purple to-space-pink bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                AI8TY
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white relative group ${
                    currentPage === item.id ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-space-blue to-space-pink transition-all duration-300 ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                className="glass-button text-white font-semibold px-6 py-3"
              >
                Try AI8TY
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={onMobileMenuToggle}
                className="text-white/80 hover:text-white transition-colors p-2 glass-card"
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onMobileMenuToggle} />
          <div className="fixed top-20 right-4 left-4 glass-card border border-space-blue/20 rounded-2xl overflow-hidden">
            <div className="p-6 space-y-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AI8TYPage)}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                    currentPage === item.id 
                      ? 'text-white bg-gradient-to-r from-space-blue/30 to-space-purple/30' 
                      : 'text-white/80 hover:text-white hover:bg-space-blue/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => onNavigate('try-ai8ty')}
                className="w-full glass-button text-white font-semibold py-4"
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