import React, { Fragment } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => (
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
