import React, { Component } from 'react';


export default class MyGarden extends Component {
	this.state=({
		Loaded:false
	})

	createGrid(height, width, plants){
		let value = '';
		let grid = [...Array(height)].map(e => Array(width).fill(value));
		plants.foreach((plant)=>{
			grid[plant.row,plant.col]=plant.name;
		})
		return grid;
	}

	createRow(r, col, grid){
		for (c=0;c<col;c++){
			let value=grid[row][c];
			return(
				<div className={value}>{value}</div>
			)
		}
	}
	renderGarden(){
			let grid =this.createGrid(height, width, plants){}
			let row =height;
			let col=width;
			for (r=0;r<row;r++){
			return(
				<div className="row">
					{this.createRow(r, col, grid)}
				</div>
			)
		}
	}

	loadPlots(){
		const plots = this.props.plot;
		let garden=	plots.map((plot)=>{
			<div className={plot.name}>
				{this.renderGarden(plot.plotHeight, plot.plotWidth, plot.plants)};
			</div>
		})
		return garden
	}

	render(){
		console.log(this.props);
		// if(this.loaded===false){
		// 	<div id="myGarden" className="content">
		// 		<h2>Welcome to your garden {this.props.user.username.value} </h2>
		// 		<h3> Loading your Garden</h3>
		//
		// 	</div>
		// }
		// else{
			return(
				<div id="myGarden" className="content">
					<h2>Welcome to your garden {this.props.user.username} </h2>
					{this.renderPlots}

				</div>
			)
		//}
	}
}
