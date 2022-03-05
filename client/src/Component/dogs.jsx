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

  const perPage = 8;  
  // const pages = Math.ceil(dogs.length / perPage); 

  useEffect(()=>{
    dispatch(getAllDogs({page}))
    console.log(page, "AQUI PAGE") 
 },[page])
 
// const bucle = () =>{

//   for (i = 1; i <= dogs.length ; i+15) {
//     let j = 1;    
//     // <button className="Paged_numbers" onClick={()=>setPage(j)}>1</button>;
//     j++;
//     console.log("AQUI INDICE", i, "AQUI YE", j)
//   }
// }
//  << 1 2 3 >>
// bucle()


    return (
    <div>   
            <ul className="pages">
          <button className="Paged_numbers" onClick={()=>setPage(page-1)} disabled={page==1}>{"<<"}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page-1)} disabled={page==1}>{page-1} </button>
          <button className="Paged_numbers_page" >{page}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page+1)}>{page+1}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page+1)}  >{">>"}</button>
          {/* <button className="Paged_numbers" onClick={()=>setPage(6)}>6</button>
          <button className="Paged_numbers" onClick={()=>setPage(7)}>7</button>
          <button className="Paged_numbers" onClick={()=>setPage(8)}>8</button>
          <button className="Paged_numbers" onClick={()=>setPage(9)}>9</button>          
          <button className="Paged_numbers" onClick={()=>setPage(10)}>10</button>          
          <button className="Paged_numbers" onClick={()=>setPage(11)}>11</button>          
          <button className="Paged_numbers" onClick={()=>setPage(12)}>12</button>          
          <button className="Paged_numbers" onClick={()=>setPage(13)}>13</button>          
          <button className="Paged_numbers" onClick={()=>setPage(14)}>14</button>         */}
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