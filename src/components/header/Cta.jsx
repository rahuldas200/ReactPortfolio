import React from 'react'
import CV from '../../assets/cv-Rahul.pdf'


const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target='_blank'> Download Cv</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default Cta
