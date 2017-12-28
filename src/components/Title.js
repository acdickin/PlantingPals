import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'



const plantrG = require("../img/plantrG.svg");
// const plantrB = require("../img/plantrB.svg");



export default class Title extends Component {
	constructor(props) {
    super(props);
    this.state = {
 			title:"Plant Pals"
    }
  }
  

  render() {
  	
    return (
      <div className="Title">
				<NavLink exact to='/'><img src = {plantrG} alt ="plantr Logo"/>  </NavLink>
        <h1>{this.state.title}</h1>     
      </div>
    );
  }
}
