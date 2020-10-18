import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  onChange = (event) => {
    this.setState = {
      name: event.target.value,
    };
  };
  render() {
    console.log(this.state.name);
    return (
      <form onSubmit={this.onSubmit}>
        <div className="uk-align-center uk-text-center">
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          ></input>
        </div>
      </form>
    );
  }
}

export default Profile;
