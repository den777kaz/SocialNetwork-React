import React from 'react';

import './App.css';
import './components/header/Header'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
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
          <Route path='/profile'  render = { () => <Profile state={props.state.profileData} /> }  />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesData}/>} />
          <Route path='/news' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  )
}




export default App;
