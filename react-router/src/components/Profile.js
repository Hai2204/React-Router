import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { Link, Route } from "react-router-dom";
import "../App.css";
// import TodoList from "./Time/TodoList";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Password",
      name: "",
      pass: "",
      users: []
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
    event.preventDefault();
    var err = document.querySelector("#error-message");
    if (
      this.state.name === 'admin' &&
      this.state.pass === 'admin'
    ) {
      alert("login success");
      localStorage.setItem('users',JSON.stringify({
        username : this.state.name,
        password : this.state.pass
      }))
      err.textContent = "";
    } else {
      err.textContent = "User Name Hoac pass k dung";
    }
    
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
  renderUsers = (users) => {
    console.log(users);
  }
  todoList = (e) => {
    e.preventDefault();
    // json-server --watch db.json --port 3001
    // const axios = require('axios');
    var url = 'http://localhost:1998/users';
    // Make a request for a user with a given ID
    // axios.get(url)
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function (rep) {
    //     // always executed
    //     this.renderUsers(rep);
    //   });
    //   console.log(this.state.users)
  }
  render() {
    const { name, pass, type } = this.state;
    var loginUser = localStorage.getItem('users');
    if (loginUser !== null) {
      var { location } = this.props;
      return <Redirect to={
        {
          pathname : './products',
          state : {
              from: location,
          }
        }
      }/>
    }
    return (
      <div>
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
            <div
              className="uk-form-controls uk-position-relative uk-visible-toggle"
              tabIndex="-1"
            >
              <input
                className="uk-input"
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
        <form className="uk-text-center uk-form-horizontal uk-margin uk-width-1-2 uk-align-center">
          <hr></hr>
          <h1>To do List using ajax</h1>
          <div className="uk-margin uk-flex">
            <label className="uk-form-label" htmlFor="todoList">
              Add SomeThing
            </label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="todoList"
                type="text"
                placeholder="Write SomeThing"
              ></input>
            </div>
            <button
            className="uk-button uk-button-danger" id="add"
            onClick={this.todoList}
          >
            add
          </button>
          </div>
          <hr></hr>
          <ul id="todo_list" className="uk-list">
              
          </ul>

        </form>
      </div>
    );
  }
}

export default Profile;
