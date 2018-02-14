import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './styles/globals.scss';
import './styles/menu.scss';
import './styles/main.scss';
import './styles/login.scss';
import './styles/title.scss';
import './styles/welcome.scss';
import './styles/vaidation.scss';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<HashRouter>
      <App/>
  	</HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

