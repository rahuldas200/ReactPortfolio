import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Exprence from './components/expreence/Exprence'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      
        <Header/>
        <Nav/>
        <About/>
        <Exprence/>
        <Portfolio/>
        <Contact/> 
        <Footer/>

    </div>
  )
}

export default App
