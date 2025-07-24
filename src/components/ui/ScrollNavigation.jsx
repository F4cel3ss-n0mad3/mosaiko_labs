import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Inicio', anchor: '#inicio', description: 'Página principal' },
    { label: 'Servicios', anchor: '#servicios', description: 'Nuestras 8 soluciones de automatización' },
    { label: 'Casos de Éxito', anchor: '#casos-exito', description: 'Testimonios y métricas de crecimiento' },
    { label: 'Diagnóstico', anchor: '#diagnostico', description: 'Reserva tu consulta gratuita' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.anchor.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (anchor) => {
    const element = document.getElementById(anchor.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-playfair font-bold text-xl text-primary">
              Mosaiko Labs
            </div>
            <div className="ml-2 text-xs text-muted-foreground font-inter">
              Grupo Mosaiko
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => handleAnchorClick(item.anchor)}
                className={`font-inter text-sm transition-smooth hover:text-secondary ${
                  activeSection === item.anchor.substring(1)
                    ? 'text-secondary font-medium' :'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="px-6 py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => handleAnchorClick(item.anchor)}
                className={`block w-full text-left font-inter text-sm py-2 transition-smooth ${
                  activeSection === item.anchor.substring(1)
                    ? 'text-secondary font-medium' :'text-foreground hover:text-secondary'
                }`}
              >
                <div>{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </div>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default ScrollNavigation;