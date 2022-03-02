import axios from 'axios'
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const UNMOUNT_ALL_DOGS = 'UNMOUNT_ALL_DOGS'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const ORDER_FILTER = 'ORDER_FILTER'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'

export const getAllDogs = name => async dispatch => {
    try{
        if(name) {
             const res = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })
            }
        const res2 = await axios.get('http://localhost:3001/dogs')
        return dispatch({ type: GET_ALL_DOGS, payload: res2.data })
    }catch(e) {
        console.log(e)
    }
}