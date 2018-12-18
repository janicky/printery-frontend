import React from 'react'
import ReactDOM from 'react-dom'
import Application from './components/Application'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>, 
  document.getElementById('root')
);


serviceWorker.unregister();
