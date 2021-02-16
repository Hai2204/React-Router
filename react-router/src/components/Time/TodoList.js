import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

export default TodoList;