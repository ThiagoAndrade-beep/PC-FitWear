import { useState } from 'react'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Products } from '../../data/products'
import style from './Collections.module.css'

const Collections = () => {
  const [filteredProducts, setFilteredProducts] = useState(Products)

  function categoriesFilter(categories: string) {
    if (categories === 'TODOS') {
      setFilteredProducts(Products)
      return
    }
    const result = Products.filter((products) => products.category === categories)

    console.log(result)
    setFilteredProducts(result)
  }
  return (
    <section className={style.collectionSection}>
      <div className={style.sectionLabel}>
        <span className={style.line}></span>
        <span className={style.labelText}>
          SELEÇÃO ESPECIAL
        </span>
      </div>
      <div className={style.titles}>
        <h1>VISTA SUA MELHOR VERSÃO</h1>
        <p>Peças escolhidas para acompanhar seu ritmo e expressar sua personalidade.</p>
      </div>
      <div className={style.categoriesFilter}>
        <CategoryFilter onCategoryChanges={categoriesFilter} />
      </div>
      <div className={style.cardProducts}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              price={product.price}
              name={product.name}
              sizes={product.sizes} /* Explicação para video: como a componetização ajuda na organização do seu codigo*/
            />
          ))
        ) : (
          <h2>Ainda não temos essa categoria.</h2>
        )}
      </div>
    </section>
  )
}

export default Collections