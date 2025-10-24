export type Recipe = {
  id: string
  title: string
  description: string
  timeMinutes: number
  difficulty: 'Fácil' | 'Media' | 'Difícil'
  servings: number
  ingredients: string[]
  steps: string[]
  imageUrl?: string
  timePrepMinutes?: number
  timeCookMinutes?: number
}


