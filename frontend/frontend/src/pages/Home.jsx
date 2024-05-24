import React from 'react'
import Footer from './Footer'
import Banner from './Banner'
import Featured from './Featured'
import Director from './Director'
import Nav from '../components/Nav'

const Home = () => {
    return (
      <div>
        <Nav/>
        <Banner/>
        <Director/>
        <Featured/>
        <Footer/>           
      </div>
  )
}

export default Home