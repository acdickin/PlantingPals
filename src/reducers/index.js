import {combineReducers} from 'redux';
import {UPDATE_USER, CLEAR_USER} from '../actions'

const defaultReducers = {
  user
}

const reducer = combineReducers({
	...defaultReducers,
})

const UserDefault={
	user:{
		username:"",
		email: "",
		pass: "",
		pass2:"",
		firstname: "",
		lastname: ""
	}
}

const user = (state=UserDefault, action)=>{
	switch(action.type){
		case UPDATE_USER:
			return 
				state={...state, user: action.setUser}
		case CLEAR_USER:
			return
				state={...state, user:UserDefault};
		default:
			return state
	}
}


export default reducer;