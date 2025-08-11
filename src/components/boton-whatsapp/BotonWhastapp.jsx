
import './botonwhatsapp.css';

export default function BotonWhatsApp() {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-message">
        <span className="whatsapp-text">Escríbenos</span>
      </div>
      <a
        href="https://wa.me/521123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src="./images/whatsapp-logo.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
