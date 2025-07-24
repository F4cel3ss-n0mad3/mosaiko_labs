import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/mosaikostudio', handle: '@mosaikostudio' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/mosaiko-labs', handle: 'Mosaiko Labs' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/mosaikolabs', handle: '@mosaikolabs' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/mosaikolabs', handle: 'Mosaiko Labs' }
  ];

  const quickLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos de Éxito', href: '#casos-exito' },
    { name: 'Diagnóstico Gratuito', href: '#diagnostico' },
    { name: 'Blog de Sostenibilidad', href: '#' },
    { name: 'Recursos Gratuitos', href: '#' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Cookies', href: '#' },
    { name: 'GDPR Compliance', href: '#' }
  ];

  const certifications = [
    { name: 'B Corp Certified', icon: 'Award' },
    { name: 'GDPR Compliant', icon: 'Shield' },
    { name: 'ISO 27001', icon: 'Lock' },
    { name: 'Carbon Neutral', icon: 'Leaf' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="font-playfair font-bold text-2xl mb-2">
                Mosaiko Labs
              </div>
              <div className="text-sm text-primary-foreground/70 mb-4">
                Parte de Grupo Mosaiko
              </div>
              <p className="text-primary-foreground/80 font-inter leading-relaxed">
                La única agencia de automatización especializada exclusivamente 
                en negocios sostenibles. Tecnología con propósito, ventas con alma.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-secondary" />
                <a href="mailto:hola@mosaikolabs.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  hola@mosaikolabs.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-secondary" />
                <a href="tel:+34600000000" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +34 600 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">
                  Madrid, España
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-inter font-semibold text-lg">
              Enlaces Rápidos
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors font-inter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-inter font-semibold text-lg">
              Síguenos
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors group"
                >
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name={social.icon} size={16} />
                  </div>
                  <div>
                    <div className="font-inter font-medium">{social.name}</div>
                    <div className="text-sm text-primary-foreground/60">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-inter font-semibold text-lg">
              Newsletter Sostenible
            </h3>
            <p className="text-primary-foreground/80 font-inter text-sm">
              Recibe insights exclusivos sobre automatización y sostenibilidad cada semana.
            </p>
            
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-secondary"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-r-lg hover:bg-secondary/90 transition-colors">
                  <Icon name="Send" size={16} />
                </button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                Sin spam. Solo contenido valioso. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="text-center mb-8">
            <h4 className="font-inter font-medium text-primary-foreground/90 mb-6">
              Certificaciones y Compromisos
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name={cert.icon} size={24} className="text-secondary" />
                  </div>
                  <span className="text-sm text-primary-foreground/70 text-center">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60 font-inter">
              © {currentYear} Mosaiko Labs. Todos los derechos reservados. 
              <span className="ml-2">Parte de Grupo Mosaiko.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors font-inter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <div className="text-center">
              <p className="text-xs text-primary-foreground/50 font-inter leading-relaxed">
                Mosaiko Labs es una marca registrada de Grupo Mosaiko S.L. • CIF: B12345678 • 
                Registro Mercantil de Madrid, Tomo 1234, Folio 567, Hoja M-123456 • 
                Inscrita en el Registro de Operadores de Telecomunicaciones de la CMT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;