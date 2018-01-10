import {connect} from 'react-redux';
import Validation	 from '../components/Validation'

const  mapStateToProps = state =>{
	return{
		user : state.user
	}
}

export default connect (mapStateToProps)(Validation);