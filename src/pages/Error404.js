import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Error404</h2>
        <p>Page was not found - please go back to <Link to="/">homepage</Link></p>
    </div>
  )
}

export default Error404