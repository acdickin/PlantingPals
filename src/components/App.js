import React, { Component } from 'react';

import Menu from './Menu';
import Login from'../containers/user';
import Title from'./Title';
import { Route } from 'react-router-dom';

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
        <Route exact path="/" component={Login}/>
        <Menu/>
      </div>
    );
  }
}

export default App;
// <Route path="/login" component={Login} />