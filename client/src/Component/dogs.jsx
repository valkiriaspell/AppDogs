import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../Redux/actions.js";
import DogCard from "./dogCard.jsx";
import { useState } from "react";
import './dogs.css'


const Dogs = () => {
  let [page, setPage] = useState(1);
  let [name, setName] = useState("");
  
  const dispatch = useDispatch()
  const { dogs } = useSelector(state=> state)

   
  
  useEffect(()=>{
    if (name !== "") {
      dispatch(getAllDogs(page,name))  
      console.log(dogs, "aqui perros") 
      console.log(name, "AQUI NAME")
    } else {
    dispatch(getAllDogs(page))
    console.log(page, "AQUI PAGE") 
  }},[page,name])
 
 const handleOnChange = (e)=>{
  e.preventDefault()
  setName(e.target.value)
  setPage(1)
}



    return (
    <div className="Home">   
      <div className="BuscadoryAdd">
    
      <label>Search breed </label> 
      <input 
        className="Buscador"     
        type="text"
        placeholder="Name or part of it..."
        value={name}
        onChange={handleOnChange}        
      />     
   
    <div>Results founded: {dogs.count}</div>
    </div>
    {name?
    <>
          <ul className="pages">
          <button className="Paged_numbers" onClick={()=>setPage(page-1)} disabled={page===1}>{"<<"}</button>
          <button className="Paged_numbers_page" >{page}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page+1)} disabled={page>=3} >{">>"}</button>         
            </ul>
            </> 
            :
            <ul className="pages">
          <button className="Paged_numbers" onClick={()=>setPage(page-3)} disabled={page===1}>{"<<"}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page-1)} disabled={page===1}>{page-1} </button>
          <button className="Paged_numbers_page" >{page}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page+1)} disabled={page>=21} >{page+1}</button>
          <button className="Paged_numbers" onClick={()=>setPage(page+3)} disabled={page>=21} >{">>"}</button>         
            </ul>
}
             {dogs.count? 
             <>
            <div className='dogsContainer'>
        {dogs.result?.map((dog) => (
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
        )) }        
             </div>
             </>
             :
             <div className="msgDogs">Dogs not found</div>
        }
      </div>
    );
  }


export default Dogs;