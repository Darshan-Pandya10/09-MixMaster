import React from 'react'
import { Link } from 'react-router-dom';

function CocktailCard({drink}) {
    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drink;
  return (
    <div className='w-auto h-auto m-8 p-2 shadow-lg bg-white'>
      <img src={strDrinkThumb} width={300} height={300} alt={`image of ${strDrink}`} />
      <div className="details p-4">
        <h2 className='text-xl font-semibold tracking-wider'>{strDrink}</h2>
        <h3 className='text-base font-semibold tracking-wider text-slate-500'>{strAlcoholic}</h3>
        <h3 className='text-base font-semibold tracking-wider mb-4 text-slate-900'>{strGlass}</h3>
        <Link className='px-6 py-2 text-base font-semibold tracking-wider bg-green-400 text-white' to={`cocktail/${idDrink}`}>Details</Link>
      </div>
      
    </div>
  )
}

export default CocktailCard
