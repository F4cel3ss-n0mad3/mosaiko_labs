import React from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = ({ onDiagnosticClick, onCaseStudiesClick }) => {
  const trustMetrics = [
    { value: "127%", label: "Aumento promedio en ventas" },
    { value: "15h", label: "Tiempo ahorrado semanal" },
    { value: "98%", label: "Satisfacción del cliente" },
    { value: "2.5K", label: "Seguidores @mosaikostudio" }
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-background via-muted to-accent/20 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full text-sm font-inter text-secondary font-medium">
                Grupo Mosaiko • Tecnología Sostenible
              </div>
              
              <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Tecnología con propósito.
                <span className="block text-secondary">Ventas con alma.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl">
                La única agencia de automatización especializada exclusivamente en negocios sostenibles. 
                Combinamos IA de vanguardia con sensibilidad ética para escalar ventas sin perder autenticidad.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={onDiagnosticClick}
                className="font-inter font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Solicita tu Diagnóstico Gratuito
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={onCaseStudiesClick}
                className="font-inter"
                iconName="PlayCircle"
                iconPosition="left"
              >
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-inter text-2xl md:text-3xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=700&fit=crop"
                alt="Emprendedora sostenible trabajando con tecnología"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-inter text-foreground">IA Activa</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="text-sm font-inter text-muted-foreground">Valores preservados</div>
              <div className="font-inter text-lg font-semibold text-secondary">100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;