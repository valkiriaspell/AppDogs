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
  let [order, setOrder] = useState("asc");
  let [source, setSource] = useState("All");
  let [temps, setTemps] = useState("All");
  
  const dispatch = useDispatch()

  const { dogs, temperaments } = useSelector(state=> state)

  
  const sourceDogs = (e) => {
    setSource(e.target.value)    
  }

  const orderDogs = (e) => {
    setOrder(e.target.value)
  }

  const tempsDogs = (e) => {
    setTemps(e.target.value)
  }

  const dogsByWeigth = () => {

  }
  
  const handleName = (e)=>{
   e.preventDefault()
   setName(e.target.value)
   setPage(1)
 }
 
  useEffect(()=>{    
      dispatch(getAllDogs(page,name,order, source,temps))  
      console.log(temps, "aqui TEMPS")       
     },[page,name,order,source,temps])
 



    return (
    <div className="Home">   
      <div className="BuscadoryAdd">
    
      <label>Search breed </label> 
      <input 
        className="Buscador"     
        type="text"
        placeholder="Name or part of it..."
        value={name}
        onChange={handleName}        
      />     
   
    <div>Results found: {dogs.count}</div>
    </div>
<div className="Filters">
  <label><strong>Filter by</strong>  </label>
                <div>
                  <label>Existence  </label> <br></br>
                    <select onChange={sourceDogs} placeholder="created" name="" id="">
                        <option value="All">All</option>
                        <option value="Created">Created</option>
                        <option value="Real">Real</option>
                    </select>                    
                </div>
                <div>
                  <label>Temperament  </label> <br></br>
                    <select onChange={tempsDogs} placeholder="created" name="" id="">
                    <option value="All">All</option>
              {
                temperaments.length > 0 &&
                temperaments.map(e =>(
                    <option key={e.name} value={e.name}>{e.name}</option>
                         )
                     )           
              }                     
                    </select>                    
                </div>
</div>
<div className="Filters">
  <label><strong>Order by</strong></label>
                <div>
                  <label>Alphabet  </label> <br></br>           
                    <select onChange={orderDogs}  name="" id="">                        
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                  </div> 
                  <div>
                  <label>Weight </label> <br></br>           
                    <select onChange={dogsByWeigth}  name="" id="">                        
                        <option value="Least heavy">Least heavy</option>
                        <option value="Heaviest">Heaviest</option>
                    </select>
                  </div> 
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
<>
</>
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