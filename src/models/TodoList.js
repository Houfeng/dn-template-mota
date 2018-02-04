import TodoItem from '../models/TodoItem';

export default class TodoList {

  items = [];

  showTypes = ['All', 'Active', 'Completed'];
  showType = 'All';

  setShowType = type => {
    this.showType = type;
  }

  get activeItems() {
    return this.items.filter(item => !item.completed);
  }

  get completedItems() {
    return this.items.filter(item => item.completed);
  }

  get filterItems() {
    switch (this.showType) {
      case 'Active':
        return this.activeItems;
      case 'Completed':
        return this.completedItems;
      default:
        return this.items;
    }
  }

  addTodo = title => {
    this.items.push(new TodoItem(this, title, false));
  }

  clearCompleted = () => {
    this.items = this.items.filter(item => !item.completed);
  }

  toggleAll = (status) => {
    this.items.forEach(item => item.completed = status);
  }

}