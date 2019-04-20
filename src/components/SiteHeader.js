import React from 'react'

import './SiteHeader.css'

function showSubtitle(subTitle) {
  if (subTitle) {
    return <p id="site-header_subtitle">{subTitle}</p>
  }

  return null
}

export default function SiteHeader({ title, subTitle, children }) {
  return(
    <header id="site-header">
      <h1 style={{ textAlign: 'center' }} id="title">{title}</h1>
      {showSubtitle(subTitle)}
      {children}
    </header>
  )
}
