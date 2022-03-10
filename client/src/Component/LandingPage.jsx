import React from "react";
import {Link} from 'react-router-dom'
import './LandingPage.css';
import { useState } from "react";
import PopUp from "./PopUp";
// import SearchBar from './SearchBar';



const LandingPage = () => {
    let [state, setState] = useState(false);

      let togglePop = (e) => {
          
        setState(!state);
          
      };
      console.log(state)
    return(
        <div className="landingBox">
            
            {state ? <PopUp toggle={togglePop} /> : <div className="landingText"> 
            <p>Do you like dogs?</p>
            <div>                  
            <Link to="/home"><button  className="btn draw-border" > YES</button>           </Link>
            <button className="btn draw-border" onClick={()=>togglePop()} > ...No</button>
            </div>
            </div> }              
        </div>
    );
};
export default LandingPage;