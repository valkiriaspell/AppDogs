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
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [heightMax, setHmax] = useState("");
  const [weight, setWeight] = useState("");
  const [weightMax, setWmax] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [image, setImage] = useState("");
  const [temps, setTemps] = useState([]);

  //////////  ---->    Store states    <------ //////////////
  const { temperaments } = useSelector(state => state)
  const dispatch = useDispatch()


  //////////  ---->    HandleTemps    <------ //////////////
  function tempsDogs(e) {
    if (!temps.includes(e.target.value)) {
      setTemps([...temps, e.target.value])
      console.log(temps, "AQUI TEMPS")
      if (temps.length > 4) {
        setErrorTemps("Limit of temperaments exceeded")
      }
    }
  }

  function removeTemp(e) {
    var finded = temps.findIndex(t => t === e.target.name)
    setTemps(temps.filter((t, index) => index !== finded))
    console.log(temps, "hay menos de 4 temps")
    if (temps.length <= 6) {
      setErrorTemps("")
    }

  }




  //////////////// ---->    VALIDATIONS    <------ /////////////

  function validation(e) {

    switch (true) {

      case e.target.name === "name":
        if (!/^[a-zA-Z ]*$/.test(e.target.value)) {
          setName(e.target.value);
          setErrorName("Only A-Z letters allowed")
        } else {
          setName(e.target.value);
          setErrorName("")
        }
        break;

      case e.target.name === "weight":
        if (e.target.value !== "" && e.target.value < 0) {
          setWeight(e.target.value);
          setErrorWmin("It can't be negative")
        } else if (Number(e.target.value) > 30) {
          setWeight(e.target.value);
          setErrorWmin("Not allowed")
        } else {
          setWeight(e.target.value);
          setErrorWmin("");
        }
        break;

      case e.target.name === "weightMax":
        
        if (weight) {
          setWmax(e.target.value);
          if (Number(e.target.value) < Number(weight)) {
            setErrorWmax("Maximum weight must be greater than minimum")
          } else if (Number(e.target.value) > 99) {
            setWmax(e.target.value);
            setErrorWmax("Not allowed")
          } else {
            setWmax(e.target.value);
            setErrorWmax("")
          }
        } else {
          setErrorWmin("Set minimum first")
        }
        break;

      case e.target.name === "height":
        if (e.target.value !== "" && e.target.value < 0 || e.target.value.includes(".")) {
          setHeight(e.target.value);
          setErrorHmin("It can't be negative")
        } else if (Number(e.target.value) > 99) {
          setHeight(e.target.value);
          setErrorHmin("Not allowed")
        } else {
          setHeight(e.target.value);
          setErrorHmin("");
        }
        break;

      case e.target.name === "heightMax":
        if (height) {
          setHmax(e.target.value);
          if (Number(e.target.value) < Number(height)) {            
            setErrorHmax("Maximum height must be greater than minimum")
          } else if (Number(e.target.value) > 140) {
            setHmax(e.target.value);
            setErrorHmax("Not allowed")
          } else {
            setHmax(e.target.value);
            setErrorHmax("");
          }
        } else {
          setErrorHmin("Set minimum first")
        }
        break;

      case e.target.name === "lifeSpan":
        if (e.target.value !== "" && e.target.value < 0) {
          setLifeSpan(e.target.value);
          setErrorLifeSpan("It can't be negative")
        } else {
          setLifeSpan(e.target.value);
          setErrorLifeSpan("")
        }
        break;
      case e.target.name === "image":
        if (e.target.value !== "" && !e.target.value.includes(".")) {
          setImage(e.target.value);
          setErrorImage("Input a valid URL please")
        } else {
          setImage(e.target.value);
          setErrorImage("")
        }
        break;

      default:
        console.log("default");
    }


  }

  //////////  ---->    on Submit   <------ //////////////
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createDog({
      name: name,
      weight: weight.concat(' - ', weightMax),
      height: height.concat(' - ', heightMax),
      life_span: lifeSpan,
      image: image,
      temperament: temps
    }))
    console.log(weight.concat(' - ', weightMax), "weight sended");
    setMSG("You have created a New Breed")
  }


  //////////  ---->    Render    <------ //////////////

  return (
    <div className='formDog'>
      <form onSubmit={onSubmit}>

        <div className='formName'>
          <label>Name:</label>
          <input className={errorName !== "" ? 'danger' : "lifeSpan"} name="name" value={name} placeholder="Name the breed" onChange={(e) => validation(e)} />

          {!name ? null : <p className='error'>{errorName}</p>}
        </div>

        <label>Weight:</label>
        <div className='formNumbers'>
          <label>Min</label>
          <input className={weight !== "" && errorWmin !== "" ? 'miniInput danger' : "miniInput"} type="number" name="weight" value={weight} onChange={(e) => validation(e)} />
          <label>Max</label>
          <input className={errorWmin !== "" || errorWmax !== "" ? 'miniInput danger' : "miniInput"} type="number" name="weightMax" value={weightMax} onChange={(e) => validation(e)} />
          <div>{errorWmin !== "" ? <p className='error'>{errorWmin}</p> : null}
            {weightMax !== "" && errorWmax !== "" ? <p className='error'>{errorWmax}</p> : null}
          </div>
        </div>

        <label>Height:  </label>
        <div className='formNumbers'>
          <label>Min</label>
          <input className='miniInput' name="height" value={height} type="number" onChange={(e) => validation(e)} />
          <label>Max</label>
          <input className='miniInput' name="heightMax" value={heightMax} type="number" onChange={(e) => validation(e)} />
          {errorHmin !== "" ? <p className='error'>{errorHmin}</p> : null}
          {heightMax !== "" && errorHmax !== "" ? <p className='error'>{errorHmax}</p> : null}
        </div>

        <div className='lifespan'>
          <label>Life span:</label>
          <input name="lifeSpan" type="number" value={lifeSpan} onChange={(e) => validation(e)} />
        {errorLifeSpan !== "" ? <p className='error'>{errorLifeSpan}</p> : null}
        </div>

        <div className='formImage'>
          <label>Image:</label>
          <input name="image" placeholder='Insert URL as source of an image' value={image} onChange={(e) => validation(e)} />
          {errorImage !== "" ? <p className='error'>{errorImage}</p> : null}
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
        {errorTemps !== "" ? <p className='error'>{errorTemps}</p> : null}

        <div className='selectionPart'>
          {temps ? temps.map((t, index) => (
            <button className="tempChoosed" key={index} name={t} onClick={(e) => removeTemp(e)}>{t} X</button>
          )) : "nothing yet"}<br></br>
        </div>

        <div className='submit'>
          <input disabled={errorName || errorWmin || errorWmax || errorHmin || errorHmax || errorLifeSpan || errorImage || errorTemps} className={errorName || errorWmin || errorWmax || errorHmin || errorHmax || errorLifeSpan || errorImage || errorTemps ? "disabled" : "enabled"} type="submit" />
        </div>
        <div>
          {msg ? <p>{msg}</p> : null}
        </div>
      </form>
    </div>
  );
}