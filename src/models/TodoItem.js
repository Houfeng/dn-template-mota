import { newGuid } from 'ntils';

export default class TodoItem {

  id;
  title;
  completed = false;

  get list() {
    return this.__list || [];
  }

  /**
   * 创建一个 TodoItem 实例
   * @param {object} list 传入 list
   * @param {string} title todo项的内容
   * @param {boolean} completed 是否完成的状态
   * @memberof TodoModel
   */
  constructor(list, title, completed) {
    this.__list = list;
    this.id = newGuid();
    this.title = title;
    this.completed = completed;
  }

  // 切换列表项的完成状态
  toggle = () => {
    this.completed = !this.completed;
  }

  // 根据id删除列表项
  delete = () => {
    this.list.items = this.list.items.filter(todo => todo.id !== this.id);
  }

  // 设置实例title
  setTitle = (title) => {
    this.title = title;
  }

}