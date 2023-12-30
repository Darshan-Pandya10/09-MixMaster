import '../App.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar h-40 p-6 flex flex-col justify-between sm:h-20 sm:flex-row sm:justify-between shadow-lg'>
    <span className='text-2xl font-bold tracking-wider lg:text-3xl text-green-600'>MixMaster</span>
    <nav className='flex flex-col sm:flex-row mt-4 sm:mt-0'>
        <NavLink to='/' className='navlinks'>
            Home
        </NavLink>
        <NavLink to='/about' className='navlinks'>
            About
        </NavLink>
        <NavLink to='/newsletter' className='navlinks'>
            NewsLetter
        </NavLink>
    </nav>
    </div>
  )
}

export default Navbar
