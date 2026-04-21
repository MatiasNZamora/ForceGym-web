import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
              Contáctanos
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              CONTACTO
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestros planes o instalaciones? 
              Escríbenos y nuestro equipo te responderá en breve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-darkGray border border-gray-800">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Dirección</h4>
                    <p className="text-gray-400">
                      Av. Principal 123<br />
                      Centro, Ciudad<br />
                      Código Postal 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-darkGray border border-gray-800">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Horario de Atención</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>Lunes - Viernes: 6:00 - 23:00</li>
                      <li>Sábados: 8:00 - 21:00</li>
                      <li>Domingos: 9:00 - 18:00</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-darkGray border border-gray-800">
                    <FaPhone className="text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">Teléfono</p>
                      <p className="font-semibold">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-darkGray border border-gray-800">
                    <FaWhatsapp className="text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <p className="font-semibold">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-darkGray border border-gray-800">
                    <FaEnvelope className="text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-semibold">info@forcegym.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-darkGray p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Plan de interés</label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un plan</option>
                      <option value="basic">Básico</option>
                      <option value="pro">PRO</option>
                      <option value="elite">Elite</option>
                      <option value="annual">Anual</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <Button type="submit" fullWidth size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
