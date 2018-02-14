import {connect} from 'react-redux';
import Login from '../components/Login'

import {getPlants} from '../actions'

const  mapStateToProps = state =>{
	return{
		plants : state.user
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		getPlants: (user)=>dispatch(getPlants(user))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);
