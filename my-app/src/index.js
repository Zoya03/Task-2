import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App.js'
import { Provider } from 'react-redux';
import store from "./store"


store.subscribe(()=>{
  console.log('current state', store.getState());
});

function Application() {
  
  
  return (
   <>
   <Provider store={store}>
    <BrowserRouter>
    <App />  
    </BrowserRouter>
    </Provider>
    </>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));