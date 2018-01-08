import {combineReducers} from 'redux';
import {UPDATE_USER, CLEAR_USER} from '../actions'

const UserDefault={
	username:{value:"", pristine:"true"},
  email: {value:"", pristine:"true"},
  pass: {value:"", pristine:"true"},
  pass2:{value:"", pristine:"true"},
  firstname: {value:"", pristine:"true"},
  lastname: {value:"", pristine:"true"}	
}

const user = (state={user:UserDefault}, action)=>{
	switch(action.type){
		case UPDATE_USER:

			return ( state={...state, user: action.payload} )
		case CLEAR_USER:
			return( state={...state, user:UserDefault} )
		default:
			return state
	}
}

const defaultReducers = {
  user
}

const reducer = combineReducers({
	...defaultReducers,
})

export default reducer;