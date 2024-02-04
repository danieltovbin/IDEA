import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import BtnStart from '../../Components/Home/BtnStart'
import "./homePage.scss"
import BottomPage from '../../Components/Home/BottomPage'
import AllProjects from './AllProjects'
const HomePage = () => {
  return (
    <div className='homePageDiv'>
        <Navbar/>
        <BtnStart/>
        <AllProjects/>
        <BottomPage/>
    </div>
  )
}

export default HomePage