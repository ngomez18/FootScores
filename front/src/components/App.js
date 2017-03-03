import React, { Component } from 'react';
//import axios from 'axios';
import '../style/App.css';
import Navegacion from './navbar';

class App extends Component {

/*  constructor(props)
  {
    super(props)
  }*/


  render() {
    return (
      <div>
        <Navegacion></Navegacion>
      </div>
    );
  }
}
export default App;
