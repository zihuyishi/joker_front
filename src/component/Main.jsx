import React from 'react';
import PropTypes from 'prop-types';
import Toollist from './Toollist';
import JokerList from './JokerList';
import NavigationBar from './NavigationBar';
import * as jokerApi from '../api/joker';

export default class Main extends React.Component {
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
    const { user } = this.props;
    const { jokers } = this.state;
    return (
      <div>
        <div className="navigationBar">
          <NavigationBar user={user} />
        </div>
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

Main.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Main.defaultProps = {
  user: null,
};
