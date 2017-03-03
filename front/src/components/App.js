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
        <div className='row'>
          <Navegacion></Navegacion>
        </div>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <h1>Hola</h1>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
export default App;
