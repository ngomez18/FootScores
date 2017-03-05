import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home';
import Leaderboard from './components/leaderboard';
import Leagues from './components/leagues';
import Welcome from './components/welcome';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='leaderboard' component={Leaderboard}/>
      <Route path='home' component={Home}/>
      <Route path='leagues' component={Leagues}/>
    </Route>
  </Router>,
  document.querySelector('.container-fluid')
);
