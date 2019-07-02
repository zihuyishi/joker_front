import React from 'react';
import PropTypes from 'prop-types';

export default class Toollist extends React.Component {
  render() {
    const { randomJoker } = this.props;
    return (
      <div>
        <button type="button" onClick={() => randomJoker()}>获取笑话</button>
      </div>
    );
  }
}

Toollist.propTypes = {
  randomJoker: PropTypes.func.isRequired,
};
