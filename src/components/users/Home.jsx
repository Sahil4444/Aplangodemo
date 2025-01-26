import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './Hero'
import Availoffers from './Availoffers'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Clients from './Clients'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Availoffers />
      <Products />
      <Clients />
      <About />
      <Contact />
    </div>
  )
}

export default Home
