import React from 'react'

import './Fig-Caption.css'

export default function FigCaption({ children }) {
  return (
    <figcaption id="img-caption" className="Fig-Caption">
      <em>{children}</em>
    </figcaption>
  )
}
