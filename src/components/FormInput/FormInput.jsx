import React from 'react'

export default function FormInput({label, ...otherProps}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input {...otherProps} />
    </div>
  )
}
