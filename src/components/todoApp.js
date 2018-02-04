import React, { Component } from 'react';
import { model } from 'mota';
import TodoItem from './todoItem';
import { todoList } from '../models';

@model(todoList)
class TodoApp extends Component {

  onTextBoxKeyDown = event => {
    const text = event.target.value;
    if (text.trim() && event.keyCode === 13) {
      event.preventDefault();
      this.model.addTodo(text);
      event.target.value = '';
    }
  };

  renderHeader() {
    return <header className="header">
      <h1>todos</h1><input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.onTextBoxKeyDown}
        autoFocus={true} />
    </header>;
  }

  toggleAll = event => {
    this.model.toggleAll(event.target.checked);
  }

  renderList() {
    const { filterItems } = this.model;
    if (!filterItems || filterItems.length < 1) return;
    return <section className="main">
      <input id="toggle-all" className="toggle-all"
        type="checkbox" onChange={this.toggleAll} />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {filterItems.map(item => <TodoItem key={item.id} model={item} />)}
      </ul>
    </section>;
  }

  renderFilters() {
    const { showTypes, showType, setShowType } = this.model;
    return <ul className="filters">
      {showTypes.map(type => (
        <li key={type}>
          <a className={showType == type ? 'selected' : null}
            href="javascript:;" onClick={() => setShowType(type)} >
            {type}
          </a>
        </li>
      ))}
    </ul>
  }

  renderFooter() {
    const {
      items, completedItems, activeItems, clearCompleted } = this.model;
    if (!items || items.length < 1) return;
    return <footer className="footer">
      <span className="todo-count">
        <strong> {activeItems.length} </strong>
        <span> items </span>
        <span> left </span>
      </span>
      {this.renderFilters()}
      {completedItems.length > 0 ? <button className="clear-completed"
        onClick={clearCompleted}> Clear completed </button> : null}
    </footer>;
  }

  render() {
    window.todoList = this;
    return <section className="todoapp">
      {this.renderHeader()}
      {this.renderList()}
      {this.renderFooter()}
    </section>;
  }

}

export default TodoApp;