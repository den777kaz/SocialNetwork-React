import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage} from './redux/state';
import {changeText} from './redux/state';

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
