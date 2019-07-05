import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as userApi from '../api/user';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async onClickLogin(event) {
    event.preventDefault();
    const { loginCb } = this.props;
    const { name, password } = this.state;

    try {
      const user = await userApi.Login(name, password);
      loginCb(user);
      this.setState({
        isLogin: true,
      });
    } catch (err) {
      console.error('login error', err);
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { isLogin, name, password } = this.state;
    if (!isLogin) {
      return (
        <form>
          <input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="请输入用户名" />
          <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="请输入密码" />
          <input type="submit" value="登录" onClick={e => this.onClickLogin(e)} />
        </form>
      );
    }
    return <Redirect to="/" />;
  }
}

Login.propTypes = {
  loginCb: PropTypes.func.isRequired,
};
