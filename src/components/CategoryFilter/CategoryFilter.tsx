import { useState } from 'react'
import { Categories } from '../../data/categories'
import style from './CategoryFilter.module.css'

interface CategoryChangeProps {
  onCategoryChanges: (category: string) => void
}

const CategoryFilter = ({ onCategoryChanges }: CategoryChangeProps) => {
  const [selected, setSelected] = useState<string>(Categories[0] ?? '')

  const VISIBLE_COUNT = 8
  const visibleCategories = Categories.slice(0, VISIBLE_COUNT)

  return (
    <div className={style.filter}>
      {visibleCategories.map((item) => {
        const isSelected = item === selected

        return (
          <button
            key={item}
            type="button"
            className={`${style.option} ${isSelected ? style.active : ''}`}
            onClick={() => {
              setSelected(item)
              onCategoryChanges(item)
            }}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter