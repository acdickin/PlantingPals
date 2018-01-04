import {connect} from 'react-redux';
import Login from '../components/Login'
import Validation	 from '../components/Validation'

import {updateUser, clearUser} from '../actions'

const  mapStateToProps = state =>{
	return{
		user : state.user
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		updateUser: (user)=>dispatch(updateUser(user)),
		clearUser: (user)=>dispatch(clearUser(user))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Login, Validation)