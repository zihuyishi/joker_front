import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toollist from './component/Toollist';
import JokerList from './component/JokerList';
import * as jokerApi from './api/joker';

// eslint-disable-next-line react/prefer-stateless-function
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokers: [],
    };
  }

  async onRandomJoker() {
    try {
      const jokers = await jokerApi.RandomJoker(5);
      this.setState({
        jokers,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { jokers } = this.state;
    return (
      <div className="app">
        <div className="toollist">
          <Toollist randomJoker={() => this.onRandomJoker()} />
        </div>
        <div className="joker-list">
          <JokerList jokers={jokers} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Application />,
  document.getElementById('root'),
);
