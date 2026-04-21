import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const facilities = [
  {
    name: 'Sala de Pesas',
    description: 'Área completa con máquinas de última generación, pesas libres y barras olímpicas.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    features: ['Mancuernas 2-50kg', 'Barras olímpicas', 'Power racks', 'Prensa'],
  },
  {
    name: 'Zona Cardiovascular',
    description: 'Espacio dedicado a entrenamiento aeróbico con equipos de última tecnología.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    features: ['Cintas de correr', 'Elípticas', 'Bicicletas estáticas', 'Remo'],
  },
  {
    name: 'Sala de Spinning',
    description: '50 bicicletas indoor con sistema de resistencia y monitoreo de ritmo cardíaco.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    features: ['Pantallas LED', 'Sistema de sonido', 'Iluminación RGB', 'Toallas'],
  },
  {
    name: 'Área Funcional',
    description: 'Espacio versatile para entrenamiento funcional, TRX y calistenia.',
    image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80',
    features: ['Cajas Plyo', 'Bandas elásticas', 'TRX', 'Kettlebells'],
  },
  {
    name: 'Sala de Yoga & Pilates',
    description: 'Ambiente tranquilo con pisos de madera y equipos especializados.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    features: ['Colchonetas', 'Pelotas Pilates', 'Bloques', 'Cinturón'],
  },
  {
    name: 'Zona de Estiramientos',
    description: 'Área dedicada a la recuperación y flexibilidad.',
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80',
    features: ['Foam rollers', 'Bolas de massage', 'Bandas', 'Espumas'],
  },
  {
    name: 'Sauna & Baño Turco',
    description: 'Espacios de relajación y recuperación muscular.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    features: ['Sauna Finlandés', 'Baño Turco', 'Duchas frías', 'Área de descanso'],
  },
  {
    name: 'Vestuarios Premium',
    description: 'Instalaciones limpias y seguras con tous los servicios.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    features: ['Casilleros', 'Duchas', 'Secadores', 'Artículos de higiene'],
  },
];

export function Instalaciones() {
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
              Nuestro Espacio
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              INSTALACIONES
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Diseñamos cada espacio para maximizar tu rendimiento y comodidad. 
              Más de 2000m² de instalaciones de primer nivel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden" hover>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video md:aspect-auto">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{facility.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {facility.features.map((feature) => (
                          <li key={feature} className="text-xs text-primary">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
