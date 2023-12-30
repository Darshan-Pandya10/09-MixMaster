import React from 'react'
import axios from 'axios'
import { useLoaderData , Link } from 'react-router-dom'

const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async({params}) => {
  const {id} = params;
  const response = await axios.get(`${singleCocktailURL}${id}`)
  return response
}

function Cocktail() {
  const {id , data} = useLoaderData();
  const singleCocktail = data?.drinks[0];
  const {
    strDrink : name , 
    strDrinkThumb : image, 
    strAlcoholic : info , 
    strCategory : category , 
    strGlass : glass , 
    strInstructions : instructions} = singleCocktail;

    const validIngredients = Object.keys(singleCocktail).filter(key => key.startsWith('strIngredient') && singleCocktail[key] !== null).map((key) => singleCocktail[key])
    

  return (  
    <div>
    <Link to='/' className='m-6 p-3 text-base font-semibold tracking-wider bg-green-400 hover:bg-green-500' >Back Home</Link>
   <div className='m-4 mt-12 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center'>
      <div className="details m-4">
        <img src={image} width={350} height={350} className='m-auto' alt={`image of ${name}`} />
      </div>
      <div className='m-4 ml-8'>
        <h3 className='text-2xl font-bold tracking-wider md:text-3xl leading-7'>{name}</h3>
        <p className='my-4 text-base font-semibold tracking-wider leading-7'><span className='p-1 text-base font-semibold tracking-wider bg-green-400 mr-2'>Alocoholic : </span> {info}</p>
         <p className='my-4 text-base font-semibold tracking-wider leading-7'><span className='p-1 text-base font-semibold tracking-wider bg-green-400 mr-2'>  Category : </span> {category}</p>
         <p className='my-4 text-base font-semibold tracking-wider leading-7'><span className='p-1 text-base font-semibold tracking-wider bg-green-400 mr-2'>  Glass : </span> {glass}</p>
         <p className='my-4 text-base font-semibold tracking-wider leading-7'><span className='p-1 text-base font-semibold tracking-wider bg-green-400 mr-2'>  Ingredients : </span> {
          validIngredients.map((item , index) => {
            return <span key={index} className=''>{item}{index < validIngredients.length - 1 ? ',' : ''}</span>
          })
         } </p> 
         <p className='my-4 text-base font-semibold tracking-wider leading-7'><span className='p-1 text-base font-semibold tracking-wider bg-green-400 mr-2'>  Instructions : </span> {instructions}</p> 
      </div>
  </div>
    </div>
  )
}

export default Cocktail
