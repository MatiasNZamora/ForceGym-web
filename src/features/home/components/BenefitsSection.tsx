import { motion } from 'framer-motion';
import { FaDumbbell, FaClock, FaUserFriends, FaHeart, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';

const benefits = [
  {
    icon: FaDumbbell,
    title: 'Equipamiento Premium',
    description: 'Las mejores marcas y máquinas de última generación para tu entrenamiento.',
  },
  {
    icon: FaClock,
    title: 'Horario Extendido',
    description: 'Abierto 24/7 para que entrenes cuando quieras, a tu ritmo.',
  },
  {
    icon: FaUserFriends,
    title: 'Entrenadores Expertos',
    description: 'Profesionales certificados listos para guiarte en tu transformación.',
  },
  {
    icon: FaHeart,
    title: 'Zona Cardiovascular',
    description: 'Espacio dedicado para mejorar tu resistencia y salud cardiovascular.',
  },
  {
    icon: FaBolt,
    title: 'Alta Intensidad',
    description: 'Entrenamientos diseñados para maximizar tus resultados.',
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad Garantizada',
    description: 'Protocolos de higiene y seguridad para tu tranquilidad.',
  },
];

export function BenefitsSection() {
  return (
    <Section id="beneficios">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            BENEFICIOS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-darkGray p-8 border border-gray-800 hover:border-primary transition-colors duration-300 group"
            >
              <benefit.icon className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
