import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joker }) {
  const { content } = joker;
  return (
    <div className="joker-row">
      {content}
    </div>
  );
}

Joker.propTypes = {
  joker: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
