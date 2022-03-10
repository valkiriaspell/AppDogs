import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './createDog.css'

export default function CreateDog() {
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [msg, setMSG] = useState('');
  const [form,setForm] = useState({
    name:"", 
    height:0,
    heightMax:0, 
    weight:0, 
    weightMax:0, 
    lifeSpan:0,     
  })
  const [temps, setTemps] = useState([]);
  
  
  const {temperaments} = useSelector(state => state)
  
  

  function tempsDogs (e) {    
    setTemps([...temps,e.target.value])    
    console.log(temps, "AQUI TEMPS"  )        
  }

  function removeTemp (e) {    
    var finded = temps.findIndex(t => t === e.target.name)  
    setTemps(temps.filter((t,index)=> index !== finded))    
         
  }

  
    
  function validation(e) {
    if(/\p{Sc}|\p{P}/.test(e.target.value)) {
      setError('Numbers and symbols not allowed');
    } else {
      setError('Nose');
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setMSG("You have created a New Breed")
  }

  const onSubmit = (e)=>{
    e.preventDefault()
   console.log("nada")      
}




  return (
      <div className='formDog'>
      <form onSubmit={onSubmit}>
        <label>Name</label>
          <div>
        <input className={error && 'danger'} name="name" value={form.name} placeholder="Name the breed" onChange={(e) => validation(e)}/>
        {!error ? null : <p className='error'><strong>{error}</strong></p>}
        </div>
          <label>Weigth Min</label><label>Weigth Max</label>
        <div>
        <input name="weight" value={form.weight}   onChange={(e) => validation(e)}/>       
        <input name="weightMax" value={form.weightMax}   onChange={(e) => validation(e)}/>
        </div>
        <label>Height Min</label>
        <div>
        <input name="height" value={form.height}  onChange={(e) => validation(e)}/>
        </div>
         <label>Height Max</label>
        <div>
        <input name="heightMax" value={form.heightMax}  onChange={(e) => validation(e)}/>
        </div>
        <label>Life span</label>
        <div>
        <input name="lifespan" value={form.lifeSpan}   onChange={(e) => validation(e)}/>
        </div>
        <label>Temperaments</label>
        <div>                 
          <select onChange={tempsDogs} placeholder="created" name="" id="">
              {
                temperaments.length > 0 &&
                temperaments.map((e,index) =>(
                    <option   key={index} value={e.name}> {e.name} </option>
                         )
                     )           
              }                     
                    </select>                    
                </div>
                <div className='selectionPart'>
                Selected:<br></br>
                  {temps?temps.map((t,index)=> (
                    <button className="tempChoosed"key={index} name={t} onClick={(e) => removeTemp(e)}>{t} X</button>
                  )):"nothing yet"}<br></br>


                </div>
                
        
        
        <input  disabled={error} className={error?"disabled":"enabled"} type="submit" />
      </form>
      </div>
    );
}