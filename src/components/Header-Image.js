import React from 'react'

import './Header-Image.css'

const HeaderImage = ({ src, alt, children }) => (
  <figure id="img-div">
    <img src={src} alt={alt} id="image" />
    {children}
  </figure>
)

export default HeaderImage
