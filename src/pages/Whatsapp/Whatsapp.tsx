import { LuSparkles } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import styles from './Whatsapp.module.css'

const Whatsapp = () => {
  return (
    <section className={styles.whatsappSection}>
      <div className={styles.content}>
        <span className={styles.iconWrapper} aria-label="Ícone de brilho">
          <LuSparkles />
        </span>

        <h2 className={styles.title}>Encontre o look que combina com você</h2>

        <p className={styles.description}>
          Gostou de alguma peça? Fale diretamente com a Patrícia pelo WhatsApp e consulte
          disponibilidade, tamanhos e cores.
        </p>

        <Button
          variant="gold"
          buttonSize="sm"
          whatsappButton
          phone="5575992353232"
          message="Olá! Conheci a Patrícia Cruz Fitwear pelo site e gostaria de conhecer os produtos disponíveis."
          icon={<FaWhatsapp size={18} />}
        >
          FALAR NO WHATSAPP
        </Button>
      </div>
    </section>
  )
}

export default Whatsapp