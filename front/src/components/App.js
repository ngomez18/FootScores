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
          <div className='col-md-1'>
          </div>
          <div className='col-md-9'>
            {this.props.children}
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
export default App;
