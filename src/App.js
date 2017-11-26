import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import VideoStreamIn from './VideoStreamIn';
import VideoStreamOut from './VideoStreamOut';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/receive-video" activeStyle={{ borderBottom: '3px solid red' }}>Video In</NavLink>
          <NavLink to="/serve-video" style={{ marginLeft: 50 }} activeStyle={{ borderBottom: '1px solid red' }}>
            Video Out
          </NavLink>
          <Route path="/receive-video" component={VideoStreamIn} />
          <Route path="/serve-video" component={VideoStreamOut} />
        </div>
      </Router>
    );
  }
}

export default App;
