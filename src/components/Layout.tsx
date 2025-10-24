import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="page">
      {children}
    </div>
  )
}


