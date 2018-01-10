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
				console.log("index: ", index)
				console.log("type: ", type)
				console.log("max: ", max)
		  	if (type="req" && this.props.user.user[name].value===""){
					errors+="Is Required" 
				}
						
					// 	if (type= "uniq":){
					// 	errors+="Is Unique"
					//}
						
				if (type="same" && this.props.user.user.pass.value!==this.props.user.user.pass2.value){
					errors+="Password does not match"
				}
				if(index===max && errors!==""){
					console.log(errors)
						return <h2 key="errors"> {errors}</h2>	

				}
				if(index===max && errors===""){
					return <img key={name+"_"+ index+""} className="validation-btn" src={check} alt='checkmark' />	
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

