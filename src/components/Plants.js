import React, { Component } from 'react';


export default class Plants extends Component {
	constructor() {
    super();
		this.state=({
			selected: "Vegetable"
		})
		this.handleClick =this.handleClick.bind(this)
	}
	handleClick(e){
		console.log( e.target.id)
		this.setState({
			selected: e.target.id
		})
	}
	handleSelect(e){
		e.preventDefault();
		console.log(e.target.id)
		window.location.hash = window.location.hash +"/"+e.target.id
	}
	createDisplay(planttype){
		const plants =this.props.plants
		const arry =plants.filter(plant=>plant.type===planttype.toString())
		const display=arry.map((item)=>
			<li key={item._id} id ={item.name} onClick={this.handleSelect}>
				{item.name}
			</li>
		)
		return <ul className="{planttype}list"> {display} </ul>
	}

	renderPlantList(){
		const selected=this.state.selected
		switch(selected){
			case "Fruit":
				return this.createDisplay("fruit")
			case "Herb":
				return this.createDisplay("herb")
			default:
				return this.createDisplay("vegetable")
		}
	}

	render(){
		return(
			<div id="plants" className="content">
				<button id="Vegetable" onClick={this.handleClick}>Vegetable</button>
				<button id="Fruit" onClick={this.handleClick}>Fruit</button>
				<button id="Herb" onClick={this.handleClick}>Herb</button>
				{this.renderPlantList()}
			</div>
		)
	}
}
	// if (this.state.hasErrored) {
	//    return <p>Sorry! There was an error loading the items</p>;
	//  }
	//  if (this.state.isLoading) {
	//      return <p>Loading…</p>;
	//  }
	// 	<ul>
	// 		{this.renderPlantList}
	// 	</ul>
