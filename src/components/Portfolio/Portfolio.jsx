import React from 'react'
import './Portfolio.css'
import {BsGithub} from 'react-icons/bs'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/Snake.png'
import IMG3 from "../../assets/Weather.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My projects</h2>

      <div className="container project_container">
        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG1} alt="" /> 
          </div>
          <h3>Tic-tak-toe Game</h3>
          <div className="project_item_cta">
              <a href="https://github.com/rahuldas200/Tik-Tac-Toe_Game.git" className='btn'>Github</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG2} alt="" /> 
          </div>
          <h3>Snake Game</h3>
          <div className="project_item_cta">
              <a href="https://github.com/rahuldas200/SnakeGame.git" className='btn'>Github</a>
          </div>
        </article>

        <article className='project_item'>
          <div className="project_item_img">
            <img src={IMG3} alt="" /> 
          </div>
          <h3>Weather App</h3>
          <div className="project_item_cta">
              <a href="https://github.com/rahuldas200/Weather_App.git" className='btn '>Github</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio
