import React, { Component } from 'react';

const check =require('../img/check.png')
// const x =require('../img/xmark.png')


export default class Validation extends Component {
	constructor(props) {
  	super(props);
		
	}


 	renderErrors(){
	  const types=this.props.type.split(' ')
	  const name=this.props.name
	  const validation=types.map((type)=>{
			if(!this.props.user.user[name].pristine){
		  	switch(type){
					case "req":
						return <h4 key={name+"_"+ type}>Is Required</h4>
						
					case "uniq":
						return <h4 key={name+"_"+ type}>Is Unique</h4>
						
					case "same":
						return <h4 key={name+"_"+ type}>Password does not match</h4>
		
					default:
						return <img key={name+"_"+ type} className="validation-btn" src={check} alt='checkmark' />	
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

	// case "req":
	// 	return (
	// 		<div>
	// 			<img src={x} alt='X mark' /> 
	// 			<h4>Is Required</h4>
	// 		</div>
	// 	)
	// case "uniq":
	// 	return  (
	// 		<div>
	// 			<img src={x} alt='X mark' /> 
	// 			<h4>Is Unique</h4>
	// 		</div>
	// 	)
	// case "same":
	// 	return (
	// 		<div>
	// 			<img src={x} alt='X mark' />  
	// 			<h4>Password does not match</h4>
	// 		</div>
	// 	)
	// default:
	// 	return (
	// 		<div>
	// 			<img src={check} alt='checkmark' />
	// 		</div>
	// 	)