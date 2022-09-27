import React from 'react'
import './Button.scss'
import Spinner from '../Spinner/Spinner'
export default function Button({children, buttonType, isLoading, ...otherProps}) {
     
  return (
    <button disabled={isLoading} {...otherProps}>
        {isLoading ? <Spinner/> : children}
    </button>
  )
}
