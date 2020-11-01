import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Prompts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  onClick = (isChecked) => {
    //   if ((location) => location.pathname !== this.props.match.url) {
    //     this.setState({ isChecked: isChecked });
    //   }
      this.setState({ isChecked: isChecked });
  };
  render() {
    return (
      <div className="uk-align-center uk-text-center">
        <div> This is Prompt</div>
        <div className="uk-margin">
          <button
            className="uk-button uk-button-primary uk-button-small uk-margin-right"
            onClick={() => this.onClick(false)}
          >
            Accept
          </button>
          <button
            className="uk-button uk-button-danger uk-button-small"
            type="button"
            onClick={() => this.onClick(true)}
          >
            Không Cho Phép
          </button>
        </div>
        <div>
          <Prompt
            when={this.state.isChecked}
            message={(location) => `do you want leave ${location.pathname}`}
          />
        </div>
      </div>
    );
  }
}

export default Prompts;
