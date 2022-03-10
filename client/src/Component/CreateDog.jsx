import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog } from '../Redux/actions';
import './createDog.css'

export default function CreateDog() {
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
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



  function validation(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setMSG("You have created a New Breed")
    console.log(form, "aqui form")
  }

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
    console.log("se mando")
  }




  return (
    <div className='formDog'>
      <form onSubmit={onSubmit}>
        <div className='formName'>
          <label>Name:</label>
          <input className={error && 'danger'} name="name" value={form.name} placeholder="Name the breed" onChange={(e) => validation(e)} />
          {!error ? null : <p className='error'><strong>{error}</strong></p>}
        </div>
        <label>Weight:</label>
        <div className='formNumbers'>
          <label>Min</label>
          <input className='miniInput' name="weight" value={form.weight} onChange={(e) => validation(e)} />
          <label>Max</label>
          <input className='miniInput' name="weightMax" value={form.weightMax} onChange={(e) => validation(e)} />
        </div>
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
          <input name="image" value={form.image} onChange={(e) => validation(e)} />
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
          <input disabled={error} className={error ? "disabled" : "enabled"} type="submit" />
        </div>
      </form>
    </div>
  );
}