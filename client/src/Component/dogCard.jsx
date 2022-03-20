import React, { useState } from "react";
import './dogCard.css';
import { Link } from 'react-router-dom';
import { Container, Radio, Rating } from "./RatingStyles";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";




function DogCard(props) {

    const [rate, setRate] = useState(props.id)
    var divStyle = { backgroundImage: 'url(' + props.image + ')', width: '300px' }

    var suma = Math.random() * (props.id*2)
    var numb = suma.toString().slice(0,3)

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
                                    /> {numb}</td>
                        </tr>                       

                    </tbody>
                </table>
                <Link to={`/home/${props.id}`}><button className='btnSeeDog'>See more</button></Link>                
                    
            </div>
        </div>

    );
};




export default DogCard;