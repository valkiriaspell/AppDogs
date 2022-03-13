import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog } from '../Redux/actions';
import './createDog.css'

export default function CreateDog() {
  //////////  ---->    Local states errors   <------ //////////////
  const [errorName, setErrorName] = useState("")
  const [errorWmin, setErrorWmin] = useState("")
  const [errorWmax, setErrorWmax] = useState("")
  const [errorHmin, setErrorHmin] = useState("")
  const [errorHmax, setErrorHmax] = useState("")
  const [errorLifeSpan, setErrorLifeSpan] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [errorTemps, setErrorTemps] = useState("")

   //////////  ---->    Local states data   <------ //////////////
  const [msg, setMSG] = useState('');
  const [form, setForm] = useState({
    name: "",
    height: "",
    heightMax: "",
    weight: "",
    weightMax: "",
    lifeSpan: "",
    image: "",
  })
  const [temps, setTemps] = useState([]);

  //////////  ---->    Store states    <------ //////////////
  const { temperaments } = useSelector(state => state)
  const dispatch = useDispatch()



  function tempsDogs(e) {
    if (!temps.includes(e.target.value)) {
      setTemps([...temps, e.target.value])
      console.log(temps, "AQUI TEMPS")
    }
  }

  function removeTemp(e) {
    var finded = temps.findIndex(t => t === e.target.name)
    setTemps(temps.filter((t, index) => index !== finded))

  }

  //////////////// ---->    VALIDATIONS    <------ /////////////

  function validation(e) {
    console.log(e.target.name)
    switch (true) {
      case e.target.name === "name":
        if (!/^[a-zA-Z ]*$/.test(e.target.value)) {
          setErrorName("Only A-Z letters allowed")
          
        } else {
          setErrorName("")
          setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
          console.log(form, "aqui form")
        }
        case e.target.name === "weight":
        if (!/^-?\d+\.?\d*$/.test(e.target.value)) {
          setErrorWmin("Only NUMBERS allowed")
          
        } else {
          setErrorWmin("")     
          setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
        }
        case e.target.name === "weightMax":
          if (!/^-?\d+\.?\d*$/.test(e.target.value)) {
            setErrorWmax("Only NUMBERS allowed")
            
          } else {
            setErrorWmax("")     
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          }    
    }

  }

  //////////  ---->    on Submit   <------ //////////////
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createDog({
      name: form.name,
      weight: form.weight.concat(form.weightMax),
      height: form.weight.concat(form.heightMax),
      life_span: form.lifeSpan,
      image: form.image,
      temperament: temps
    }))
    console.log("new dog created");
    setMSG("You have created a New Breed")
  }


  //////////  ---->    Render    <------ //////////////

  return (
    <div className='formDog'>
      <form onSubmit={onSubmit}>
        <div className='formName'>
          <label>Name:</label>
          <input className={errorName !== "" ? 'danger' : "lifeSpan"} name="name" value={form.name} placeholder="Name the breed" onChange={(e) => validation(e)} />
          {!errorName ? null : <p className='error'>{errorName}</p>}
        </div>
        <label>Weight:</label>
        <div className='formNumbers'>
          <label>Min</label>
          <input className={errorWmin !== "" || errorWmax !== "" ? 'miniInput danger' : "miniInput"} name="weight" value={form.weight} onChange={(e) => validation(e)} />
          <label>Max</label>
          <input className='miniInput' name="weightMax" value={form.weightMax} onChange={(e) => validation(e)} />
        </div>
        {!errorWmin ? null : <p className='error'>{errorWmin}</p>}
        <label>Height:  </label>
        <div className='formNumbers'>
          <label>Min</label>
          <input className='miniInput' name="height" value={form.height} onChange={(e) => validation(e)} />
          <label>Max</label>
          <input className='miniInput' name="heightMax" value={form.heightMax} onChange={(e) => validation(e)} />
        </div>
        <div className='lifespan'>
          <label>Life span:</label>
          <input name="lifeSpan" value={form.lifeSpan} onChange={(e) => validation(e)} />
        </div>
        <div className='formImage'>
          <label>Image:</label>
          <input name="image" placeholder='Insert URL as source of an image' value={form.image} onChange={(e) => validation(e)} />
        </div>
        <label>Temperaments</label>
        <div>
          <select onChange={tempsDogs} name="" id="">
            {
              temperaments.length > 0 &&
              temperaments.map((e, index) => (
                <option key={index} value={e.name}> {e.name} </option>
              )
              )
            }
          </select>
        </div>

        <div className='selectionPart'>
          {temps ? temps.map((t, index) => (
            <button className="tempChoosed" key={index} name={t} onClick={(e) => removeTemp(e)}>{t} X</button>
          )) : "nothing yet"}<br></br>
        </div>

        <div className='submit'>
          <input disabled={errorName} className={errorName ? "disabled" : "enabled"} type="submit" />
        </div>
        <div>
          {msg ? <p>{msg}</p> : null}
        </div>
      </form>
    </div>
  );
}