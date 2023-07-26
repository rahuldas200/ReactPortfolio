import React from 'react'
import './About.css'
import ME from "../../assets/IMG_8318.jpg"
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me_img">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about_contant">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className= "about_icon"/>
              <h5>Exprience</h5>
              <small> Fresher</small>
            </article>

            {/* <article className='about_card'>
              <FiUsers className= "about_icon"/>
              <h5>Client</h5>
              <small>200+ client </small>
            </article> */}

            <article className='about_card'>
              <VscFolderLibrary className= "about_icon"/>
              <h5>pojects</h5>
              <small> 3+ pojects done</small>
            </article>

          </div>
          

          <p>I am a punctual and motivated individual who can work in a busy environment and produce high work standards.
I am an excellent team worker who can take instructions from all levels and build good working relationships with
colleagues. I am flexible, and reliable and possess excellent timekeeping skills.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about
