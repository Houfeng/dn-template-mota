import React, { Component } from 'react';
import { model } from 'mota';
import * as models from '../models';

@model
export default class TodoItem extends Component {

  editText = '';

  get list() {
    return this.props.list;
  }

  toggle = () => {
    this.model.toggle();
  }

  edit = () => {
    this.list.todoBeingEdited = this.model;
    this.editText = this.model.title;
  };

  handleChange = (e) => {
    this.editText = e.target.value;
  }

  handleSubmit = () => {
    const val = this.editText.trim();
    if (val) {
      this.model.setTitle(val);
      this.editText = val;
    } else {
      this.model.delete();
    }
    this.list.todoBeingEdited = null;
  }

  handleKeyDown = (e) => {
    // ESC键码 27
    // 回车键键码 13
    const policy = {
      '13': this.handleSubmit,
      '27': () => {
        this.editText = this.model.title;
        this.list.todoBeingEdited = null;
      }
    };
    if (policy[e.keyCode]) {
      policy[e.keyCode]();
    }
  }

  render() {
    const isEdit = this.list.todoBeingEdited === this.model;
    const cls = [
      this.model.completed ? 'completed' : '',
      isEdit ? 'editing' : ''
    ].join(' ');
    return <li className={cls}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={this.model.completed}
          onChange={this.toggle} />
        <label onDoubleClick={this.edit}>
          {this.model.title}
        </label>
        <button className="destroy" onClick={this.model.delete} />
      </div>
      <input
        className="edit"
        value={this.editText}
        onBlur={this.handleSubmit}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    </li>;
  }

}