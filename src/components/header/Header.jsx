import React from 'react'
import './Header.css'
import Cta from './Cta'
import ME from '../../assets/2156604.jpg'
import Hadersocial from './Hadersocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Hello I'm Rahul Das</h1>
        <h5 className='text-light'>Software Developer</h5>
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
