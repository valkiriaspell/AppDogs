import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { allRatings, getAllTemperaments } from "../Redux/actions.js";
import './Nav.css';




const Nav = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/")

    useEffect(() => {
        dispatch(getAllTemperaments());
        dispatch(allRatings());
    }, [])



    return (

        <div className="naviBar">            
                
                    <NavLink exact to="/home" className={splitLocation[1] === "home"? "linkSelected" : "btn draw-border"}   > Home </NavLink>
                    <NavLink exact to='/createDog' className={splitLocation[1] === "createDog"? "linkSelected" : "btn draw-border"} > Add New Breed </NavLink>
                    <NavLink exact to="/about" className={splitLocation[1] === "about"? "linkSelected" : "btn draw-border"} > About </NavLink>                
            
        </div>
    );
};
export default Nav;