import { GET_ALL_DOGS, GET_DOG, GET_ALL_TEMPERAMENTS, REMOVE_DOG, SORT_DOGS, RATE_DOGS} from './actions.js'


const initialState = {
    dogs: [],
    temperaments: [],
    dog: {},
    orderDogs: null,
    rateDogs:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:

            return {
                ...state,
                dogs: action.payload,
            }
            
        case GET_DOG:

            return {
                ...state,
                dog: action.payload
            }
        case REMOVE_DOG:
            return {
                ...state,
                dog: action.payload
            }


        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,

            };
        case SORT_DOGS:

            let orderDogs = []
            if (action.payload === "least") {
                orderDogs = state.dogs.sort(function (a, b) {
                    if (Number(a.weight.split('-')[0]) < (Number(b.weight.split('-')[0]))) return -1;
                    if (Number(b.weight.split('-')[0]) < (Number(a.weight.split('-')[0]))) return 1;
                    return 0
                })
                return {
                    ...state,
                    dogs: orderDogs
                }
            }
            if (action.payload === "heavy") {
                orderDogs = state.dogs.sort(function (a, b) {
                    if (Number(a.weight.split('-')[0]) > (Number(b.weight.split('-')[0]))) return -1;
                    if (Number(b.weight.split('-')[0]) > (Number(a.weight.split('-')[0]))) return 1;
                    return 0
                })
                return {
                    ...state,
                    dogs: orderDogs
                }
            }
            case RATE_DOGS:               
            return {
                ...state,
                rateDogs: action.payload         
            };       
            
        default:
            return state
    }
};

export default rootReducer