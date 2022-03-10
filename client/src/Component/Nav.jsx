import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import { getAllTemperaments } from "../Redux/actions.js";
import './Nav.css';
// import SearchBar from './SearchBar';


const Nav = () => {
const history = useHistory();
const dispatch = useDispatch();

useEffect(()=>{    
    dispatch(getAllTemperaments())       
   },[])

    return(
        
            <div className="naviBar">                       
                            
            <button  className="btn draw-border" onClick={() => history.push('/home')}>Home</button>
               
            <button  className="btn draw-border" onClick={() => history.push('/createDog')}>Add New Breed</button>
                
            <button  className="btn draw-border" onClick={() => history.push('/home/contact')}>Contact</button>
          
            </div>
      
    );
};
export default Nav;