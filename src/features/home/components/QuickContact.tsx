import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { Button } from '../../../components/ui/Button';

export function QuickContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Section id="contacto">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            ¿TIENES PREGUNTAS?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center">
                <FaPhone className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-bold">Teléfono</h4>
                <p className="text-gray-400">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center">
                <FaEnvelope className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-400">info@forcegym.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center">
                <FaWhatsapp className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-bold">WhatsApp</h4>
                <p className="text-gray-400">+1 234 567 890</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-darkGray border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-darkGray border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-darkGray border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <Button type="submit" fullWidth>
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
