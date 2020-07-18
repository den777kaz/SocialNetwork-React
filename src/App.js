import React from 'react';

import './App.css';
import './components/header/Header'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { BrowserRouter,Route } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendsData} />
        <div className="app-wrapper-content">
          {/*<Route path='/profile'  component={ Profile} />*/}
          {/*<Route path='/dialogs' component={ Dialogs} />*/}
          <Route path='/profile'  render = { () => <Profile store={props.store} /> }  />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  )
}




export default App;
