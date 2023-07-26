import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri' 
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_u0ll4kg';
    const templateID = 'template_cprzeyq';
    const userID = 'Q5EdeJj_Z1W8teK1p';

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Handle success, show a success message, etc.
      })
      .catch((error) => {
        console.error('Email failed to send:', error.text);
        // Handle error, show an error message, etc.
      });
      e.target.reset();
    }
    // emailjs.sendForm('service_u0ll4kg', 'template_cprzeyq', form.current, 'Q5EdeJj_Z1W8teK1p')

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="conact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>rdas53300&gmail.com</h5>
            <a href="mailto:rdas53300@gmail.com" target='_blank'>Send a message</a>

          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messanger</h4>
            <h5>Rahul Das</h5>
            <a href="https://m.me/profile.php?id=100010115294969" target='_blank'>Send a message</a>

          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>What's App</h4>
            <h5>7384697146</h5>
            <a href="https://api.whatsapp.com/send?phone+917384697146" target='_blank'>Send a message</a>

          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"
          name='name'
            placeholder='Your Full Name' 
            required
          />

          <input type="email"
            name='email'
            placeholder='Email'
            required
           />
          <textarea name="message" 
          placeholder='Give your Message'
          required
          rows="7"></textarea>

          <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
