import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [selectedPain, setSelectedPain] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);

  const painPoints = [
    {
      title: "Procesos Manuales Agotadores",
      description: "Pierdes horas valiosas en tareas repetitivas que podrían automatizarse",
      icon: "Clock",
      stat: 73,
      statLabel: "luchan con procesos manuales"
    },
    {
      title: "Miedo a Perder Autenticidad",
      description: "Temes que la tecnología comprometa los valores de tu marca sostenible",
      icon: "Heart",
      stat: 68,
      statLabel: "temen perder autenticidad"
    },
    {
      title: "Dependencia de Redes Sociales",
      description: "Tu negocio depende demasiado de algoritmos impredecibles",
      icon: "Smartphone",
      stat: 84,
      statLabel: "dependen de redes sociales"
    }
  ];

  useEffect(() => {
    const targets = [73, 68, 84];
    const duration = 2000;
    const steps = 60;
    const increment = targets.map(target => target / steps);
    
    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setAnimatedStats(prev => 
          prev.map((stat, index) => 
            Math.min(Math.round(increment[index] * currentStep), targets[index])
          )
        );
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-primary mb-6">
            ¿Te sientes identificado con estos desafíos?
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Los emprendedores sostenibles enfrentan retos únicos al escalar sus negocios. 
            No estás solo en esta lucha.
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-destructive/10 rounded-full mb-6">
                <Icon name={pain.icon} size={32} className="text-destructive" />
                <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {animatedStats[index]}%
                </div>
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {pain.statLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pain Point Selector */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {painPoints.map((pain, index) => (
              <button
                key={index}
                onClick={() => setSelectedPain(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedPain === index
                    ? 'border-secondary bg-secondary/5' :'border-border bg-background hover:border-secondary/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon 
                    name={pain.icon} 
                    size={24} 
                    className={selectedPain === index ? 'text-secondary' : 'text-muted-foreground'} 
                  />
                  <h3 className="font-inter font-semibold text-foreground">
                    {pain.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Pain Point Details */}
          <div className="bg-muted/50 rounded-xl p-8 border border-border">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name={painPoints[selectedPain].icon} size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-inter text-xl font-semibold text-primary mb-2">
                  {painPoints[selectedPain].title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {painPoints[selectedPain].description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm text-secondary font-inter font-medium">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  {painPoints[selectedPain].stat}% de emprendedores sostenibles {painPoints[selectedPain].statLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;