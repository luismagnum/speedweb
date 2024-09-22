import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Boton = () => {
  return (
    <a
      href="https://wa.me/542984417477?text=Quiero hacer una consulta SpeedWeb" 
      className="fixed bottom-5 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className= 'size-6' />
    </a>
  );
};

export default Boton;
