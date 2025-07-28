import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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
    { name: 'Research', page: 'about' as AI8TYPage },
    { name: 'Safety', page: 'what-we-build' as AI8TYPage },
    { name: 'For Business', page: 'labs' as AI8TYPage },
    { name: 'Company', page: 'join-us' as AI8TYPage }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-xl font-medium text-white transition-colors hover:text-white/80"
          >
            AI8TY
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm transition-colors ${
                  currentPage === item.page
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => onNavigate('try-ai8ty')}
              size="sm"
              className="bg-white text-black hover:bg-white/90 font-medium"
            >
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    onMobileMenuToggle();
                  }}
                  className={`text-left text-sm transition-colors ${
                    currentPage === item.page
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate('try-ai8ty');
                  onMobileMenuToggle();
                }}
                size="sm"
                className="w-fit bg-white text-black hover:bg-white/90 font-medium"
              >
                Log in
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;