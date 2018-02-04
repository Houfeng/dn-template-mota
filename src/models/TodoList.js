import TodoItem from '../models/TodoItem';

export default class TodoList {

  items = [];

  addTodo = title => {
    this.items.push(new TodoItem(this, title, false));
  }

}