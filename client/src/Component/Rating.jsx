import React, { useState } from "react";
import { rateDogs } from "../Redux/actions";
import { Container, Radio, Rating } from "./RatingStyles";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const Rate = (props) => {
  const [rate, setRate] = useState(0);
  const {id} = props

 const {ratinDogs} = useSelector(state => state)

  const voting = (rating) => {
    
    setRate(rating)
    dispatch(rateDogs({id: id, votes:
        rating}))
    setMSG("Thanks for voting")

    
    useEffect(() => {
          
      }, [rate])

  return (
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
                    ? "000"
                    : "rgb(139, 1, 1)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};
}
  
export default Rate;