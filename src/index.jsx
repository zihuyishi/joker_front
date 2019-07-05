import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Main from './component/Main';
import Login from './component/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  onUserLogin(response) {
    this.setState({
      user: response,
    });
  }

  onUserLogout() {
    this.setState({
      user: null,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <Router className="app">
        <div>
          <Route
            exact
            path="/"
            render={props => <Main {...props} user={user} onLogout={() => this.onUserLogout()} />}
          />
          <Route
            path="/login"
            render={props => <Login {...props} loginCb={res => this.onUserLogin(res)} />}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
