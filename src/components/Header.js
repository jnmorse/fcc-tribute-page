import React from 'react'

export default function Header({ children }) {
  return(
    <header style={{ width: '100vw' }}>
      <h1 id="title">Tribute Page</h1>
      {children}
    </header>
  )
}