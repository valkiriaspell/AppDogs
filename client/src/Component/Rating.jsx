import React, { useState } from "react";
import { ratingDogs } from "../Redux/actions";
import { Container, Radio, Rating } from "./RatingStyles";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Rating.css'



const Rate = (props) => {
  const [rate, setRate] = useState(0);
  const [msg, setMSG] = useState("");

  const dispatch = useDispatch()
  const {id} = props
  const {mje} = props

  const { rateDogs } = useSelector(state => state)

  if (rateDogs.length){
    var dogvoted = rateDogs.find(d => d.id === id)        
}

 useEffect(() => {       
   }, [rate,msg])
 

  const voting = (rating) => {    
    setRate(rating)
    dispatch(ratingDogs({id: id, votes:
        rating}))
    setMSG("Thanks for voting!")
    setTimeout(() => {setMSG("Score:"+ dogvoted.votes/5 + " Total votes:" + dogvoted.totalVotes)}, 2000);    
    }
    

  return (
      <div className="rating">
        {mje?<label className="loveit">{mje}</label>:null}
    <Container>
      {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
              <label key={index}>
            <Radio
              type="radio"
              value={givenRating}
              disabled={rate !== 0}
              onClick={() => {
                  voting(givenRating);                
                }}
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
    {msg?<label className={msg.includes("Score") ? "red" : "black"}>{msg}</label>:null}
    </div>
  );
};

  
export default Rate;