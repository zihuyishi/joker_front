import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Main from './component/Main';
import Login from './component/Login';
import CreateJoker from './component/CreateJoker';

class App extends React.Component {
  constructor(props) {
    super(props);
    const strUser = localStorage.getItem('user');
    let user = null;
    if (strUser && strUser.length) {
      user = JSON.parse(strUser);
    }
    this.state = {
      user,
    };
  }

  onUserLogin(response) {
    localStorage.setItem('user', JSON.stringify(response));
    this.setState({
      user: response,
    });
  }

  onUserLogout() {
    localStorage.removeItem('user');
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
          <Route
            path="/newjoker"
            component={CreateJoker}
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
