import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import "./index.css";
import EventsIndex from "./reducers/components/events_index";
import reportWebVitals from "./reportWebVitals";
// import registerServiceWorker from "./registerServiceWorker";
console.log("index.js1");
const store = createStore(reducer, applyMiddleware(thunk));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>
);
// registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
