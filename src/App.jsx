import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Landing from './Pages/Landing';
import HomeLayout from './Pages/HomeLayout';
import About from './Pages/About';
import Error from './Pages/Error';
import Cocktail from './Pages/Cocktail';
import NewsLetter from './Pages/NewsLetter';
import SingleErrorPage from './Components/singleErrorPage';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'


import { loader as LandingLoader } from './Pages/Landing';
import { loader as singleCocktailLoader } from './Pages/Cocktail';
import { action as newsLetterAction } from './Pages/NewsLetter';


const queryClient = new QueryClient({
  defaultOptions :{
    queries : {
      staleTime : 1000 * 60 * 5,
    }
  }
})


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
    {
      index: true,
      element: <Landing/>,
      loader: LandingLoader(queryClient),
      errorElement: <SingleErrorPage/>
    },
    {
      path: 'cocktail/:id',
      element: <Cocktail/>,
      loader: singleCocktailLoader(queryClient),
      errorElement: <SingleErrorPage/>
    },
    {
      path: 'newsletter',
      action: newsLetterAction,
      element: <NewsLetter/>
    },
    {
      path: '/about',
      element: <About/>
    },
  ]
  },
   
])

function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
     </QueryClientProvider>
    </>
  )
}

export default App
