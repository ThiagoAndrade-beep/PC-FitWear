import React from 'react'
import productFive from '../../assets/imagesProducts/productFive.jpg'
import style from './About.module.css'
import Button from '../../components/Button/Button'
import { FiArrowUpRight } from 'react-icons/fi'

const About = () => {
  return (
    <section className={style.aboutSection}>
      <div className={style.imageWrapper}>
        <img
          src={productFive}
          alt="Produto PC Fit Wear"
          className={style.image}
        />
      </div>

      <div className={style.info}>
        <div className={style.sectionLabel}>
          <span className={style.line}></span>
          <span className={style.labelText}>
            SOBRE A MARCA
          </span>
        </div>
        <h1>PATRÍCIA CRUZ FITWEAR</h1>
        <p>
          Mais do que vestir para treinar, a Patrícia Cruz Fitwear acredita que
          estilo e personalidade também fazem parte da rotina de quem escolhe
          se movimentar.
        </p>
        <p>
          Cada seleção nasce do olhar atento para modelagens, conforto e
          versatilidade, criando peças que acompanham a sua rotina com presença
          e praticidade.
        </p>
        <p>
          Com atendimento próximo e um olhar cuidadoso para o detalhe, a marca
          ajuda você a encontrar o look ideal para viver cada treino com mais
          confiança.
        </p>
        <Button variant='black' buttonSize='sm' whatsappButton phone='5575992353232' message='Olá! Conheci a Patrícia Cruz Fitwear pelo site e gostaria de conhecer os produtos disponíveis.'>
          CONHEÇA A SELEÇÃO
          <FiArrowUpRight />
        </Button>
      </div>
    </section>
  )
}

export default About