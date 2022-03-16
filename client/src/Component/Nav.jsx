import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom'
import { getAllTemperaments } from "../Redux/actions.js";
import './Nav.css';




const Nav = () => {

const dispatch = useDispatch();

useEffect(()=>{    
    dispatch(getAllTemperaments())       
   },[])

    return(
        
            <div className="naviBar">                       
             
            <NavLink exact to="/home" activeClassName="linkSelected" className="btn draw-border"> Home </NavLink>
               
            <NavLink exact to='/createDog' activeClassName="linkSelected" className="btn draw-border"> Add New Breed </NavLink>
                
            {/* <NavLink exact to="/contact" activeClassName="linkSelected" className="btn draw-border"> Contact </NavLink> */}
                        
            </div>
      
    );
};
export default Nav;