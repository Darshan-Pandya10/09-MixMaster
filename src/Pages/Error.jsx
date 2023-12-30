import React from 'react'
import img from '../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
    <div className='flex flex-col items-center justify-center p-12'>
          <img src={img} width={400} height={400} alt='not found' />
          <h3 className='pt-8 font-bold text-xl tracking-wider'>Ohh!</h3>
          <p className='font-semibold'>We can't seem to find page you are looking for !!</p>
          <Link to='/' className='mt-8 px-6 py-2 bg-green-500 text-white'>back home</Link>
    </div>
  )
}
 return (
      <div className='page'>
        <h3 className='font-bold text-xl tracking-wider'>something went wrong </h3>
      </div>
  );
}

export default Error
