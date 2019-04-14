import React from 'react'
import faker from 'faker'

const HeaderImage = () => (
  <figure id="img-div" style={{ margin: '0 auto', width: '50vw' }}>
    <img src={faker.image.business()} alt="Tribute Person" id="image" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
    <figcaption id="img-caption" style={{ textAlign: 'center' }}>
      {faker.lorem.sentence()}
    </figcaption>
  </figure>
)

export default HeaderImage