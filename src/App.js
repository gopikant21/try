import React, { Component } from 'react';
import './App.css';
import './media_querry.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Complaints from './components/complaints';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Complaints/>
        <Footer/>
      </div>
    );
  }
}

export default App;
