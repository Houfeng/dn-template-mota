import React, { Component } from 'react';
import { model } from 'mota';
import TodoItem from './todoItem';
import { todoList } from '../models';

@model(todoList)
class TodoApp extends Component {

  renderItems() {
    const { items } = this.model;
    return <section className="main">
      <ul className="todo-list">
        {items.map(item =>
          <TodoItem key={item.id} model={item} />
        )}
      </ul>
    </section>;
  }

  onTextBoxKeyDown = event => {
    const text = event.target.value;
    if (text && event.keyCode === 13) {
      event.preventDefault();
      this.model.addTodo(text);
      event.target.value = '';
    }
  };

  renderTextBox() {
    return <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={this.onTextBoxKeyDown}
      autoFocus={true} />;
  }

  render() {
    return <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        {this.renderTextBox()}
      </header>
      {this.renderItems()}
    </section>;
  }

}

export default TodoApp;