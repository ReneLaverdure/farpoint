import React from 'react'
import './Button.scss'

export default function Button({children, buttonType, ...otherProps}) {
     
  return (
    <button {...otherProps}>
        {children}
    </button>
  )
}
