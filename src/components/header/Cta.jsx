import React from 'react'
import CV from '../../assets/Resume.pdf';


const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target='_blank'> Resume</a>
        <a href="https://www.linkedin.com/in/rahul-das-79a26a219" target='_blank' className='btn btn-primary'>Connect With me</a>
      
    </div>
  )
}

export default Cta
