import React, {Component} from 'react';
import '../style/App.css';

class Leaderboard extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        return (
            <div className='row'>
              <div className='col-md-10'>
                <h1>Leaderboard</h1>
              </div>
              <div className='col-md-2'>
                <h1>Chao</h1>
              </div>
            </div>
        );
    }
}
export default Leaderboard;
