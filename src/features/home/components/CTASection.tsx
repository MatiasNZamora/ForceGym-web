import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&q=80"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            ¿LISTO PARA EMPEZAR?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Obtén tu primera semana gratis y descubre por qué somos el gimnasio más elegido de la ciudad.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-black text-white hover:bg-gray-900">
              ¡Inscríbete Ahora!
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
