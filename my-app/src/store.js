import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducer/mainReducer";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__|| compose;
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;