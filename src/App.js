import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    //let nombres = ["Sebastian","Enrique","Ana","Daniel", "Edwin"];

    /*const listNombres = nombres.map(
      (element)=><Saludo nombre={element}/>
    )*/

    return (
      <div className="App">
      <Navbar/>
        {/*listNombres*/}

      </div>
    );
  }
}

export default App;
