import {connect} from 'react-redux';
import Validation	 from '../components/Validation'

import {updateUser, clearUser} from '../actions'

const  mapStateToProps = state =>{
	return{
		user : state.user
	}
}

export default connect (mapStateToProps)(Validation);