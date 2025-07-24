import React, { useEffect } from 'react';
import ScrollNavigation from '../../components/ui/ScrollNavigation';
import ScrollProgress from '../../components/ui/ScrollProgress';
import SectionAnchor from '../../components/ui/SectionAnchor';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationForm from './components/ConsultationForm';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Mosaiko Labs - Tecnología con Propósito, Ventas con Alma';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'La única agencia de automatización especializada en negocios sostenibles. Escala tus ventas sin comprometer tus valores. Diagnóstico gratuito.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mosaiko Labs",
      "description": "Agencia de automatización para negocios sostenibles",
      "url": "https://mosaikolabs.com",
      "logo": "https://mosaikolabs.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-600-000-000",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"]
      },
      "sameAs": [
        "https://instagram.com/mosaikostudio",
        "https://linkedin.com/company/mosaiko-labs"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleDiagnosticClick = () => {
    const diagnosticSection = document.getElementById('diagnostico');
    if (diagnosticSection) {
      diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCaseStudiesClick = () => {
    const casesSection = document.getElementById('casos-exito');
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <ScrollNavigation />
      <ScrollProgress />

      {/* Hero Section */}
      <SectionAnchor id="inicio">
        <HeroSection 
          onDiagnosticClick={handleDiagnosticClick}
          onCaseStudiesClick={handleCaseStudiesClick}
        />
      </SectionAnchor>

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Services Section */}
      <SectionAnchor id="servicios">
        <ServicesSection />
      </SectionAnchor>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <SectionAnchor id="casos-exito">
        <TestimonialsSection />
      </SectionAnchor>

      {/* Consultation Form */}
      <SectionAnchor id="diagnostico">
        <ConsultationForm />
      </SectionAnchor>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;