import { useEffect, useMemo, useState } from 'react'
import type { Recipe } from '../types'

export function useRecipesSearch(allRecipes: Recipe[], query: string) {
  const [debounced, setDebounced] = useState(query)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim()), 250)
    return () => clearTimeout(id)
  }, [query])

  const filtered = useMemo(() => {
    if (!debounced) return allRecipes
    const q = debounced.toLowerCase()
    return allRecipes.filter((r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.ingredients.some((i) => i.toLowerCase().includes(q))
    )
  }, [allRecipes, debounced])

  return { results: filtered, debounced }
}


