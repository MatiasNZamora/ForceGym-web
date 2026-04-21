import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const classes = [
  {
    name: 'Spinning',
    instructor: 'María García',
    schedule: 'Lun-Vie: 7:00, 9:00, 18:00',
    capacity: 20,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    description: ' cardiovascular de alta intensidad sobre bicicleta.',
  },
  {
    name: 'Yoga',
    instructor: 'Carlos López',
    schedule: 'Lun-Vie: 6:00, 12:00, 19:00',
    capacity: 15,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    description: 'Sesiones de flexibilidad y bienestar mental.',
  },
  {
    name: 'HIIT',
    instructor: 'Pedro Martínez',
    schedule: 'Lun-Vie: 8:00, 17:00, 20:00',
    capacity: 18,
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80',
    description: 'Entrenamiento intervals de alta intensidad.',
  },
  {
    name: 'CrossFit',
    instructor: 'Jorge Sánchez',
    schedule: 'Lun-Vie: 6:00, 12:00, 18:00',
    capacity: 12,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    description: 'Entrenamiento funcional grupal.',
  },
  {
    name: 'Zumba',
    instructor: 'Ana Rodríguez',
    schedule: 'Mar-Jue: 10:00, 19:00',
    capacity: 25,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    description: 'Baile latinoamericano fitness.',
  },
  {
    name: 'Pilates',
    instructor: 'Laura Fernández',
    schedule: 'Lun-Vie: 7:00, 11:00, 16:00',
    capacity: 12,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    description: 'Fortalecimiento del core y postura.',
  },
  {
    name: 'Boxeo',
    instructor: 'Miguel Torres',
    schedule: 'Lun-Vie: 9:00, 17:00, 21:00',
    capacity: 16,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    description: 'Técnicas de boxeo y defensa personal.',
  },
  {
    name: 'Stretching',
    instructor: 'Sofia Díaz',
    schedule: 'Lun-Vie: 8:00, 14:00, 18:00',
    capacity: 20,
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&q=80',
    description: 'Estiramientos para recuperación muscular.',
  },
];

export function Clases() {
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
              Fitness Grupal
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              NUESTRAS CLASES
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Únete a nuestras clases grupales impartidas por instructores certificados. 
              Hay opciones para todos los niveles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {classes.map((clase, index) => (
              <motion.div
                key={clase.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full" hover>
                  <div className="aspect-video relative">
                    <img
                      src={clase.image}
                      alt={clase.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{clase.name}</h3>
                    <p className="text-primary text-sm mb-2">{clase.instructor}</p>
                    <p className="text-gray-400 text-sm mb-3">{clase.description}</p>
                    <div className="text-xs text-gray-500">
                      <p>{clase.schedule}</p>
                      <p>Capacidad: {clase.capacity} personas</p>
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
