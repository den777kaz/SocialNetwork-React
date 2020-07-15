import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import {addNewMessage, changeText} from './redux/state';

export let renderStart = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addNewMessage={addNewMessage}
        changeText={changeText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderStart(state);
subscribe(renderStart);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
