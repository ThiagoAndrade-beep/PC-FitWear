import style from "./Feature.module.css"
import { features } from '../../data/features'
import { FaCheck } from 'react-icons/fa'

const Features = () => {
    return (
        <section className={style.featureSection}>

            <div className={style.sectionLabel}>
                <span className={style.line}></span>

                <span className={style.labelText}>
                    NOVA ESSÊNCIA
                </span>
            </div>

            <div className={style.featureTitle}>
                <h2>
                    Confiança que acompanha seu ritmo
                </h2>

                <p>
                    Peças pensadas para quem busca unir
                    moda, conforto e personalidade na rotina.
                </p>
            </div>

            <div className={style.features}>
                {features.map((itens) => (
                    <article
                        key={itens.number}
                        className={style.feature}
                    >
                        <span className={style.number}>
                            {itens.number}
                        </span>

                        <h3>
                            {itens.title}
                        </h3>

                        <span className={style.check}>
                            <FaCheck />
                        </span>
                    </article>
                ))}
            </div>

        </section>
    )
}

export default Features