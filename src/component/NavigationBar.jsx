import React from 'react';
import PropTypes from 'prop-types';
import * as userApi from '../api/user';

export default class NavigationBar extends React.Component {
  async onClickLogout() {
    const { onLogout } = this.props;
    await userApi.Logout();
    onLogout();
  }

  render() {
    const { user } = this.props;
    let content;
    if (user) {
      const hello = `您好 ${user.name}`;
      content = (
        <div>
          <p>{hello}</p>
          <a href="/newjoker">新建笑话</a>
          <button type="button" onClick={() => this.onClickLogout()}>注销</button>
        </div>
      );
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
  onLogout: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  user: null,
};
