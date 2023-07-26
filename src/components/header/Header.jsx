import React from 'react'
import './Header.css'
import Cta from './Cta'
import ME from '../../assets/RahulIMG-1.jpg'
import Hadersocial from './Hadersocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rahul Das</h1>
        <h5 className='text-light'>Fullstack Devloper</h5>
         <Cta/>
        <Hadersocial/>
        <div className=' me'>
          <img src={ME} alt="me" />


        </div>
        <a href="#contact" className='scrool_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
