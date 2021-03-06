import React, { Component } from 'react';
import { model, binding } from 'mota';

@model
@binding
export default class TodoItem extends Component {

  onEditKeyDown = event => {
    if (event.keyCode !== 13) return;
    this.model.exitEditing();
  }

  render() {
    window.todoItem = this;
    const { title, completed, editing } = this.model;
    const classNames = [
      completed ? 'completed' : '', editing ? 'editing' : ''
    ].join(' ');
    return <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" data-bind="completed" />
        <label onDoubleClick={this.model.enterEditing}>{title}</label>
        <button className="destroy" onClick={this.model.delete} />
      </div>
      {editing ? <input className="edit" data-bind="title"
        autoFocus={editing}
        onBlur={this.model.exitEditing}
        onKeyDown={this.onEditKeyDown} /> : null}
    </li>;
  }

}