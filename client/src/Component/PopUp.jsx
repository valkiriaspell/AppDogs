import React, { Component } from 'react';
import './PopUp.css'
import { Link } from 'react-router-dom';
import dogy from "../images/dogAsking.gif"

export default class PopUp extends Component {
    handleClick = () => {
      this.props.toggle();
    };
  
    render() {
      return (
        <div id= "popUp1" className="overlay">
          <div className="popUpnow">
                      
          <img src={dogy} width="500px" height="250px" alt="Please Wait" />
              <h2>Well this is awkward...<br></br> But i may change your mind.</h2>
              <h1>Come in!</h1>
              <br />
              <Link to="/home"><button  className="btn draw-border" > All Right </button>  </Link>
            
          </div>
        </div>
      );
    }
  }
  