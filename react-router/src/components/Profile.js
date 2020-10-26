import React, { Component } from "react";
import "../App.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Password",
      name: "",
      pass: "",
      username: "vanhai",
      password: "123",
    };
  }
  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  oncheckPassword = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };
  onSubmit = (event) => {
    var err = document.querySelector("#error-message")
    if (
      this.state.name === this.state.username &&
      this.state.pass === this.state.password
    ) {
      alert("login success");
      err.textContent=""
    } else {
      err.textContent = "User Name Hoac pass k dung"
    }
    event.preventDefault();
  };
  changeIcon = (e) => {
    e.target.classList.toggle("la-low-vision");
    if (this.state.type === "Password") {
      this.setState({
        type: "Text",
      });
    }
    if (this.state.type === "Text") {
      this.setState({
        type: "Password",
      });
    }
  };

  render() {
    const { name, pass, type } = this.state;
    return (
      <form
        className="uk-text-center uk-form-horizontal uk-margin uk-width-1-2 uk-align-center"
        onSubmit={this.onSubmit}
      >
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="username">
            Username
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              id="username"
              type="text"
              onChange={this.onChange}
              defaultValue={name}
              placeholder="Họ Tên Bạn"
            ></input>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="password">
            Password
          </label>
          <div className="uk-form-controls uk-position-relative uk-visible-toggle" tabIndex="-1">
            <input
              className='uk-input'
              id="password"
              type={type}
              onChange={this.oncheckPassword}
              defaultValue={pass}
              placeholder="Nhập mật khẩu"
            ></input>
            <i
              className="las la-eye uk-position-absolute icon uk-hidden-hover"
              onClick={this.changeIcon}
            ></i>
          </div>
          <p className="uk-text-danger" id="error-message"></p>
        </div>
        <button
          className={
            this.state.name && this.state.pass !== ""
              ? "uk-button uk-button-primary"
              : "uk-disabled uk-button"
          }
          type="submit"
        >
          Login
        </button>
      </form>
    );
  }
}

export default Profile;
