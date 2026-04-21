import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Link } from 'react-router-dom';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    alt: 'Sala de pesas',
  },
  {
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    alt: 'Zona cardiovascular',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    alt: 'Clases grupales',
  },
  {
    src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80',
    alt: 'Zona funcional',
  },
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
    alt: 'Sala de spinning',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    alt: 'Área de entrenamiento',
  },
];

export function GallerySection() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Nuestro Espacio
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            INSTALACIONES
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden group relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/instalaciones">
            <button className="text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-colors duration-300">
              Ver todas las instalaciones →
            </button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
