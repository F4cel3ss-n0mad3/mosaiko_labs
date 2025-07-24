import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "¿Cómo garantizan que la automatización no comprometa nuestros valores sostenibles?",
      answer: `Nuestra metodología única se basa en tres pilares fundamentales:\n\n• **Análisis de valores**: Antes de cualquier implementación, mapeamos profundamente la misión y valores de tu empresa.\n\n• **IA entrenada en sostenibilidad**: Nuestros sistemas están específicamente entrenados para reconocer y preservar principios éticos y ambientales.\n\n• **Revisión humana continua**: Cada proceso automatizado pasa por filtros humanos especializados en sostenibilidad.\n\nEl resultado es tecnología que amplifica tu propósito, no que lo diluye.`,
      category: "Valores y Ética"
    },
    {
      question: "¿Qué diferencia a Mosaiko Labs de otras agencias de automatización?",
      answer: `Somos la única agencia especializada exclusivamente en negocios sostenibles:\n\n• **Experiencia sectorial**: Más de 5 años trabajando únicamente con empresas conscientes.\n\n• **Equipo especializado**: Nuestro equipo combina expertise técnico con formación en sostenibilidad.\n\n• **Metodología propia**: Hemos desarrollado frameworks específicos para preservar autenticidad durante la automatización.\n\n• **Red de partners sostenibles**: Colaboramos solo con proveedores que comparten valores éticos.\n\n• **Métricas de impacto**: Medimos no solo ROI financiero, sino también impacto social y ambiental.`,
      category: "Diferenciación"
    },
    {
      question: "¿Cuánto tiempo toma ver resultados concretos?",
      answer: `Los resultados varían según el alcance, pero nuestros clientes típicamente experimentan:\n\n**Primeras 2-4 semanas:**\n• Optimización de procesos manuales básicos\n• Primeras automatizaciones de comunicación\n• Ahorro inmediato de 5-8 horas semanales\n\n**Mes 2-3:**\n• Sistemas de CRM y seguimiento funcionando\n• Automatización de ventas implementada\n• Incremento del 20-40% en eficiencia operativa\n\n**Mes 3-6:**\n• Ecosistema completo de automatización\n• Crecimiento sostenido en ventas (promedio +127%)\n• ROI completo de la inversión\n\nCada proyecto incluye hitos claros y métricas de seguimiento.`,
      category: "Resultados y Tiempos"
    },
    {
      question: "¿Qué pasa si nuestro equipo no es muy técnico?",
      answer: `Diseñamos nuestras soluciones pensando en equipos no técnicos:\n\n• **Interfaces intuitivas**: Todos los sistemas son tan fáciles de usar como WhatsApp o Instagram.\n\n• **Formación incluida**: Cada implementación incluye capacitación completa para tu equipo.\n\n• **Soporte continuo**: Ofrecemos acompañamiento durante los primeros 3 meses post-implementación.\n\n• **Documentación clara**: Manuales paso a paso con videos explicativos.\n\n• **Hotline de soporte**: Línea directa para resolver dudas técnicas rápidamente.\n\nNuestros clientes más exitosos a menudo son los menos técnicos inicialmente.`,
      category: "Capacidades Técnicas"
    },
    {
      question: "¿Cuál es la inversión típica y cómo se estructura el pago?",
      answer: `La inversión varía según las necesidades específicas, pero ofrecemos máxima flexibilidad:\n\n**Diagnóstico gratuito**: Siempre comenzamos con una consulta sin costo para evaluar tu situación.\n\n**Opciones de pago flexibles:**\n• Pago único con descuentos por pronto pago\n• Planes mensuales sin intereses\n• Modelo de éxito compartido (pagos basados en resultados)\n\n**Rango de inversión típica:**\n• Proyectos básicos: €2,000 - €5,000\n• Transformaciones completas: €8,000 - €15,000\n• Ecosistemas avanzados: €15,000+\n\n**ROI garantizado**: Todos nuestros proyectos incluyen garantía de retorno de inversión en 12 meses.`,
      category: "Inversión y Pagos"
    },
    {
      question: "¿Trabajan con empresas fuera de España?",
      answer: `Sí, trabajamos con negocios sostenibles en toda Latinoamérica y Europa:\n\n**Cobertura geográfica:**\n• España (sede principal)\n• México, Colombia, Argentina, Chile\n• Portugal, Francia, Italia\n\n**Adaptación local:**\n• Horarios de trabajo locales\n• Cumplimiento de regulaciones específicas (GDPR, LGPD, etc.)\n• Integración con plataformas de pago regionales\n• Soporte en español, inglés y portugués\n\n**Metodología remota probada:**\n• Más del 70% de nuestros clientes son internacionales\n• Procesos 100% digitales y eficientes\n• Comunicación fluida por videollamada y Slack\n\nLa distancia no es barrera para la excelencia.`,
      category: "Alcance Geográfico"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre automatización 
            para negocios sostenibles.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary text-xs font-inter font-medium rounded">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-inter font-semibold text-foreground text-lg leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <Icon name="ChevronDown" size={16} className="text-secondary" />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-6">
                    <div className="prose prose-sm max-w-none">
                      {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('•')) {
                          // Handle bullet points
                          return (
                            <div key={pIndex} className="space-y-2 my-4">
                              {paragraph.split('\n').map((line, lIndex) => {
                                if (line.startsWith('•')) {
                                  const [bullet, ...rest] = line.split('**');
                                  const text = rest.join('**');
                                  const [boldText, normalText] = text.split('**');
                                  
                                  return (
                                    <div key={lIndex} className="flex items-start space-x-3">
                                      <Icon name="Check" size={14} className="text-secondary mt-1 flex-shrink-0" />
                                      <span className="text-muted-foreground font-inter text-sm">
                                        {boldText && <strong className="text-foreground">{boldText}</strong>}
                                        {normalText && normalText.replace(/^:\s*/, ': ')}
                                      </span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          );
                        } else if (paragraph.includes('**')) {
                          // Handle bold text sections
                          const parts = paragraph.split('**');
                          return (
                            <p key={pIndex} className="text-muted-foreground font-inter leading-relaxed mb-4">
                              {parts.map((part, partIndex) => 
                                partIndex % 2 === 1 ? 
                                  <strong key={partIndex} className="text-foreground font-semibold">{part}</strong> : 
                                  part
                              )}
                            </p>
                          );
                        } else {
                          // Regular paragraphs
                          return (
                            <p key={pIndex} className="text-muted-foreground font-inter leading-relaxed mb-4">
                              {paragraph}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-xl p-8 border border-border">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="MessageCircle" size={24} className="text-secondary" />
              <h3 className="font-playfair text-xl font-semibold text-primary">
                ¿Tienes otra pregunta?
              </h3>
            </div>
            <p className="text-muted-foreground font-inter mb-6">
              Nuestro equipo está aquí para resolver cualquier duda específica sobre tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@mosaikolabs.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-inter font-medium hover:bg-secondary/90 transition-colors"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                hola@mosaikolabs.com
              </a>
              <a
                href="https://wa.me/34600000000"
                className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded-lg font-inter font-medium hover:bg-muted/50 transition-colors"
              >
                <Icon name="MessageSquare" size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;