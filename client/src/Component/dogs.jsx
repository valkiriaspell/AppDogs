import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { allRatings, getAllDogs, sortDogs } from "../Redux/actions.js";
import DogCard from "./dogCard.jsx";
import { useState } from "react";

import './dogs.css'


const Dogs = () => {

  
////////////////  ---->    local states   <------ /////////////////
  let [page, setPage] = useState(1);
  let [name, setName] = useState("");
  let [order, setOrder] = useState("asc");
  let [source, setSource] = useState("All");
  let [temps, setTemps] = useState("All");
  
  ////////////////  ---->    store state   <------ /////////////////
  let { dogs, temperaments } = useSelector(state => state)
  const { rateDogs } = useSelector(state => state)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllDogs(name, order, source, temps))
    dispatch(allRatings())
  }, [name, order, source, temps])
    
  
  let [heavy, setHeavy] = useState("null")  
  

  useEffect(() => {
    setPage(1)  
  }, [heavy])

  ////////////////  ---->    Input functions   <------ /////////////////
  
  const sourceDogs = (e) => {
    setSource(e.target.value)
    setPage(1)
  }

  const orderDogs = (e) => {
    setOrder(e.target.value)
    setPage(1)
  }

  const tempsDogs = (e) => {
    setTemps(e.target.value)
    setPage(1)
  } 

 const dogsByWeight = (value) => {    
    setHeavy(value)
    dispatch(sortDogs(value))
    console.log(dogs, "perros after peso")    
  }
  
    const handleName = (e) => {
      e.preventDefault()
      setName(e.target.value)
      setPage(1)
    }

    const refresh = () => {
      setPage(1);
  setName("");
  setOrder("asc");
  setSource("All");
  setTemps("All")
  setHeavy("null") 
    }

    
    ////////////////  ---->    pagination   <------ /////////////////

const dogsXPage = 8;
const counter = dogs.length
let result = dogs.slice((dogsXPage * (page - 1)), (dogsXPage * (page - 1)) + dogsXPage)
dogs = {
  result: result,
  count: counter,
}

let totalPages = Math.ceil(dogs.count / 8)


  return (
    <div className="Home">
      <div className="filterAndOrders">
      
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
                temperaments.map(e => (
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
            <select onChange={orderDogs} name="" id="">
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
          <div>
            <label>Weight </label> <br></br>
            <select onChange={(e) => dogsByWeight(e.target.value)} name="" id="">
              <option value="null"> - </option>
              <option value="least"> Least heavy </option>
              <option value="heavy"> Heaviest </option>
            </select>
          </div>
        </div>
      </div>

      <div className="searchAndPages">
        <div className="BuscadoryAdd">
          <label><strong>Search breed</strong></label>
          <input
            className="Buscador"
            type="text"
            placeholder="Name or part of it..."
            value={name}
            onChange={handleName}
          />
          <label><strong>Results found: {dogs.count}</strong></label>
        </div>
      </div>

      {dogs.count ?
        <div>
          {page === 1 && totalPages === 1 ?
            <>
              <ul className="pages">
                <button className="Paged_numbers_page" >{page}</button>
              </ul>
            </>
            :
            <ul className="pages">
              <button className="Paged_numbers" onClick={() => setPage(1)} disabled={page === 1}>{" << "}</button>
              <button className="Paged_numbers" onClick={() => setPage(page - 1)} disabled={page === 1}>{" < "}</button>
              <button className="Paged_numbers" onClick={() => setPage(page - 1)} disabled={page === 1}>{page === 1 ? " " : page - 1} </button>
              <button className="Paged_numbers_page" >{page}</button>
              <button className="Paged_numbers" onClick={() => setPage(page + 1)} disabled={page === totalPages} >{page === totalPages ? " " : page + 1}</button>
              <button className="Paged_numbers" onClick={() => setPage(page + 1)} disabled={page === totalPages} >{" > "}</button>
              <button className="Paged_numbers" onClick={() => setPage(totalPages)} disabled={page === totalPages} >{" >> "}</button>
            </ul>
          }
        </div>
        : <div>
          <ul className="pages">
            <button className="Paged_numbers_page" >{" "}</button>
          </ul>
        </div>}
      <>
      <button className="btnRefresh" onClick={refresh} >Refresh</button>
      </>
      
      {dogs.count ?
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
                id={dog.id}               
              />
            ))}
          </div>
        </>
        :
        <div className="msgDogs">Dogs not found</div>
      }
    </div>
  );
}


export default Dogs;