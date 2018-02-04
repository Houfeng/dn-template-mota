import React, { Component } from 'react';
import * as models from '../models';
import { model } from 'mota';

const ENTER_KEY = 13;

@model(models.todoList)
export default class TodoEntry extends Component {

  handleKeyDown = (e) => {
    if (e.keyCode !== ENTER_KEY) return;
    e.preventDefault();
    const val = e.target.value;
    if (val) {
      this.model.addTodo(val);
      e.target.value = '';
    }
  };

  render() {
    return <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={this.handleKeyDown}
      autoFocus={true} />;
  }
}