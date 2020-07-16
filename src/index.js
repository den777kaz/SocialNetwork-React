import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

let renderStart = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addNewMessage={store.addNewMessage.bind(store)}
        changeText={store.changeText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderStart(store.getState());
store._subscribe(renderStart);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
