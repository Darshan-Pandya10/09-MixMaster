import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Navbar/>
      <div className='content pt-12'>
        {isPageLoading ? <div className="loader"></div> : <Outlet/>}
      </div>
    </div>
  )
}

export default HomeLayout
