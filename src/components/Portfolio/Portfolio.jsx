import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My projects</h2>

      <div className="container project_container">
        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG1} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG2} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG3} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG4} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG5} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG6} alt="" /> 
          </div>
          <h3>Project title</h3>
          <div className="project_item_cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
