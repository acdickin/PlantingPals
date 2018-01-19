import {combineReducers} from 'redux';
import {UPDATE_USER, CLEAR_USER} from '../actions'

const UserDefault={
	username:{value:"", pristine:"true", valid:null},
  email: {value:"", pristine:"true", valid:null},
  pass: {value:"", pristine:"true", valid:null},
  pass2:{value:"", pristine:"true", valid:null},
  firstname: {value:"", pristine:"true", valid:null},
  lastname: {value:"", pristine:"true", valid:null}	
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