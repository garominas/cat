import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import Reducers from './reducers/index.js';

const middlewere = [thunk];

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middlewere)));

export default store;