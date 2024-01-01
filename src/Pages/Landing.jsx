import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Components/CocktailList'
import SearchBox from '../Components/SearchBox'
import { useQuery } from '@tanstack/react-query'

const cocktailSearchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktailQuery = (searchTerm) => {
  return{
    queryKey : ['search' , searchTerm || 'all'],
    queryFn : async() => {
        const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
        return response.data.drinks
    }
  }
}

export const loader = 
(queryClient) => 
async({request}) => {
const url = new URL(request.url)
const searchTerm = url.searchParams.get('search') || ''
await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))
return {searchTerm}
}

function Landing() {
    const {searchTerm} = useLoaderData();
    const {data : drinks} = useQuery(searchCocktailQuery(searchTerm))

  return (
    <div className='flex flex-col items-center'>
      <SearchBox searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing
