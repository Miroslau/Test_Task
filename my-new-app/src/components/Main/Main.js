import React from 'react';
import Cards from '../Cards/CardsContainer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Pofile from '../Pofile/Pofile';
import { Switch, Route } from 'react-router-dom';
import './Style.scss';

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/pofile' component={Pofile}/>
      <Route exact path='/cards' component={Cards}/>
    </Switch>
  </main>
);

export default Main;