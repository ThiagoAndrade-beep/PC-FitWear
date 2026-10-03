import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brandBlock}>
          <span className={styles.brandMark}>PC</span>

          <div className={styles.brandText}>
            <p>PATRÍCIA CRUZ</p>
            <p>FITWEAR</p>
          </div>
        </div>

        <div className={styles.infoGroup}>
          <p className={styles.sectionTitle}>Navegação</p>
          <nav className={styles.nav} aria-label="Navegação do rodapé">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#colecoes">Coleções</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className={styles.infoGroup}>
          <p className={styles.sectionTitle}>Fale conosco</p>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/pc.fitwear_26/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={styles.instagramLink}
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/5575992353232?text=Ol%C3%A1!%20Conheci%20a%20Patr%C3%ADcia%20Cruz%20Fitwear%20pelo%20site%20e%20gostaria%20de%20conhecer%20os%20produtos%20dispon%C3%ADveis."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={styles.whatsappLink}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© 2026 Patrícia Cruz Fitwear</span>
        <span>Feito para quem vive com estilo.</span>
      </div>
    </footer>
  )
}

export default Footer