import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const plans = [
  {
    id: 'daily',
    name: 'DÍA',
    price: 9.99,
    period: 'día',
    features: [
      'Acceso a sala de máquinas',
      'Uso de locker',
      'Agua gratuita',
    ],
  },
  {
    id: 'basic',
    name: 'BÁSICO',
    price: 29.99,
    period: 'mes',
    features: [
      'Acceso a sala de máquinas',
      'Horario limitado (6am-10pm)',
      '1 clase grupal/semana',
      'Armario básico',
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 49.99,
    period: 'mes',
    featured: true,
    features: [
      'Acceso total 24/7',
      'Clases grupales ilimitadas',
      'Entrenador personal (2 veces/mes)',
      'Sauna y vestuarios premium',
      'Towel service',
      'Área de recuperación',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 79.99,
    period: 'mes',
    features: [
      'Todo del plan PRO',
      'Sesiones ilimitadas con PT',
      'Nutrición personalizada',
      'Análisis de composición corporal',
      'Acceso a todas las sedes',
      'Invitados gratis (2/mes)',
      'Ropa de entrenamiento',
    ],
  },
  {
    id: 'annual',
    name: 'ANUAL',
    price: 399.99,
    period: 'año',
    features: [
      'Todo del plan ELITE',
      '2 meses gratis',
      'Kit de bienvenida',
      'Descuento en tienda',
      'Eventos exclusivos',
    ],
  },
];

export function Planes() {
  return (
    <div className="pt-24">
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Nuestras Membresías
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              PLANES Y PRECIOS
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus objetivos. Todos incluyen acceso a nuestra comunidad y soporte profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 h-full flex flex-col ${plan.featured ? 'border-primary relative' : ''}`}
                  hover
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaCheck className="text-primary text-xs flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button fullWidth variant={plan.featured ? 'primary' : 'outline'}>
                    Elegir Plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
