import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Landing from './Pages/Landing';
import HomeLayout from './Pages/HomeLayout';
import About from './Pages/About';
import Error from './Pages/Error';
import Cocktail from './Pages/Cocktail';
import NewsLetter from './Pages/NewsLetter';
import SingleErrorPage from './Components/singleErrorPage';

import { loader as LandingLoader } from './Pages/Landing';
import { loader as singleCocktailLoader } from './Pages/Cocktail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
    {
      index: true,
      element: <Landing/>,
      loader: LandingLoader,
      errorElement: <SingleErrorPage/>
    },
    {
      path: 'cocktail/:id',
      element: <Cocktail/>,
      loader: singleCocktailLoader,
      errorElement: <SingleErrorPage/>
    },
    {
      path: 'newsletter',
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
     <RouterProvider router={router}/>
    </>
  )
}

export default App
