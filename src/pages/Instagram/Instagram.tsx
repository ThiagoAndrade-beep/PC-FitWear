import { FaInstagram } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import styles from './Instagram.module.css'

import productOne from '../../assets/imagesProducts/productOne.jpg'
import productTwo from '../../assets/imagesProducts/productTwo.jpg'
import productThree from '../../assets/imagesProducts/productThree.jpg'
import productFour from '../../assets/imagesProducts/productFour.jpg'
import productFive from '../../assets/imagesProducts/productFive.jpg'
import productSix from '../../assets/imagesProducts/productSix.jpg'

const galleryImages = [productOne, productTwo, productThree, productFour, productFive, productSix]

const Instagram = () => {
  return (
    <section className={styles.instagramSection}>
      <div className={styles.header}>
        <span className={styles.identifier}>@PC.FITWEAR_26</span>

        <h2 className={styles.title}>SIGA A PATRÍCIA CRUZ FITWEAR</h2>

        <p className={styles.description}>
          Confira nossos looks, novidades e acompanhe a marca pelo Instagram.
        </p>

        <Button variant="gold" buttonSize="sm">
            <FaInstagram size={18}/>
             VISITAR INSTAGRAM
        </Button>
      </div>

      <div className={styles.gallery}>
        <div className={styles.mainImageWrapper}>
          <img src={galleryImages[0]} alt="Look feminino em destaque" className={styles.mainImage} />
        </div>

        <div className={styles.sideGallery}>
          {galleryImages.map((image, index) => (
            <div key={`${image}-${index}`} className={styles.smallImageWrapper}>
              <img src={image} alt={`Look feminino ${index + 1}`} className={styles.smallImage} />
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.instagram.com/pc.fitwear_26/"
        target="_blank"
        rel="noreferrer"
        className={styles.floatingButton}
        aria-label="Visitar Instagram"
      >
        <FaInstagram size={20}/>
      </a>
    </section>
  )
}

export default Instagram