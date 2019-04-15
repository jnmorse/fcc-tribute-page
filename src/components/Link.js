import React from 'react'

export default function Link({href, target, rel, external, children, ...props}) {
  return(
    <a
      href={href}
      rel={external ? 'noopener noreferrer' : false}
      target={external ? '__blank' : false}
      {...props}
    >
      {children}
    </a>
  )
}
