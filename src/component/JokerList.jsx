import React from 'react';
import PropTypes from 'prop-types';
import Joker from './Joker';

export default class JokerList extends React.Component {
  render() {
    const { jokers } = this.props;
    const jokerList = jokers.map(joker => <li key={joker.id}><Joker joker={joker} /></li>);
    return (
      <ul>
        {jokerList}
      </ul>
    );
  }
}

JokerList.propTypes = {
  jokers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
