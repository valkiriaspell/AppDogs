import React, { useState } from 'react';
import './createDog.css'

export default function CreateDog() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }
  return (
      <div className='formDog'>
      <form>
        <label>Name</label>
          <div>
        <input className={error && 'danger'} name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        </div>
          <label>Weigth Min</label>
        <div>
        <input name="wmin" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <label>Weigth Max</label>
        <div> 
        <input name="wmax" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <label>Height Min</label>
        <div>
        <input name="hmin" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
         <label>Height Max</label>
        <div>
        <input name="hmax" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <label>Life span</label>
        <div>
        <input name="lifespan" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <label>Temperaments</label>
        <div>
        <input name="temps" value={password} placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        
        <input type="submit" />
      </form>
      </div>
    );
}