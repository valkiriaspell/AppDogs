import React from "react";
import {useHistory} from 'react-router-dom'
import './Nav.css';
// import SearchBar from './SearchBar';


const Nav = () => {
const history = useHistory();

    return(
        <div >
            <div className="naviBar">
                <title>Hola</title>            
            
                
            <button  className="btn draw-border" onClick={() => history.push('/home')}>Home</button>
               
                
            <button  className="btn draw-border" onClick={() => history.push('/createDog')}>Add New Breed</button>
          
            </div>
        </div>
    );
};
export default Nav;