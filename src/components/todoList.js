import React, { Component } from 'react';
import { model } from 'mota';
import TodoItem from './todoItem';
import * as models from '../models';

@model(models.todoList)
export default class TodoList extends Component {

  render() {
    const { items } = this.model;
    return <section className="main">
      <ul className="todo-list">
        {items.map(item =>
          <TodoItem key={item.id} list={this.model} model={item} />
        )}
      </ul>
    </section>;
  }

}