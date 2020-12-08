import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./components/App";
import store from "./store";

import reportWebVitals from "./reportWebVitals";

const element = (
    <React.StrictMode>
        <Router basename="/">
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
