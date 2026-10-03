import { useState } from 'react'
import { Categories } from '../../data/categories'
import style from './CategoryFilter.module.css'

interface CategoryChangeProps {
    onCategoryChanges: (category: string) => void;
}

const CategoryFilter = ({onCategoryChanges}: CategoryChangeProps) => {
  const [selected, setSelected] = useState<string>('TODOS')

  return (
    <div className={style.filter}>
      {Categories.map((item) => {
        const isSelected = item === selected

        return (
          <button
            key={item}
            type="button"
            className={`${style.option} ${isSelected ? style.active : ''}`}
            onClick={() => {setSelected(item); onCategoryChanges(item)}} 
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter