import React from 'react'
import "./Exprence.css"
import cpp from '../../assets/icon/Cpp_1.svg';
import javaScrit from "../../assets/icon/icons-javascript.svg"
import Html from "../../assets/icon/icons-html-5.svg"
import Css from "../../assets/icon/Css.svg"
import rc from "../../assets/icon/react.svg"
import tailwind from "../../assets/icon/Tailwind.svg"
import express from "../../assets/icon/Express.svg"
import mongoDb from "../../assets/icon/icons-mongodb.svg"
import MySql from "../../assets/icon/MySql.svg"
import git from "../../assets/icon/icons-github.svg"
import vs from "../../assets/icon/icons-visual-studio-code-2019.svg"
import postMan from "../../assets/icon/PostMan.svg"


const Exprence = () => {
  return (
    <section id='exprience' >
      <h5>What Skills I Have</h5>
      <h2>My Skill</h2>

      <div className='exprience_container'>
        <div className="expreience_tag">
          <div className="icon">
              <img src={cpp} alt="" />
          </div>        
          <h5 className='icon_name'>Post man</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={javaScrit} alt="" />
          </div>        
          <h5 className='icon_name'>javascript</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={Html} alt="" />
          </div>        
          <h5 className='icon_name'>HTML</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={Css} alt="" />
          </div>        
          <h5 className='icon_name'>CSS</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon_ta">
              <img src={tailwind} alt=""/>
          </div>        
          <h5 className='icon_name'>Tailwind Css</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={rc} alt="" />
          </div>        
          <h5 className='icon_name'>React</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={express} alt="" />
          </div>        
          <h5 className='icon_name'>Express js</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={mongoDb} alt="" />
          </div>        
          <h5 className='icon_name'>MongoDb</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={MySql} alt="" />
          </div>        
          <h5 className='icon_name'>MySql</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={git} alt="" />
          </div>        
          <h5 className='icon_name'>GitHub</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={postMan} alt="" />
          </div>        
          <h5 className='icon_name'>Post Man</h5>
        </div>

        <div className="expreience_tag">
          <div className="icon">
              <img src={vs} alt="" />
          </div>        
          <h5 className='icon_name'>Vs code</h5>
        </div>

      </div>
    </section>
  )
}

export default Exprence
