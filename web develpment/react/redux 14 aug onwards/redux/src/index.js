import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./redux";

// react-redux is used to link react with redux
// Provider -> component from react-redux (yaa humara react app koo redux kaa sath link karna kaa kam ata hai)
import { Provider } from "react-redux";
import { createStore } from "redux";

 
let store = createStore(rootReducer);

ReactDOM.render(
  // to attach redux with react we need provider
  // And store daa dia provider mai & accessible to full react app 
  <Provider store={store}> 
  <App />
  </Provider>,
  document.getElementById('root')
);

