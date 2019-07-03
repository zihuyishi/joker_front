import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as userApi from '../api/user';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: null,
      password: null,
    };
  }

  async onClickLogin() {
    const { loginCb } = this.props;
    const { name, password } = this.state;

    const result = await userApi.Login(name, password);
    if (result.code === 0) {
      loginCb(result);
      this.setState({
        isLogin: true,
      });
    }
  }

  render() {
    const { isLogin, name, password } = this.state;
    if (!isLogin) {
      return (
        <form>
          <input type="text" id="input-name" value={name} placeholder="请输入用户名" />
          <input type="password" id="input-password" value={password} placeholder="请输入密码" />
          <input type="button" id="input-login" value="登录" onClick={() => this.onClickLogin()} />
        </form>
      );
    }
    return <Redirect to="/" />;
  }
}

Login.propTypes = {
  loginCb: PropTypes.func.isRequired,
};
