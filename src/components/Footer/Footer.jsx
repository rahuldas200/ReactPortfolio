import React from 'react'
import './Footer.css'
import {BsFacebook,BsGithub,BsLinkedin} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>Rahul</a>
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#portfolio">Project</a></li>
          <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://facebook" target='_blank'><BsFacebook/></a>
        <a href="https://github.com/rahuldas200" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/rahul-das-79a26a219" target='_blank'><BsLinkedin/></a>
        <a href="https://leetcode.com/rdas53300/" target='_blank'><SiLeetcode/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rahul's portfolio . All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
