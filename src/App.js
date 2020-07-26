import React from 'react';

import './App.css';
import './components/header/Header'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { BrowserRouter,Route } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Route path='/profile'  component={ Profile} />*/}
          {/*<Route path='/dialogs' component={ Dialogs} />*/}
          <Route path='/profile'  render = { () => <ProfileContainer /> }  />
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
          <Route path='/users' component={UsersContainer} />
        </div>
      </div>
    </BrowserRouter>

  )
}




export default App;
