import React, { useState } from "react";
import './dogCard.css';
import { Link } from 'react-router-dom';
import { Container, Radio, Rating } from "./RatingStyles";
import { AiOutlineHeart } from "react-icons/ai";



function DogCard(props) {

    const [rate, setRate] = useState(props.id)
    var divStyle = { backgroundImage: 'url(' + props.image + ')', width: '300px' }

    var suma = Math.random() * (props.id*2)

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

                    </tbody>
                </table>
                <Link to={`/home/${props.id}`}><button className='btnSeeDog'>See more</button></Link>
                <Container>
                    {[...Array(5)].map((item, index) => {                         
                        const givenRating = index + suma ;    //0+ n entre 0 y 10
                        console.log(givenRating)
                        return (
                            <label key={index}>
                                <Radio
                                    type="radio"
                                    value={givenRating}
                                    disabled={rate !== 0}                                    
                                />
                                <Rating>
                                    <AiOutlineHeart
                                        color={
                                            givenRating < rate || givenRating === rate
                                                ? "rgb(139, 1, 1)"
                                                : "000"
                                        }
                                    />
                                </Rating>
                            </label>
                        );
                    })}
                </Container>
                    <label className="score">Score: {props.id/10}</label>
            </div>
        </div>

    );
};




export default DogCard;