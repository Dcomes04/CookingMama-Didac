import type { Recipe } from '../types'

type Props = {
  recipe: Recipe
  onOpen: (recipe: Recipe) => void
}

export function RecipeCard({ recipe, onOpen }: Props) {
  return (
    <article
      className={`recipe-card`}
      onClick={() => onOpen(recipe)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(recipe)
        }
      }}
      aria-haspopup="dialog"
    >
      {recipe.imageUrl && (
        <div className="recipe-thumb" aria-hidden="true">
          <img src={recipe.imageUrl} alt="" />
        </div>
      )}
      <div className="recipe-header">
        <h2 className="recipe-title">{recipe.title}</h2>
        <div className="recipe-meta">
          <span>{recipe.timeMinutes} min</span>
          <span className={`dot`}>•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
      <p className="recipe-description">{recipe.description}</p>
    </article>
  )
}


