import type { Recipe } from '../types'

type Props = {
  recipe: Recipe
  onClose: () => void
}

export function RecipeModal({ recipe, onClose }: Props) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="recipe-dialog-title" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2 id="recipe-dialog-title" className="modal-title">{recipe.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        </header>
        <div className="modal-meta">
          {typeof recipe.timePrepMinutes === 'number' && <span>Prep: {recipe.timePrepMinutes} min</span>}
          {typeof recipe.timeCookMinutes === 'number' && <span>•</span>}
          {typeof recipe.timeCookMinutes === 'number' && <span>Cocción: {recipe.timeCookMinutes} min</span>}
          <span className="dot">•</span>
          <span>Total: {typeof recipe.timePrepMinutes === 'number' && typeof recipe.timeCookMinutes === 'number' ? recipe.timePrepMinutes + recipe.timeCookMinutes : recipe.timeMinutes} min</span>
          <span className="dot">•</span>
          <span>{recipe.difficulty}</span>
          <span className="dot">•</span>
          <span>Raciones: {recipe.servings}</span>
        </div>
        {recipe.imageUrl && (
          <div className="modal-hero" aria-hidden="true">
            <img src={recipe.imageUrl} alt="" />
          </div>
        )}
        <div className="modal-content">
          <section className="section">
            <h3>Descripción</h3>
            <p className="modal-description">{recipe.description}</p>
          </section>
          <div className="details-grid">
            <section className="ingredients section">
              <h3>Ingredientes</h3>
              <ul>
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="steps section">
              <h3>Pasos</h3>
              <ol>
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


