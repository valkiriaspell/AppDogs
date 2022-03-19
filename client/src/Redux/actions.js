import axios from 'axios'
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const REMOVE_DOG = 'REMOVE_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const SORT_DOGS = 'SORT_DOG'
export const RATE_DOGS = 'RATE_DOG'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'


export const sortDogs = (order) => { 
    console.log(order, "aqui llega order a la action")    
    return ({type: SORT_DOGS, payload: order})
}
export const rateDogs = (dog) => { 
    console.log(dog, "aqui llega dog id with rating")  //{id: , votes: }  
    return ({type: RATE_DOGS, payload: dog})
}

export const getAllDogs = (name, order, source,temps) => async dispatch => {
    try{           
            const res = await axios.get(`https://dogs-catalog.herokuapp.com/dogs?order=${order?order:""}&name=${name?name:""}&source=${source}&temps=${temps}`)
            console.log("perros filtrados")            
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })
      
        
    }catch(e) {
        console.log(e)        
    }
}


export const getDogById = (id)=> async (dispatch)=>{
        try {
            const result = await axios.get(`https://dogs-catalog.herokuapp.com/dog/${id}`)
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
        let res = await axios.get('https://dogs-catalog.herokuapp.com/temperament')
        res = res.data.sort((a,b) =>{
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        })
        console.log("van temps al store")
            return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: res })
    }catch(e) {
        console.log(e)
    }
}

export const createDog = (dog)=> {
    return ()=>{
        axios.post(`https://dogs-catalog.herokuapp.com/dog`,dog)      
        .catch((err)=>{
            console.log(err)
        })
    }
}





