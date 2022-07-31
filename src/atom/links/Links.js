import React from 'react'
import { Link } from 'react-router-dom'

export default function Links({linkName, linkAddress}) {
  return (
    <Link to={linkAddress}>{linkName}</Link>
  )
}
