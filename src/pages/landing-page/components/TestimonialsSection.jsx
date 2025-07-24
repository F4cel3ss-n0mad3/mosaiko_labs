import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      company: "Verde Textil", 
      sector: "Moda Sostenible",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=50&fit=crop",
      testimonial: `Mosaiko Labs transformó completamente nuestra operación. Pasamos de gestionar todo manualmente a tener un sistema automatizado que respeta nuestra filosofía artesanal.\n\nLo más impresionante es que no perdimos nuestra esencia. Al contrario, ahora podemos dedicar más tiempo a la creatividad y menos a tareas administrativas.`,
      results: [
        { metric: "Ventas", value: "+145%", icon: "TrendingUp" },
        { metric: "Tiempo ahorrado", value: "20h/sem", icon: "Clock" },
        { metric: "Satisfacción", value: "98%", icon: "Heart" }
      ],
      videoThumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop",
      challenge: "Gestión manual de inventario y ventas limitaba el crecimiento",
      solution: "CRM automatizado + sistema de inventario inteligente",
      timeline: "3 meses"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      company: "Eco Aventuras",
      sector: "Turismo Responsable",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=50&fit=crop",
      testimonial: `Necesitábamos escalar sin perder el toque personal que nos caracteriza. Mosaiko Labs creó un sistema que automatiza reservas pero mantiene la calidez humana.\n\nNuestros clientes siguen sintiendo que hablan con personas reales, no con robots. Esa es la magia de trabajar con especialistas en sostenibilidad.`,
      results: [
        { metric: "Reservas directas", value: "+89%", icon: "MapPin" },
        { metric: "Eficiencia", value: "+156%", icon: "Zap" },
        { metric: "NPS", value: "92", icon: "Star" }
      ],
      videoThumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      challenge: "Dependencia de intermediarios y procesos manuales de reserva",
      solution: "Plataforma de reservas directas + chatbot especializado",
      timeline: "4 meses"
    },
    {
      id: 3,
      name: "Ana Ruiz",
      company: "Arte Regenerativo",
      sector: "Emprendimiento Creativo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=50&fit=crop",
      testimonial: `Como artista, odiaba la parte comercial. Mosaiko Labs creó un sistema que vende mis obras mientras yo me enfoco en crear.\n\nLo mejor es que cada venta incluye la historia detrás de la pieza. Mis clientes se conectan emocionalmente con el arte, no solo compran un producto.`,
      results: [
        { metric: "Ventas online", value: "+167%", icon: "Palette" },
        { metric: "Alcance", value: "+234%", icon: "Users" },
        { metric: "Tiempo creativo", value: "+25h/sem", icon: "Brush" }
      ],
      videoThumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=225&fit=crop",
      challenge: "Dificultad para vender arte online manteniendo conexión emocional",
      solution: "Storytelling automatizado + galería virtual interactiva",
      timeline: "2 meses"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleVideoPlay = (testimonialId) => {
    setIsPlaying(testimonialId);
    // En una implementación real, aquí se reproduciría el video
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section id="casos-exito" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-primary mb-6">
            Historias de Transformación Real
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Descubre cómo negocios sostenibles como el tuyo han logrado 
            crecer sin comprometer sus valores fundamentales.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-secondary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].sector}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src={testimonials[currentTestimonial].logo}
                      alt={`${testimonials[currentTestimonial].company} logo`}
                      className="h-8 w-auto opacity-60"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground font-inter leading-relaxed text-lg">
                  {testimonials[currentTestimonial].testimonial.split('\n\n').map((paragraph, index) => (
                    <p key={index} className={index > 0 ? 'mt-4' : ''}>
                      "{paragraph}"
                    </p>
                  ))}
                </blockquote>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6">
                  {testimonials[currentTestimonial].results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon name={result.icon} size={20} className="text-secondary" />
                      </div>
                      <div className="font-inter text-xl font-bold text-secondary">
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-inter">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case Study Details */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-inter font-medium text-foreground mb-1">Desafío:</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].challenge}</div>
                    </div>
                    <div>
                      <div className="font-inter font-medium text-foreground mb-1">Solución:</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].solution}</div>
                    </div>
                    <div>
                      <div className="font-inter font-medium text-foreground mb-1">Tiempo:</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].timeline}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video/Image */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={testimonials[currentTestimonial].videoThumbnail}
                    alt={`Caso de éxito ${testimonials[currentTestimonial].company}`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  
                  {/* Play Button */}
                  <button
                    onClick={() => handleVideoPlay(testimonials[currentTestimonial].id)}
                    className="absolute inset-0 flex items-center justify-center group"
                    disabled={isPlaying === testimonials[currentTestimonial].id}
                  >
                    <div className="w-16 h-16 bg-card/90 rounded-full flex items-center justify-center group-hover:bg-card transition-colors">
                      {isPlaying === testimonials[currentTestimonial].id ? (
                        <div className="w-6 h-6 border-2 border-secondary rounded-full border-t-transparent animate-spin"></div>
                      ) : (
                        <Icon name="Play" size={24} className="text-secondary ml-1" />
                      )}
                    </div>
                  </button>
                  
                  {/* Subtitles Badge */}
                  <div className="absolute bottom-4 right-4 bg-primary/80 text-primary-foreground px-3 py-1 rounded text-sm font-inter">
                    Subtítulos en Español
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-secondary' : 'bg-border'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground font-inter">
            <Icon name="Instagram" size={16} />
            <span>Más casos reales en</span>
            <a href="#" className="text-secondary hover:underline font-medium">@mosaikostudio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;