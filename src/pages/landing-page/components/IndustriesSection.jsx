import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const industries = [
    {
      id: 1,
      name: "Moda Sostenible",
      description: "Automatización para marcas de moda ética y circular",
      icon: "Shirt",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      metrics: {
        growth: "+145%",
        metric: "Ventas online"
      },
      testimonial: {
        text: "Mosaiko Labs nos ayudó a automatizar sin perder nuestra esencia artesanal",
        author: "María González",
        company: "Verde Textil"
      },
      automationExample: "CRM que rastrea impacto ambiental por prenda vendida"
    },
    {
      id: 2,
      name: "Turismo Responsable",
      description: "Soluciones para experiencias de viaje conscientes",
      icon: "MapPin",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      metrics: {
        growth: "+89%",
        metric: "Reservas directas"
      },
      testimonial: {
        text: "Triplicamos reservas manteniendo nuestro compromiso con comunidades locales",
        author: "Carlos Mendoza",
        company: "Eco Aventuras"
      },
      automationExample: "Chatbot que educa sobre impacto positivo del turismo"
    },
    {
      id: 3,
      name: "Emprendimientos Creativos",
      description: "Tecnología para artistas y creadores conscientes",
      icon: "Palette",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      metrics: {
        growth: "+167%",
        metric: "Alcance orgánico"
      },
      testimonial: {
        text: "Ahora puedo enfocarme en crear mientras la tecnología maneja las ventas",
        author: "Ana Ruiz",
        company: "Arte Regenerativo"
      },
      automationExample: "Funnel que cuenta la historia detrás de cada obra"
    },
    {
      id: 4,
      name: "Economía Circular",
      description: "Automatización para modelos de negocio circulares",
      icon: "Recycle",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      metrics: {
        growth: "+203%",
        metric: "Eficiencia operativa"
      },
      testimonial: {
        text: "Optimizamos toda la cadena de reciclaje con IA especializada",
        author: "Roberto Silva",
        company: "Ciclo Verde"
      },
      automationExample: "Sistema que optimiza rutas de recolección y procesamiento"
    },
    {
      id: 5,
      name: "Alimentación Trazable",
      description: "Tecnología para productores de alimentos conscientes",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
      metrics: {
        growth: "+134%",
        metric: "Ventas directas"
      },
      testimonial: {
        text: "Conectamos directamente con consumidores que valoran la transparencia",
        author: "Laura Jiménez",
        company: "Huerta Digital"
      },
      automationExample: "Blockchain que rastrea origen y proceso de cada producto"
    },
    {
      id: 6,
      name: "Educación Alternativa",
      description: "Soluciones para centros educativos innovadores",
      icon: "GraduationCap",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      metrics: {
        growth: "+78%",
        metric: "Inscripciones"
      },
      testimonial: {
        text: "Automatizamos procesos administrativos para enfocarnos en la pedagogía",
        author: "Miguel Torres",
        company: "Escuela Libre"
      },
      automationExample: "CRM que personaliza el journey educativo de cada familia"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, industries.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Sectores que Transformamos
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Especializados en 6 industrias sostenibles con soluciones de automatización 
            diseñadas específicamente para cada sector.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {industries.map((industry) => (
                <div key={industry.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-2xl p-8 border border-border">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Icon name={industry.icon} size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-2xl font-bold text-primary">
                            {industry.name}
                          </h3>
                          <p className="text-muted-foreground font-inter">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-playfair text-2xl font-bold text-secondary">
                              {industry.metrics.growth}
                            </div>
                            <div className="text-sm text-muted-foreground font-inter">
                              {industry.metrics.metric}
                            </div>
                          </div>
                          <Icon name="TrendingUp" size={24} className="text-secondary" />
                        </div>
                      </div>

                      {/* Testimonial */}
                      <blockquote className="border-l-4 border-secondary pl-4">
                        <p className="font-inter text-foreground italic mb-2">
                          "{industry.testimonial.text}"
                        </p>
                        <footer className="text-sm text-muted-foreground">
                          <strong>{industry.testimonial.author}</strong> - {industry.testimonial.company}
                        </footer>
                      </blockquote>

                      {/* Automation Example */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Icon name="Zap" size={16} className="text-secondary mt-1" />
                          <div>
                            <div className="text-sm font-inter font-medium text-foreground mb-1">
                              Ejemplo de Automatización:
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {industry.automationExample}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-secondary' : 'bg-border'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            <span>{isAutoPlaying ? 'Pausar' : 'Reproducir'} carrusel</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;