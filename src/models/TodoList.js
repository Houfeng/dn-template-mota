import TodoItem from '../models/TodoItem';

export default class TodoList {

  todoBeingEdited = null;
  // 保存todo列表项
  items = [];

  // 添加todo，参数为todo内容
  addTodo(title) {
    this.items.push(new TodoItem(this, title, false));
  }

}