import Node from './object-class.js';

export default class Data {
  constructor() {
    this.list = [];
    this.count = 0;
  }

  add(item) {
    let newObject = new Node(item);
    newObject.object.index = this.count + 1;
    const newList = [...this.list, newObject.object];
    this.list = newList;
    this.count++;
    // console.log(this.list, this.count);
  }

  pop(index) {
    if (this.count !== 0) {
      let newList = this.list.filter((e) => e.index !== index);
      newList.forEach((e) => (e.index = newList.indexOf(e) + 1));
      this.list = newList;
      this.count--;
    }
    // console.log(this.list, this.count);
  }

  edit(text, index) {
    this.list.forEach((e) => {
      if (e.index == index) {
        e.description = text;
      }
    });
  }
}
