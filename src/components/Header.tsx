type Props = {
  query: string
  onChange: (value: string) => void
}

export function Header({ query, onChange }: Props) {
  return (
    <header className="header">
      <h1 className="brand">Recetas</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Buscar recetas (próximamente)"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Buscar recetas"
          disabled
        />
      </div>
    </header>
  )
}


