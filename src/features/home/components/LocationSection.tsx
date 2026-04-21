import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';

export function LocationSection() {
  return (
    <Section id="ubicacion" dark>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Encuéntranos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            UBICACIÓN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-darkGray p-8 border border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Dirección</h3>
                  <p className="text-gray-400">
                    Av. Principal 123<br />
                    Centro, Ciudad<br />
                    Código Postal 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-primary text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Horario</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Lunes - Viernes: 6:00 - 23:00</li>
                    <li>Sábados: 8:00 - 21:00</li>
                    <li>Domingos: 9:00 - 18:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-80 md:h-96 bg-darkGray border border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887779449!2d-58.3815704!3d-34.6037384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f1a84728e3f3%3A0x8b0c4a8c0b8b0b8b!2sAv.%20Pres.%209%20de%20Julio%2C%20CABA!5e0!3m2!1ses-419!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
