import axios from 'axios'
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const REMOVE_DOG = 'REMOVE_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const UNMOUNT_ALL_DOGS = 'UNMOUNT_ALL_DOGS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const ORDER_FILTER = 'ORDER_FILTER'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'

export const getAllDogs = ({page, order, name}) => async dispatch => {
    try{     
        if (page && order && name) {

            const res = await axios.get(`http://localhost:3001/dogs?page=${page?page:1}&order=${order?order:""}&name=${name?name:""}`)
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })        
        }
        if (page) {

            const res = await axios.get(`http://localhost:3001/dogs?page=${page}`)
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })        
        }

        const res = await axios.get(`http://localhost:3001/dogs`)
        return dispatch({ type: GET_ALL_DOGS, payload: res.data })    
        
    }catch(e) {
        console.log(e)
    }
}

// export const setPage = (page)=>{
//     return{
//         type: SET_PAGE,
//         payload: page
//     }
// }
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
        const res = await axios.get('/temperaments')
        return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: res.data })
    }catch(e) {
        console.log(e)
    }
}