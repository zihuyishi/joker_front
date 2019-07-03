import React from 'react';
import PropTypes from 'prop-types';

export default class NavigationBar extends React.Component {
  render() {
    const { user } = this.props;
    let content;
    if (user) {
      const hello = `您好 ${user.name}`;
      content = <div><p>{hello}</p></div>;
    } else {
      content = <div><a href="/login">登录</a></div>;
    }
    return content;
  }
}

NavigationBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

NavigationBar.defaultProps = {
  user: null,
};
