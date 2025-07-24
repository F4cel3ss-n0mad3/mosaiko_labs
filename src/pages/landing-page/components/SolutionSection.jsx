import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('traditional');

  const comparisonData = {
    traditional: {
      title: "Métodos Tradicionales",
      subtitle: "Comprometen tus valores",
      items: [
        { text: "Automatización genérica sin alma", icon: "X", negative: true },
        { text: "Pérdida de conexión humana", icon: "X", negative: true },
        { text: "Mensajes masivos impersonales", icon: "X", negative: true },
        { text: "Tecnología que no entiende tu misión", icon: "X", negative: true }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
    },
    mosaiko: {
      title: "Método Mosaiko Labs",
      subtitle: "Preserva tu esencia regenerativa",
      items: [
        { text: "IA entrenada en valores sostenibles", icon: "Check", negative: false },
        { text: "Automatización con toque humano", icon: "Check", negative: false },
        { text: "Comunicación auténtica y personalizada", icon: "Check", negative: false },
        { text: "Tecnología alineada con tu propósito", icon: "Check", negative: false }
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop"
    }
  };

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Crecimiento Sostenible",
      description: "Escala tus ventas manteniendo la coherencia con tus valores ambientales y sociales"
    },
    {
      icon: "Heart",
      title: "Autenticidad Preservada",
      description: "Nuestra IA comprende y respeta la esencia de tu marca consciente"
    },
    {
      icon: "Zap",
      title: "Automatización Inteligente",
      description: "Procesos optimizados que liberan tiempo para lo que realmente importa"
    },
    {
      icon: "Users",
      title: "Conexión Humana",
      description: "Tecnología que fortalece, no reemplaza, las relaciones auténticas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            La diferencia está en el enfoque
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Mientras otros ofrecen automatización genérica, nosotros creamos soluciones 
            que respetan y potencian tu misión sostenible.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-6 py-3 rounded-md font-inter font-medium transition-all ${
                  activeTab === 'traditional' ?'bg-destructive text-destructive-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Métodos Tradicionales
              </button>
              <button
                onClick={() => setActiveTab('mosaiko')}
                className={`px-6 py-3 rounded-md font-inter font-medium transition-all ${
                  activeTab === 'mosaiko' ?'bg-secondary text-secondary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Método Mosaiko Labs
              </button>
            </div>
          </div>

          {/* Comparison Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                  {comparisonData[activeTab].title}
                </h3>
                <p className={`font-inter ${
                  activeTab === 'traditional' ? 'text-destructive' : 'text-secondary'
                }`}>
                  {comparisonData[activeTab].subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {comparisonData[activeTab].items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      item.negative 
                        ? 'bg-destructive/20 text-destructive' :'bg-secondary/20 text-secondary'
                    }`}>
                      <Icon name={item.icon} size={14} />
                    </div>
                    <span className="font-inter text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={comparisonData[activeTab].image}
                  alt={comparisonData[activeTab].title}
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 ${
                  activeTab === 'traditional' ?'bg-gradient-to-t from-destructive/20 to-transparent' :'bg-gradient-to-t from-secondary/20 to-transparent'
                }`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon name={benefit.icon} size={28} className="text-secondary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;