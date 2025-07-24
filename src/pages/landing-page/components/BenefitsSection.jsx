import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const [visibleBenefits, setVisibleBenefits] = useState([]);
  const sectionRef = useRef(null);

  const benefits = [
    {
      id: 1,
      title: "Ventas que Crecen sin Comprometer Valores",
      description: "Aumenta ingresos manteniendo coherencia con tu misión sostenible",
      icon: "TrendingUp",
      stat: "127%",
      statLabel: "Aumento promedio en ventas",
      quote: "Duplicamos facturación sin perder nuestra esencia artesanal",
      author: "Elena Vásquez, Moda Circular"
    },
    {
      id: 2,
      title: "Operaciones Automatizadas con Toque Humano",
      description: "Libera 15+ horas semanales para enfocarte en tu impacto",
      icon: "Clock",
      stat: "15h",
      statLabel: "Tiempo ahorrado semanal",
      quote: "Ahora tengo tiempo para innovar en sostenibilidad",
      author: "Miguel Santos, Eco Packaging"
    },
    {
      id: 3,
      title: "Presencia Digital que Refleja tu Propósito",
      description: "Comunica tu misión de forma profesional y auténtica",
      icon: "Globe",
      stat: "234%",
      statLabel: "Mejora en visibilidad online",
      quote: "Nuestro mensaje sostenible ahora llega a más personas",
      author: "Carmen López, Turismo Responsable"
    },
    {
      id: 4,
      title: "Clientes Más Comprometidos y Fieles",
      description: "Atrae y retiene clientes que comparten tus valores",
      icon: "Heart",
      stat: "89%",
      statLabel: "Aumento en retención",
      quote: "Nuestros clientes se convirtieron en embajadores de marca",
      author: "David Morales, Alimentación Orgánica"
    },
    {
      id: 5,
      title: "Escalabilidad sin Perder Autenticidad",
      description: "Crece de forma sostenible preservando tu esencia única",
      icon: "Zap",
      stat: "98%",
      statLabel: "Satisfacción mantenida",
      quote: "Crecimos 300% manteniendo nuestra filosofía intacta",
      author: "Isabel Ruiz, Educación Alternativa"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const benefitIndex = parseInt(entry.target.dataset.index);
            setVisibleBenefits(prev => {
              if (!prev.includes(benefitIndex)) {
                return [...prev, benefitIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const benefitElements = sectionRef.current?.querySelectorAll('[data-index]');
    benefitElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Más de 150 negocios sostenibles han transformado sus operaciones 
            sin comprometer sus valores fundamentales.
          </p>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              data-index={index}
              className={`transform transition-all duration-700 ${
                visibleBenefits.includes(index)
                  ? 'translate-x-0 opacity-100' :'translate-x-8 opacity-0'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center bg-card rounded-xl p-8 border border-border shadow-sm">
                {/* Checkmark & Content */}
                <div className="lg:col-span-2 flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    visibleBenefits.includes(index)
                      ? 'bg-secondary text-secondary-foreground scale-100'
                      : 'bg-muted text-muted-foreground scale-75'
                  }`}>
                    <Icon name="Check" size={16} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-playfair text-xl font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    {/* Quote */}
                    <blockquote className="border-l-2 border-secondary/30 pl-4 mt-4">
                      <p className="font-inter text-sm italic text-foreground">
                        "{benefit.quote}"
                      </p>
                      <footer className="text-xs text-muted-foreground mt-1">
                        — {benefit.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>

                {/* Stat */}
                <div className="text-center lg:text-right">
                  <div className="inline-flex flex-col items-center lg:items-end space-y-2">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name={benefit.icon} size={32} className="text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <div className={`font-playfair text-3xl font-bold transition-all duration-700 ${
                        visibleBenefits.includes(index)
                          ? 'text-secondary scale-100' :'text-muted-foreground scale-75'
                      }`}>
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-muted-foreground font-inter">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
              Impacto Colectivo
            </h3>
            <p className="text-muted-foreground font-inter">
              El resultado de trabajar con más de 150 negocios sostenibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-secondary mb-2">
                150+
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Negocios transformados
              </div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-secondary mb-2">
                2.3M€
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Ingresos adicionales generados
              </div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-secondary mb-2">
                1,200h
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Tiempo ahorrado mensual
              </div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-secondary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Valores preservados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;