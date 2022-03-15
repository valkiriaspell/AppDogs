import React from "react";
import yo from '../images/yo-circulo-naranja.png';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsWhatsapp} from 'react-icons/bs'; 
import "./contact.css";

function Contact() {
    return  <div className="container">
          
           <div className="imageBox">
      <img src={yo} alt="Valkiria Salerno - Profile" id="photo"/>
      </div>

       <div id="cardP">
      <p className="cardP__name">Valkiria Salerno</p>   
      <p className="secTitle">Front End Developer</p>   
      <p className="secTitle">UI/UX Designer</p>         
      
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><i><BsLinkedin /></i></a></li>
        <li><a href="https://github.com/valkiriaspell"><i><BsGithub /></i></a></li>
        <li><a href="https://wa.link/724wn8"><i><BsWhatsapp /></i></a></li>               
      </ul>
      <button className="btn draw-border">Follow</button>
      <button className="btn draw-border">Message</button>
    </div>
  </div>          
}
export default Contact;

