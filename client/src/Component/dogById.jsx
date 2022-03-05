import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getDogById, removeDog } from "../Redux/actions";
import './dogById.css'
import dogy from "../images/dog2.gif"


const DogById = (props) => {    
    
        const { id } = props.match.params
        const { dog } = useSelector(state => state)
        const dispatch = useDispatch()
        const history = useHistory()
    
        useEffect(()=>{
            dispatch(getDogById(id))
            console.log(id, "AQUI ID")
            return()=>{
                dispatch(removeDog())
            }
        },[dispatch,id])
    
    const goToBack = ()=>{
        history.goBack()
    }
    console.log(dog)
    
        return (
            <div className="dogDetail">
                {
                    
                    dog?.name? 
                    <>
                        <div className="imgDetail"><img width="400px" height="250px" src={dog.image} alt= "No Image"/></div>
                        <div className="detail">
                            <h3>{dog.name}</h3>
                            <p>Life span promedium: {dog.life_span}</p>
                           <p>Min height: {dog.height.slice(0,2)} cm.</p>
                           <p>Max height: {dog.height.slice(-2)} cm.</p>
                           <p>Min weight: {dog.weight.slice(0,2)} kgs.</p>
                           <p>Max weight: {dog.weight.slice(-2)} kgs.</p>
                           <p>Temperaments: {dog.temperament}</p>                             
                             
                        {/* <button onClick={goToBack}>GO BACK</button> */}
                        </div>
                    </>
                    :
                    <div className="Load">
                        <h2>Loading...</h2>
                        <img src={dogy} alt="Please Wait"/>                        
                        </div>
                }
            </div>
        )
    }

    export default DogById;
    
