import React from "react";
import yo from '../images/yo-circulo-naranja.png';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsWhatsapp} from 'react-icons/bs';
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import "./about.css";

function About() {
    return  <div className="container">
          
           <div className="imageBox">
      <img src={yo} alt="Valkiria Salerno - Profile" id="photo"/>
      </div>

       <div id="cardP">
      <p className="cardP__name">Valkiria Salerno</p>   
      <div><p className="secTitle"> This is a catalog type web application created by applying the following technologies: </p></div>
      <ul className="tech-icons">
        <li><FaReact /></li>
        <li><SiRedux /></li>
        <li><SiExpress /></li>
        
      </ul>
      <p className="secTitle">Front End Developer</p>   
      <p className="secTitle">UI/UX Designer</p>         
      
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><i><BsLinkedin /></i></a></li>
        <li><a href="https://github.com/valkiriaspell"><i><BsGithub /></i></a></li>
        <li><a href="https://wa.link/724wn8"><i><BsWhatsapp /></i></a></li>               
      </ul>
      <a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164"><button className="btn draw-border">Follow</button></a>
      <a href="https://wa.link/724wn8"><button className="btn draw-border">Message</button></a>
    </div>
  </div>          
}
export default About;

