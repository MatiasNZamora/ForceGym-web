import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';

const plans = [
  {
    id: 'basic',
    name: 'BÁSICO',
    price: 29.99,
    features: [
      'Acceso a sala de máquinas',
      'Horario limitado',
      '1 clase grupal/semana',
      'Armario básico',
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 49.99,
    featured: true,
    features: [
      'Acceso total 24/7',
      'Clases grupales ilimitadas',
      'Entrenador personal',
      'Sauna y vestuarios premium',
      'Towel service',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 79.99,
    features: [
      'Todo del plan PRO',
      'Sesiones ilimitadas con PT',
      'Nutrición personalizada',
      'Análisis de composición corporal',
      'Acceso a todas las sedes',
      'Invitados gratis',
    ],
  },
];

export function FeaturedPlans() {
  return (
    <Section id="planes" dark>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Elige Tu Plan
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            PLANES DESTACADOS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`p-8 h-full flex flex-col ${plan.featured ? 'border-primary relative' : ''}`}
                hover
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">${plan.price}</span>
                  <span className="text-gray-400">/mes</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <FaCheck className="text-primary text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/planes">
                  <Button fullWidth variant={plan.featured ? 'primary' : 'outline'}>
                    Elegir Plan
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
