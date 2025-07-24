import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    sector: '',
    companySize: '',
    challenges: [],
    name: '',
    company: '',
    phone: '',
    preferredTime: '',
    timezone: 'Europe/Madrid'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectors = [
    { value: 'moda-sostenible', label: 'Moda Sostenible' },
    { value: 'turismo-responsable', label: 'Turismo Responsable' },
    { value: 'emprendimiento-creativo', label: 'Emprendimiento Creativo' },
    { value: 'economia-circular', label: 'Economía Circular' },
    { value: 'alimentacion-trazable', label: 'Alimentación Trazable' },
    { value: 'educacion-alternativa', label: 'Educación Alternativa' },
    { value: 'otro', label: 'Otro sector sostenible' }
  ];

  const companySizes = [
    { value: 'solo', label: 'Solo/a (1 persona)' },
    { value: 'pequeno', label: 'Pequeño equipo (2-5 personas)' },
    { value: 'mediano', label: 'Equipo mediano (6-20 personas)' },
    { value: 'grande', label: 'Empresa establecida (20+ personas)' }
  ];

  const challenges = [
    { id: 'procesos-manuales', label: 'Procesos manuales que consumen tiempo' },
    { id: 'dependencia-redes', label: 'Dependencia excesiva de redes sociales' },
    { id: 'falta-automatizacion', label: 'Falta de automatización en ventas' },
    { id: 'gestion-clientes', label: 'Dificultad para gestionar clientes' },
    { id: 'presencia-digital', label: 'Presencia digital poco profesional' },
    { id: 'escalabilidad', label: 'Problemas para escalar sin perder valores' }
  ];

  const timeSlots = [
    { value: '09:00', label: '09:00 - 10:00' },
    { value: '10:00', label: '10:00 - 11:00' },
    { value: '11:00', label: '11:00 - 12:00' },
    { value: '15:00', label: '15:00 - 16:00' },
    { value: '16:00', label: '16:00 - 17:00' },
    { value: '17:00', label: '17:00 - 18:00' }
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = 'El email es obligatorio';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    }

    if (step === 2) {
      if (!formData.sector) newErrors.sector = 'Selecciona tu sector';
      if (!formData.companySize) newErrors.companySize = 'Selecciona el tamaño de tu empresa';
      if (formData.challenges.length === 0) newErrors.challenges = 'Selecciona al menos un desafío';
    }

    if (step === 3) {
      if (!formData.name) newErrors.name = 'El nombre es obligatorio';
      if (!formData.company) newErrors.company = 'El nombre de la empresa es obligatorio';
      if (!formData.phone) newErrors.phone = 'El teléfono es obligatorio';
      if (!formData.preferredTime) newErrors.preferredTime = 'Selecciona un horario';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleChallengeChange = (challengeId, checked) => {
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challengeId]
        : prev.challenges.filter(id => id !== challengeId)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mostrar éxito
    setCurrentStep(4);
    setIsSubmitting(false);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
          Comencemos tu Diagnóstico
        </h3>
        <p className="text-muted-foreground font-inter">
          Descubre las oportunidades de automatización específicas para tu negocio sostenible
        </p>
      </div>

      <Input
        label="Email profesional"
        type="email"
        placeholder="tu@empresa.com"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        error={errors.email}
        required
      />

      <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-secondary mt-1" />
          <div className="text-sm">
            <div className="font-inter font-medium text-foreground mb-1">
              Privacidad garantizada
            </div>
            <div className="text-muted-foreground">
              Cumplimos GDPR. Tu información solo se usa para personalizar tu diagnóstico.
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
          Cuéntanos sobre tu Negocio
        </h3>
        <p className="text-muted-foreground font-inter">
          Esta información nos ayuda a personalizar las recomendaciones
        </p>
      </div>

      <Select
        label="¿En qué sector sostenible operas?"
        options={sectors}
        value={formData.sector}
        onChange={(value) => setFormData(prev => ({ ...prev, sector: value }))}
        error={errors.sector}
        required
      />

      <Select
        label="Tamaño de tu empresa"
        options={companySizes}
        value={formData.companySize}
        onChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}
        error={errors.companySize}
        required
      />

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          ¿Cuáles son tus principales desafíos? (Selecciona todos los que apliquen)
        </label>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <Checkbox
              key={challenge.id}
              label={challenge.label}
              checked={formData.challenges.includes(challenge.id)}
              onChange={(e) => handleChallengeChange(challenge.id, e.target.checked)}
            />
          ))}
        </div>
        {errors.challenges && (
          <p className="text-sm text-destructive mt-2">{errors.challenges}</p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
          Agenda tu Consulta Gratuita
        </h3>
        <p className="text-muted-foreground font-inter">
          45 minutos de análisis personalizado con un especialista en automatización sostenible
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Nombre completo"
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          error={errors.name}
          required
        />

        <Input
          label="Empresa"
          type="text"
          placeholder="Nombre de tu empresa"
          value={formData.company}
          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
          error={errors.company}
          required
        />
      </div>

      <Input
        label="Teléfono"
        type="tel"
        placeholder="+34 600 000 000"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        error={errors.phone}
        required
      />

      <Select
        label="Horario preferido (Zona horaria: Madrid)"
        options={timeSlots}
        value={formData.preferredTime}
        onChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
        error={errors.preferredTime}
        required
      />

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="font-inter font-medium text-foreground mb-2">
          Qué incluye tu consulta gratuita:
        </h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-secondary" />
            <span>Análisis de tu situación actual</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-secondary" />
            <span>Identificación de oportunidades de automatización</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-secondary" />
            <span>Roadmap personalizado de crecimiento</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-secondary" />
            <span>Reporte exclusivo de sostenibilidad digital</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={40} className="text-secondary" />
      </div>
      
      <div>
        <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
          ¡Consulta Confirmada!
        </h3>
        <p className="text-muted-foreground font-inter">
          Hemos enviado los detalles a {formData.email}
        </p>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border text-left">
        <h4 className="font-inter font-semibold text-foreground mb-4">
          Preparación para tu consulta:
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <Icon name="FileText" size={16} className="text-secondary mt-1" />
            <div>
              <div className="font-medium text-foreground">Reporte de Sostenibilidad Digital</div>
              <div className="text-muted-foreground">Te enviaremos un análisis previo de tu sector</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Calendar" size={16} className="text-secondary mt-1" />
            <div>
              <div className="font-medium text-foreground">Recordatorio de cita</div>
              <div className="text-muted-foreground">Recibirás confirmación 24h antes</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Video" size={16} className="text-secondary mt-1" />
            <div>
              <div className="font-medium text-foreground">Enlace de videollamada</div>
              <div className="text-muted-foreground">Se enviará 1 hora antes de la cita</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        ¿Necesitas cambiar la fecha? Responde al email de confirmación.
      </div>
    </div>
  );

  return (
    <section id="diagnostico" className="py-20 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Progress Bar */}
        {currentStep < 4 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-inter text-muted-foreground">
                Paso {currentStep} de 3
              </span>
              <span className="text-sm font-inter text-muted-foreground">
                {Math.round((currentStep / 3) * 100)}% completado
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between items-center mt-8">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Anterior
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      iconName="ChevronRight"
                      iconPosition="right"
                    >
                      Continuar
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      {isSubmitting ? 'Confirmando...' : 'Confirmar Consulta'}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Trust Signals */}
        {currentStep < 4 && (
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-secondary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-secondary" />
                <span>Datos Seguros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-secondary" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;