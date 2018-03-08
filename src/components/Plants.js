import React, { Component } from 'react';


export default class Plants extends Component {
	componentWillMount(){
		this.props.getPlants()
	}
	// renderPlantList(){
	// 	this.state.plants.plants.map((plant)=>{
	// 		<li key={plant.name}>
	// 			{plant.name}
	// 			{plant.type}
	// 		</li>
	// 	})
	// }
	render(){
		console.log(this.props)

		return(

			<div id="plants" className="content">
				<h2>Plants</h2>
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