import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Components/CocktailList'
import SearchBox from '../Components/SearchBox'

const cocktailSearchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async({request}) => {
const url = new URL(request.url)
const searchTerm = url.searchParams.get('search') || ''
const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
const drinks = response.data.drinks;
// console.log(drinks)
return {drinks , searchTerm}
    
}

function Landing() {
    const {drinks , searchTerm} = useLoaderData();
  return (
    <div className='flex flex-col items-center'>
      <SearchBox searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing
