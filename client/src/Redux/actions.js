import axios from 'axios'
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const REMOVE_DOG = 'REMOVE_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'



export const getAllDogs = (name, order, source,temps) => async dispatch => {
    try{           
            const res = await axios.get(`http://localhost:3001/dogs?order=${order?order:""}&name=${name?name:""}&source=${source}&temps=${temps}`)
            console.log("perros filtrados")            
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })
      
        
    }catch(e) {
        console.log(e)        
    }
}


export const getDogById = (id)=> async (dispatch)=>{
        try {
            const result = await axios.get(`http://localhost:3001/dog/${id}`)
            return dispatch({
                type: GET_DOG,
                payload: result.data
            })

        } catch (error) {
            console.log(error)
        }
    }

export const removeDog = ()=> {
        return{
            type: REMOVE_DOG,
            payload: {}
        }
    }

export const getAllTemperaments = () => async dispatch => {
    try{
        const res = await axios.get('http://localhost:3001/temperament')
        console.log("van temps al store")
        return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: res.data })
    }catch(e) {
        console.log(e)
    }
}

export const createDog = (dog)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/dog`,dog)
        .then(response =>{
            return dispatch({
                type: CREATE_DOG
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

 


