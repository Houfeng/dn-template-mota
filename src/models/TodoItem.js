import { newGuid } from 'ntils';

export default class TodoItem {

  id;
  title;
  completed = false;
  _editing = false;

  get list() {
    return this.__list || [];
  }

  constructor(list, title, completed) {
    this.__list = list;
    this.id = newGuid();
    this.title = title;
    this.completed = completed;
  }

  get editing() {
    return !this.completed && this._editing;
  }

  enterEditing = () => {
    this._editing = true;
  }

  exitEditing = () => {
    this._editing = false;
  }

  delete = () => {
    this.list.items = this.list.items
      .filter(todo => todo.id !== this.id);
  }

}