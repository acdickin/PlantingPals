import React, { Component } from 'react';

import Validation from '../containers/validation';

export default class Login extends Component {
	
 	formData=[	
		{
			title:"Username",
			type:"text", 
			name:"username",
			placeholder:"Add Username",
			validation:"req uniq",
			pristine:true
		},
		{
			title:"E-mail",
			type:"text",
		  name:"email",
		  placeholder:"Add E-mail",
			validation:"req uniq",
			pristine:true
		},
		{
			title:"Password",
		  type:"password",
		  name:"pass",
		  placeholder:"Enter password",
			validation:"req",
			pristine:true
		},
		{
			title:"Password2",
			type:"password",
		  name:"pass2" ,
		  placeholder:"Re-enter password",
			validation:"req same",
			pristine:true
		},
		{
			title:"First Name",
		  type:"text",
		  name:"firstname",
		  placeholder:"Add First Name",
			validation:"req",
			pristine:true
		},
		{
			title:"Last Name",
		  type:"text",
		  name:"lastname",
		  placeholder:"Add Last Name",
			validation:"req",
			pristine:true
		}
	]

	constructor(props) {
    super(props);
    this.state = {
	    username:{value:"", pristine:true},
	    email: {value:"", pristine:true},
	    pass: {value:"",  pristine:true},
	    pass2:{value:"", pristine:true},
	    firstname: {value:"", pristine:true},
	    lastname: {value:"", pristine:true},	
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e) {
		const{updateUser}=this.props;
    let newState = {};
    newState[e.target.name] ={value: e.target.value, pristine:false}    

 		this.setState(newState,()=>{
 			updateUser(this.state) 	
 		})
 			
  }
  
  handleSubmit(e){
   	alert("A new user was Created for you"+ this.state.firstname);
   	this.setState({}); 
   	e.preventDefault();
  }

  renderForm(formData){
  	const forms=this.formData.map((form,index)=>{
  		return(
  			<div key={form.title} id={form.name}>
  				<h2>{form.title}</h2>
  				<input key={index} name={form.name}  type={form.type} placeholder={form.placeholder} onChange={this.handleChange}  />  
  			  
  			 <Validation name={form.name} type={form.validation} user={this.state} />
  			</div>
  		)
  	})
  	return forms;
  }
  getvalue(value){
  	return this.state.value
	}

	render() {

		return (
			<div id="login">
				<form method="post" action="/user/add">
				
				 	{this.renderForm(this.formData)}
				
					<input type="submit" value="submit"/>
				
				</form>
			</div>
		);
	}
}