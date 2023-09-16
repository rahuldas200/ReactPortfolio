import React, { useState } from 'react'
import './Nav.css'
import {AiFillHome , AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageMinus} from 'react-icons/bi'


const Nav = () => {

  const [active , setActive] = useState("#")


  return (
    <nav>
      <a href="#"
        onClick={ () => setActive("#")}
        className= {active === '#' ? 'active' : ''}> 
        <AiFillHome/> 
      </a>

      <a href="#about" 
        onClick={ () => setActive("#about")}
        className= {active === '#about' ? 'active' : ''} >
        <AiOutlineUser/>
      </a>

      <a href="#exprience"
        onClick={ () => setActive("#exprience")}
        className= {active === '#exprience' ? 'active' : ''} >
         <BiBook/> 
      </a>
      <a href="#contact"
      onClick={ () => setActive("#contact")}
      className= {active === '#contact' ? 'active' : ''} >
         <BiMessageMinus/> 
      </a>

    </nav>
  )
}

export default Nav
