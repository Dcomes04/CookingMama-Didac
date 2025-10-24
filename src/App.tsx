import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { RecipeList } from './components/RecipeList'
import { RecipeModal } from './components/RecipeModal'
import { Layout } from './components/Layout'
import type { Recipe } from './types'
import { MOCK_RECIPES } from './data'
import { useRecipesSearch } from './hooks/useRecipesSearch'

function App() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Recipe | null>(null)

  function openRecipe(recipe: Recipe) {
    setSelected(recipe)
  }

  function closeRecipe() {
    setSelected(null)
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeRecipe()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const { results } = useRecipesSearch(MOCK_RECIPES, query)

  return (
    <Layout>
      <Header query={query} onChange={setQuery} />

      <main className="content" role="main">
        <RecipeList recipes={results} onOpen={openRecipe} />
      </main>

      <footer className="footer">
        <small>Buscador conectado a MongoDB y ElasticSearch próximamente.</small>
      </footer>

      {selected && (<RecipeModal recipe={selected} onClose={closeRecipe} />)}
    </Layout>
  )
}

export default App
