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
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Route path='/profile'  component={ Profile} />*/}
          {/*<Route path='/dialogs' component={ Dialogs} />*/}
          <Route path='/profile'  render = { () => <Profile /> }  />
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  )
}




export default App;
