import{GET_ALL_DOGS, GET_DOG,  GET_ALL_TEMPERAMENTS, REMOVE_DOG} from './actions.js'


const initialState = {
    dogs: [],    
    temperaments: [],
    dog: {},        
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            
            return {
                ...state,
                dogs: action.payload,                
            };
        case GET_DOG:
            
        return{
            ...state,
            dog: action.payload
        }
        case REMOVE_DOG:
            return{
                ...state,
                dog: action.payload
            }
     
            
                case GET_ALL_TEMPERAMENTS:
                    return {
                        ...state,
                        temperaments: action.payload,
                        
                    };            

            default:
                return state
    }
};

export default rootReducer