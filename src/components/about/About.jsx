import React from 'react'
import './About.css'
import ME from "../../assets/RahulIMG-1.jpg"
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const about = () => {
  return (
    <section id='about' className='about'>

        <h5 className='about_h5'>Get to know</h5>
        <h2 className='about_h2'>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me_img">
              <img className='img_about' src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about_contant">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className= "about_icon"/>
              <h5>Exprience</h5>
              <small className='about_card_small'> Fresher</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className= "about_icon"/>
              <h5>Projects</h5>
              <small className='about_card_small'> 3+ Projects done</small>
            </article>

          </div>
          

          <p className='about_p'>I am a punctual and motivated individual who can work in a busy environment and produce high work standards.
              I am an excellent team worker who can take instructions from all levels and build good working relationships with
              colleagues. I am flexible, and reliable and possess excellent timekeeping skills.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about
