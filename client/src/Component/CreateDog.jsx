import React, { useState } from 'react';
import './createDog.css'

export default function CreateDog() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [heightMax, setHeightMax] = useState('');
  const [weight, setWeight] = useState('');
  const [weightMax, setWeightMax] = useState('');
  const [image, setImage] = useState('');
  const [lifeSpan, setLifespan] = useState('');
  const [temps, setTemps] = useState('');
  const [error, setError] = useState('');
  const [msg, setMSG] = useState('');
  

  function validateUser(value) {
    if(/\p{Sc}|\p{P}/.test(value)) {
      setError('Numbers and symbols not allowed');
    } else {
      setError('');
    }
    setName(value);
    setMSG("You have created a New Breed")
  }

  const onSubmit = (e)=>{
    e.preventDefault()
   console.log({name,weight,height,lifeSpan,temps})
    
}
  return (
      <div className='formDog'>
      <form onSubmit={onSubmit}>
        <label>Name</label>
          <div>
        <input className={error && 'danger'} name="name" value={name} placeholder="Name the breed" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <p className='error'><strong>{error}</strong></p>}
        </div>
          <label>Weigth Min</label>
        <div>
        <input name="wmin" value={weight}   onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <label>Weigth Max</label>
        <div> 
        <input name="wmax" value={weightMax}   onChange={(e) => setWeightMax(e.target.value)}/>
        </div>
        <label>Height Min</label>
        <div>
        <input name="hmin" value={height}  onChange={(e) => setHeight(e.target.value)}/>
        </div>
         <label>Height Max</label>
        <div>
        <input name="hmax" value={heightMax}  onChange={(e) => setHeightMax(e.target.value)}/>
        </div>
        <label>Life span</label>
        <div>
        <input name="lifespan" value={lifeSpan}   onChange={(e) => setLifespan(e.target.value)}/>
        </div>
        <label>Temperaments</label>
        <div>
        <input name="temps" value={temps}   onChange={(e) => setTemps(e.target.value)}/>
        </div>
        
        
        <input  disabled={error} className={error?"disabled":"enabled"} type="submit" />
      </form>
      </div>
    );
}