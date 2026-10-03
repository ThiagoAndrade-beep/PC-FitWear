import { FaWhatsapp } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import style from './Hero.module.css'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return <section className={style.heroSection}>
    <div className={style.sectionLabel}>
      <span className={style.line}></span>
      <span className={style.labelText}>
        NOVA COLEÇÃO
      </span>
    </div>
    <div className={style.titles}>
      <h1>SEU TREINO.</h1>
      <span>SEU ESTILO.</span>
      <h1>SUA FORÇA.</h1>
    </div>
    <p>Moda fitness para acompanhar sua rotina com estilo, conforto e personalidade.</p>
    <div className={style.buttons}>
      <Button variant='gold' buttonSize='md'>
        VER COLEÇÃO
        <HiArrowRight />
      </Button>
      <Button variant='black' buttonSize='lg' whatsappButton phone='5575992353232' message='Olá! Conheci a Patrícia Cruz Fitwear pelo site e gostaria de conhecer os produtos disponíveis.'>
        <FaWhatsapp />
        COMPRAR PELO WHATSAPP
      </Button>
    </div>
    <div className={style.bottomLabel}>
      FORÇA&nbsp; • &nbsp;MOVIMENTO&nbsp; • &nbsp;IDENTIDADE
    </div>
  </section>
}
