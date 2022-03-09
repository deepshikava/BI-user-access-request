import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import thunk from "redux-thunk";
// import registerServiceWorker, { callCache } from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Reducer Imports
import rootReducer from "./Reducers/index";

// Bootstarp Import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Font Awesome Import
import "../node_modules/font-awesome/css/font-awesome.min.css";

//Store Configuration
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
