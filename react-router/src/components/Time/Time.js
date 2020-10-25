import React, { Component } from 'react';

class Time extends Component {
  constructor(props){
    super(props);
    this.state = {
        time:""
    }
  }


  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        time: new Date().toLocaleTimeString()
      })
      this.componentDidMount();
    })
  }

  render() {
    return (
      <div className="uk-margin-small-left">
        {this.state.time}
      </div>
    );
  }
}

export default Time;