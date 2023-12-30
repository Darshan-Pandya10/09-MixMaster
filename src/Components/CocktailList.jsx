import React from 'react'
import CocktailCard from './CocktailCard'

function CocktailList({drinks}) {
    if(!drinks){
        return <h4 className='font-semibold tracking-wider text-base'>No matching cocktails found.</h4>
    }
  return (
    <div className="drinks-grid p-8 flex items-center justify-center flex-wrap">
        {drinks.map((drink) => {
          return <CocktailCard drink={drink} key={drink.idDrink}/>
        })}
    </div>
  )
}

export default CocktailList
