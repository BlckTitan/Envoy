import React from 'react'

export default function Input({className, type, placeholder}) {
  return (
    <input type={type} placeholder={placeholder} className={className}/>
  )
}
