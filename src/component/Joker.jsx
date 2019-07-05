import React from 'react';
import PropTypes from 'prop-types';

export default class Joker extends React.Component {
  render() {
    const { joker } = this.props;
    const { content } = joker;
    return (
      <div className="square">
        {content}
      </div>
    );
  }
}

Joker.propTypes = {
  joker: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
