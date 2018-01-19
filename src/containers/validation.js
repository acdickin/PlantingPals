import {connect} from 'react-redux';
import Validation	 from '../components/Validation'
import {updateUser} from '../actions'

const  mapStateToProps = state =>{
	return{
		user : state.user
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		updateUser: (user)=>dispatch(updateUser(user))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Validation);