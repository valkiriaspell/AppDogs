import React, { useState } from "react";
import { rateDogs } from "../Redux/actions";
import { Container, Radio, Rating } from "./RatingStyles";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Rating.css'



const Rate = (props) => {
  const [rate, setRate] = useState(0);
  const [msg, setMSG] = useState("");

  const {id} = props
  const dispatch = useDispatch()

 const {ratingDogs} = useSelector(state => state)

 useEffect(() => {       
   }, [rate,msg])

  const voting = (rating) => {    
    setRate(rating)
    dispatch(rateDogs({id: id, votes:
        rating}))
    setMSG("Thanks for voting")
    }
    

  return (
      <div className="rating">
        <label className="loveit">How much do you love it?</label>
    <Container>
      {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
              <label>
            <Radio
              type="radio"
              value={givenRating}
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
    {msg?<label>{msg}</label>:null}
    </div>
  );
};

  
export default Rate;