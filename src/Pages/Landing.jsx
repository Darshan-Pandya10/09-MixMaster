import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailCard from '../Components/CocktailCard'
import CocktailList from '../Components/CocktailList'

const cocktailSearchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async() => {
const searchTerm = ''
const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
const drinks = response.data.drinks;
// console.log(drinks)
return {drinks , searchTerm}
    
}

function Landing() {
    const {drinks , searchTerm} = useLoaderData();
  return (
      <CocktailList drinks={drinks} />
  )
}

export default Landing
