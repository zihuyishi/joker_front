import React from 'react';
import * as jokerApi from '../api/joker';

export default class CreateJoker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      notify: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { title, content } = this.state;
    let notify;
    try {
      const joker = await jokerApi.NewJoker(title, content);
      console.log(joker);
      notify = '提交成功';
    } catch (err) {
      console.error('create joker error', err);
      notify = '提交失败';
    }
    this.setState({ notify });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, content, notify } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="content">
          Content:
          <textarea name="content" value={content} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {notify.length > 0 && <p>{notify}</p>}
      </form>
    );
  }
}

CreateJoker.propTypes = {

};
