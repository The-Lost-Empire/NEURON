import React, { Component } from 'react';

import SignIn from './components/SignIn';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
 
export default class App extends Component {
  render() {
    return (      
      <div>
        <Navigation />
        <SignIn />
        <Footer />
      </div>
    );
  }
}