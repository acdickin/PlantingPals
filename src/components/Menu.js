import React,{Component} from 'react';

import { NavLink } from 'react-router-dom'


// const plantrG = require("../img/plantrG.svg");
// const plantrB = require("../img/plantrB.svg");

 // <NavLink exact to='/'><img src = {plantrG} alt ="plantr Logo"/>  </NavLink>
export default class Menu extends Component {

	render() {
		return (
		
      <div id="menubox">  
        <div id="menu">
          <div className="navbox">

          	<NavLink to ='/' activeClassName="active">My Garden</NavLink>
          </div>
	        <div className="navbox">
	        
	        	<NavLink to ='/' activeClassName="active">Plants</NavLink>
	        </div>
	        <div className="navbox">
	        
	        	<NavLink to='/' activeClassName="active">About</NavLink>
	        </div>
	        <div className="navbox">
	        
	        	<NavLink to='/' activeClassName="active">Resouces</NavLink>
	        </div>
	        <div className="navbox">
	        
	        	<NavLink to='/' activeClassName="active">Contact Us</NavLink>
	        </div>
        </div>
      </div>
 		);
	}
}



