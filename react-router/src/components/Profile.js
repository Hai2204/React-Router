import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "123",
    };
  }
  onChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  };
  onSubmit = (event) => {
    if (this.state.name === this.state.username) {
      alert('login success')
    } else {
      alert('username error')
    }
    event.preventDefault();
  }
  render() {
    const { name } = this.state;
    return (
      <form className="uk-text-center uk-margin" onSubmit={this.onSubmit}>
        <div className="uk-flex-inline">
          <input
            type="text"
            onChange={this.onChange}
            // value={name}
            defaultValue={name}
          ></input>
          <button className={this.state.name !== '' ? 'uk-button uk-button-primary' : 'uk-disabled uk-button'} type="submit">check</button>
        </div>
      </form>
    );
  }
}

export default Profile;
