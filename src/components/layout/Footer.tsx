import { Link } from 'react-router-dom';
import { FaDumbbell, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaDumbbell className="text-primary text-2xl" />
              <span className="text-2xl font-bold tracking-wider">
                FORCE<span className="text-primary">GYM</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Transforma tu cuerpo y mente con el mejor equipamiento y trainers profesionales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Planes', 'Clases', 'Instalaciones', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === 'inicio' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Lunes - Viernes: 6:00 - 23:00</li>
              <li>Sábados: 8:00 - 21:00</li>
              <li>Domingos: 9:00 - 18:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                Av. Principal 123, Ciudad
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                info@forcegym.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 ForceGym. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
