import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../Redux/actions.js";
import DogCard from "./dogCard.jsx";
import { useState } from "react";
import './dogs.css'


const Dogs = () => {
  let [page, setPage] = useState(1);

  const dispatch = useDispatch()
  const { dogs, name, order } = useSelector(state=> state)

  useEffect(()=>{
    dispatch(getAllDogs({page}))
    console.log(page, "AQUI PAGE") 
 },[dispatch])
 

//  const changePage = (page)=>{
//   dispatch(getAllDogs({page,name,order}))  
    return (
    <div>   
            <ul className="pages">
          <button className="Paged_numbers" onClick={()=>setPage(1)}>1</button>
          <button className="Paged_numbers" onClick={()=>setPage(2)}>2</button>
          <button className="Paged_numbers" onClick={()=>setPage(3)}>3</button>
          <button className="Paged_numbers" onClick={()=>setPage(4)}>4</button>
          <button className="Paged_numbers" onClick={()=>setPage(5)}>5</button>
          <button className="Paged_numbers" onClick={()=>setPage(6)}>6</button>
          <button className="Paged_numbers" onClick={()=>setPage(7)}>7</button>
          <button className="Paged_numbers" onClick={()=>setPage(8)}>8</button>
          <button className="Paged_numbers" onClick={()=>setPage(9)}>9</button>          
          <button className="Paged_numbers" onClick={()=>setPage(10)}>10</button>          
          <button className="Paged_numbers" onClick={()=>setPage(11)}>11</button>          
          <button className="Paged_numbers" onClick={()=>setPage(12)}>12</button>          
          <button className="Paged_numbers" onClick={()=>setPage(13)}>13</button>          
          <button className="Paged_numbers" onClick={()=>setPage(14)}>14</button>        
            </ul>
             <div className='dogsContainer'>
        {dogs?.map((dog) => (
          <DogCard
            key={dog.id}            
            name={dog.name}
            height={dog.height}
            weight={dog.weight}
            life_span={dog.life_span}
            temperament={dog.temperament}
            image={dog.image}
            id= {dog.id}
          />
        ))}
             </div>
      </div>
    );
  }


export default Dogs;