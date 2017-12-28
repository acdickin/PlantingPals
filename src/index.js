import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

import './styles/menu.scss';
import './styles/main.scss';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
      <App/>
  	</BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
