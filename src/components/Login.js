import React, { Component } from 'react';

import {updateUser, clearUser} from '../actions'
import Validation from './Validation';

export default class Login extends Component {
	
 	formData=[	
		{
			title:"Username",
			type:"text", 
			name:"username",
			placeholder:"Add Username",
			validation:"req uniq"
		},
		{
			title:"E-mail",
			type:"text",
		  name:"email",
		  placeholder:"Add E-mail",
			validation:"req uniq"
		},
		{
			title:"Password",
		  type:"password",
		  name:"pass",
		  placeholder:"Enter password",
			validation:"req pass"
		},
		{
			title:"Password2",
			type:"password",
		  name:"pass2" ,
		  placeholder:"Re-enter password",
			validation:"req pass same"
		},
		{
			title:"First Name",
		  type:"text",
		  name:"firstname",
		  placeholder:"Add First Name",
			validation:"req"
		},
		{
			title:"Last Name",
		  type:"text",
		  name:"lastname",
		  placeholder:"Add Last Name",
			validation:"req"
		}
	]

	constructor(props) {
    super(props);
    this.state = {
    	user:{
      	username:"",
	      email: "",
	      pass: "",
	      pass2:"",
	      firstname: "",
	      lastname: ""
      }
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    updateUser(newState);
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
  				<input key={index} name={form.name} type={form.type} placeholder={form.placeholder} onChange={this.handleChange}  />  
  			  
  			 <Validation name={form.name} type={form.validation} />
  			</div>
  		)
  	})
  	return forms;
  }
  getvalue(value){
  	return this.state.value
	}

	render() {
		console.log(this.props)
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