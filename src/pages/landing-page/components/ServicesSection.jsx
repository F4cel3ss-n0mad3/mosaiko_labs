import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Automatización de Procesos",
      description: "Optimiza operaciones manteniendo el toque humano",
      icon: "Zap",
      roi: "+127%",
      roiLabel: "Eficiencia operativa",
      caseStudy: "Marca de moda sostenible automatizó inventario y redujo desperdicio 40%",
      features: ["Gestión de inventario", "Procesos de producción", "Control de calidad"]
    },
    {
      id: 2,
      title: "CRM Consciente",
      description: "Gestión de clientes alineada con valores sostenibles",
      icon: "Users",
      roi: "+89%",
      roiLabel: "Retención de clientes",
      caseStudy: "Agencia de turismo responsable aumentó fidelización 89% con CRM personalizado",
      features: ["Segmentación ética", "Comunicación personalizada", "Seguimiento de impacto"]
    },
    {
      id: 3,
      title: "Chatbots con Alma",
      description: "IA conversacional que refleja tu propósito",
      icon: "MessageCircle",
      roi: "+156%",
      roiLabel: "Conversiones",
      caseStudy: "Startup de economía circular triplicó consultas con chatbot especializado",
      features: ["Respuestas contextuales", "Escalación humana", "Aprendizaje continuo"]
    },
    {
      id: 4,
      title: "SEO Sostenible",
      description: "Posicionamiento orgánico para marcas conscientes",
      icon: "Search",
      roi: "+234%",
      roiLabel: "Tráfico orgánico",
      caseStudy: "Restaurante de comida trazable multiplicó visibilidad online por 3",
      features: ["Keywords sostenibles", "Contenido de valor", "Link building ético"]
    },
    {
      id: 5,
      title: "Branding Regenerativo",
      description: "Identidad visual que comunica tu impacto",
      icon: "Palette",
      roi: "+78%",
      roiLabel: "Reconocimiento de marca",
      caseStudy: "Escuela alternativa rediseñó identidad y aumentó inscripciones 78%",
      features: ["Diseño consciente", "Storytelling visual", "Coherencia multicanal"]
    },
    {
      id: 6,
      title: "Funnels de Conversión",
      description: "Embudos de venta que respetan el customer journey",
      icon: "TrendingUp",
      roi: "+198%",
      roiLabel: "Tasa de conversión",
      caseStudy: "Consultora ambiental optimizó funnel y duplicó clientes premium",
      features: ["Nurturing personalizado", "Scoring de leads", "Automatización ética"]
    },
    {
      id: 7,
      title: "Diagnóstico 360°",
      description: "Análisis integral de tu ecosistema digital",
      icon: "BarChart3",
      roi: "100%",
      roiLabel: "Claridad estratégica",
      caseStudy: "Cooperativa agrícola identificó 12 oportunidades de crecimiento",
      features: ["Auditoría completa", "Roadmap personalizado", "KPIs sostenibles"]
    },
    {
      id: 8,
      title: "Formación Especializada",
      description: "Capacitación en herramientas para equipos conscientes",
      icon: "GraduationCap",
      roi: "+145%",
      roiLabel: "Productividad del equipo",
      caseStudy: "ONG ambiental capacitó equipo y mejoró impacto digital 145%",
      features: ["Workshops prácticos", "Mentoring continuo", "Certificaciones"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            8 Soluciones para tu Crecimiento Sostenible
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Cada servicio está diseñado específicamente para negocios que priorizan 
            el impacto positivo sin comprometer la rentabilidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon & Title */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-3 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={service.icon} size={24} className="text-secondary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-secondary/20 rounded-full">
                  <span className="text-sm font-inter font-semibold text-secondary">
                    {service.roi}
                  </span>
                </div>
                <Icon name="ArrowUpRight" size={16} className="text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>

              <div className="text-xs text-muted-foreground font-inter">
                {service.roiLabel}
              </div>

              {/* Hover Overlay */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-secondary/50">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name={service.icon} size={20} className="text-secondary" />
                        <span className="font-inter font-semibold text-foreground text-sm">
                          Caso de Éxito
                        </span>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed mb-4">
                        {service.caseStudy}
                      </p>
                    </div>
                    
                    <div>
                      <div className="text-xs text-muted-foreground font-inter mb-2">
                        Incluye:
                      </div>
                      <div className="space-y-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={12} className="text-secondary" />
                            <span className="text-xs text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter mb-6">
            ¿No estás seguro cuál necesitas? Nuestro diagnóstico gratuito te ayudará a identificar las mejores oportunidades.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-lg border border-secondary/20">
            <Icon name="Lightbulb" size={20} className="text-secondary mr-3" />
            <span className="font-inter text-secondary font-medium">
              Diagnóstico personalizado incluido en todas las consultas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;