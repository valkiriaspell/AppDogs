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
            
                
            <button  className="btn draw-border" onClick={() => history.push('/main')}>Home</button>
               
                
            <button  className="btn draw-border" onClick={() => history.push('/main/create_dog')}>Create Dog</button>
          
            </div>
        </div>
    );
};
export default Nav;