import {connect} from 'react-redux';
import MyGarden from '../components/MyGarden'

import {} from '../actions'

const  mapStateToProps = state =>{
	return{
		plants:state.plants.plants,
		user:state.user.user
	}
}

const mapDispatchToProps = dispatch =>{
	return{

	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);
