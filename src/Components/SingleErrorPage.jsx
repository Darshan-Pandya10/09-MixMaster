import React from 'react'
import { useRouteError } from 'react-router-dom'

function SingleErrorPage() {
    const error = useRouteError();
  return (
    <div className='page'>
      <h2 className='font-semibold tracking-wider text-base'>Error : {error.message}</h2>
    </div>
  )
}

export default SingleErrorPage
