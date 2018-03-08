import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Login from'../containers/login';
import Title from'./Title';

import Plants from'../containers/plants';
import MyGarden from'./MyGarden';
import About from'./About';

import Welcome from'./Welcome';


class App extends Component {
  constructor() {
    super();
		this.state=({
			Loggedin:false
		})
	}
  render() {
    return (
      <div className="App">
        <Title/>
        <Route exact path ="/" component ={Welcome} />
        <Route path ="/welcome" component ={Welcome} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/plants" component={Plants}/>
        <Route expact path="/about" component={About}/>
        <Route exact path="/my_garden" component ={MyGarden}/>
        <Menu/>
      </div>
    );
  }
}

export default App;
// <Route path="/login" component={Login} />