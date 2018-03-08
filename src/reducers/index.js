import {combineReducers} from 'redux';
import {UPDATE_USER, CLEAR_USER, PLANTS_FETCH_DATA_SUCCESS, PLANTS_HAVE_ERROR, PLANTS_ARE_LOADING } from '../actions'
	
const UserDefault={
	firstname: {value:"", pristine:"true", valid:false},
  lastname: {value:"", pristine:"true", valid:false},	
  email: {value:"", pristine:"true", valid:false},
  pass: {value:"", pristine:"true", valid:false},
  pass2:{value:"", pristine:"true", valid:false}
}

const user = (state={user:UserDefault}, action)=>{
	switch(action.type){
		case UPDATE_USER:
			return ( state={...state, user: action.payload} )
		case CLEAR_USER:
			return( state={ ...state, user:UserDefault} )
		default:
			return state
	}
}

const plants = ( state={}, action)=>{
	switch (action.type){
		case PLANTS_FETCH_DATA_SUCCESS:
			return (state={...state, plants: action.payload })
		default:
			return state
	}
}


const plantsHaveError=(state = false, action)=> {
    switch (action.type) {
        case 'PLANTS_HAVE_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

const plantsAreLoading=(state = false, action)=> {
    switch (action.type) {
        case 'PLANTS_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

const defaultReducers = {
  user,
  plants,
  plantsHaveError,
  plantsAreLoading
}

const reducer = combineReducers({
	...defaultReducers,
})

export default reducer;