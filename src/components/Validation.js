import React, { Component } from 'react';

const check =require('../img/check.png')
// const x =require('../img/xmark.png')


export default class Validation extends Component {
 	renderErrors(){
	  const types=this.props.type.split(' ')
	  const name=this.props.name
	  const max= types.length -1;
	  
	  const validation=types.map((type, index)=>{
			if(!this.props.user.user[name].pristine){
		  	let errors="";
		  	if(index===0){
		  		errors="";
		  	}
		  	if (type==="req" && this.props.user.user[name].value===""){
					errors+="Is Required" 
				}
				// 	if (type= "uniq":){
				// 	errors+="Is Unique"
				//}
				if (type==="same" && this.props.user.user.pass.value!==this.props.user.user.pass2.value){
					errors+="Password does not match"
				}
				if(index===max && errors!==""){
					const{updateUser}=this.props;
			    let newState = {};
			    newState[ this.props.user.user[name].name] ={value: this.props.user.user[name].value, pristine:this.props.user.user[name].pristine,valid:true}    

			 		this.setState(newState,()=>{
			 			updateUser(this.state) 	
			 		})
					return <h2 key="errors"> {errors}</h2>	
				}
				if(index===max && errors===""){
					const{updateUser}=this.props;
			    let newState = {};
			    newState[ this.props.user.user[name].name] ={value: this.props.user.user[name].name, pristine:this.props.user.user[name].pristine,valid:true}    

			 		this.setState(newState,()=>{
			 			updateUser(this.state) 	
			 		})				
				}
				
	  	}
	  })
	  return validation
  }

 	render(){
    return (
      <div>
      	
      	{this.renderErrors()}
      	
      </div>
    )
  }
}

