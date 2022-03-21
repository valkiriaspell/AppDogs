import React, { useState } from "react";
import './dogCard.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect } from "react";




function DogCard(props) {

    

    const { rateDogs } = useSelector(state => state)

    var divStyle = { backgroundImage: 'url(' + props.image + ')', width: '300px' }
    
    ////////////////  ---->    loveScore   <------ /////////////////
    if (rateDogs){
        console.log(rateDogs)
        console.log( props.id)
        var dog = rateDogs.findIndex(d => d.id === props.id.toString())
        console.log(dog, "aqui index")
          if (dog >= 0){          
          var loveScore = rateDogs[dog].votes/rateDogs[dog].totalVotes  ;
          }
        }
    
      

    return (
        <div className='Card'>
            <Link to={`/home/${props.id}`}><div className='imgDog' style={divStyle}> </div></Link>

            <div className="dogCard">
                <table id="dog">
                    <thead>
                        <tr>
                            <th colSpan="3"><strong>{props.name}</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Min Weight:</td>
                            <td>{props.weight.slice(0, 2)} Kg.</td>
                        </tr>
                        <tr>
                            <td>Max Weight:</td>
                            <td>{props.weight.slice(-2)} Kg.</td>
                        </tr>
                        <tr>
                            <td>Temperament:</td>
                            <td>{props.temperament}</td>
                        </tr>
                        <tr>
                            <td>Love score:</td>
                            <td><FaHeart
                                        color={"rgb(139, 1, 1)"                                           
                                        }
                                    /> {loveScore?loveScore.toFixed(2):0}</td>
                        </tr>                       

                    </tbody>
                </table>
                <Link to={`/home/${props.id}`}><button className='btnSeeDog'>See more</button></Link>                
                    
            </div>
        </div>

    );
};




export default DogCard;