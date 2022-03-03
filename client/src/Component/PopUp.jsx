import React, { Component } from 'react';
import './PopUp.css'
import { Link } from 'react-router-dom';

export default class PopUp extends Component {
    handleClick = () => {
      this.props.toggle();
    };
  
    render() {
      return (
        <div id= "popUp1" className="overlay">
          <div className="popUpnow">
                      
            
              <h3>Well this is awkward... But i may change your mind.</h3>
              <h2>¡Come in!</h2>
              <br />
              <Link to="/home"><button  className="btn draw-border" > OK </button>  </Link>
            
          </div>
        </div>
      );
    }
  }
  