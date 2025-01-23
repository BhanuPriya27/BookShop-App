import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <div className='w-screen flex items-center justify-center flex-col '>
     <Navbar/>
     <div className='dark:bg-black dark:text-white w-screen flex items-center justify-center flex-col'>
        <Course/>
     </div>
     <Footer/> 
    </div>
  )
}

export default Courses
