import Button from '../Button/Button'
import style from './ProductCard.module.css'

interface ProductCardProps {
  category: string
  name: string
  price: number
  image: string
  sizes: string[]
}

const ProductCard = ({ category, name, price, image, sizes }: ProductCardProps) => {
  return (
    <article className={style.card}>
      <img className={style.image} src={image} alt={name} />

      <div className={style.meta}>
        <span className={style.category}>{category}</span>
        <span className={style.price}>R$ {price.toFixed(2).replace('.', ',')}</span>
      </div>

      <div className={style.content}>
        <h2 className={style.title}>{name}</h2>
        <p className={style.sizes}>Tamanhos {sizes.join(' • ')}</p> {/*ele junta todos elementos de uma lista e separa por algum elemento escolhido - esse é o papel do join*/}
        <Button variant='gold' buttonSize='sm' whatsappButton phone='5575992353232' message={`Olá! Tenho interesse no ${name}. Gostaria de saber mais informações.`}>
          VER PRODUTO
        </Button>
      </div>
    </article>
  )
}

export default ProductCard