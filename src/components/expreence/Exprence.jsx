import React from 'react'
import "./Exprence.css"
import {BsPatchCheckFill} from 'react-icons/bs';
import {BiLogoHtml5, BiLogoCss3,BiLogoMongodb, BiLogoJavascript,BiLogoTailwindCss,BiLogoReact} from 'react-icons/bi';
import {GrMysql} from 'react-icons/gr';
import {SiExpress} from 'react-icons/si';

const Exprence = () => {
  return (
    <section id='exprience' >
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>

      <div className="container expreince_container">
        <div className="exprience_frontend">
          <h3>Frontend Developer</h3>
          <div className="exprience_content">
            <article className='exprience_details'>
            <BiLogoHtml5 className='exprience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <BiLogoCss3 className='exprience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <BiLogoJavascript className='exprience_details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <BiLogoReact className='exprience_details_icon'/>
              <div>
                <h4>React Js</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <BiLogoTailwindCss className='exprience_details_icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exprence-backend">
        <div className="exprience_frontend">
          <h3>Backend Developer</h3>
          <div className="exprience_content">
          <article className='exprience_details'>
            <GrMysql className='exprience_details_icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <BiLogoMongodb className='exprience_details_icon'/>
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>

            <article className='exprience_details'>
            <SiExpress className='exprience_details_icon'/>
              <div>
                <h4>Express Js</h4>
                <small className='text-light'>Exprience</small>
              </div>
            </article>
          </div>
        </div>
          

        </div>
      </div>
    </section>
  )
}

export default Exprence
