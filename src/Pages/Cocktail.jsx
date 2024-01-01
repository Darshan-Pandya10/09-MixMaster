import React from 'react'
import axios from 'axios'
import { useLoaderData , Link, Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey : ['cocktail' , id],
    queryFn : async() => {
      const {data} = await axios.get(`${singleCocktailURL}${id}`)
      return data
    }
  }

}

export const loader = 
(queryClient) => 
async({params}) => {
  const {id} = params;
  await queryClient.ensureQueryData(singleCocktailQuery(id))
  return {id} 
}

function Cocktail() {

  const {id} = useLoaderData();
  const {data} = useQuery(singleCocktailQuery(id))

    if(!data) return <Navigate to='/' />
  
  const singleCocktail = data.drinks[0];
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
        <p className='paragraph'><span className='span'>Alocoholic : </span> {info}</p>
         <p className='paragraph'><span className='span'>  Category : </span> {category}</p>
         <p className='paragraph'><span className='span'>  Glass : </span> {glass}</p>
         <p className='paragraph'><span className='span'>  Ingredients : </span> {
          validIngredients.map((item , index) => {
            return <span key={index} className=''>{item}{index < validIngredients.length - 1 ? ',' : ''}</span>
          })
         } </p> 
         <p className='paragraph'><span className='span'>  Instructions : </span> {instructions}</p> 
      </div>
  </div>
    </div>
  )
}

export default Cocktail
