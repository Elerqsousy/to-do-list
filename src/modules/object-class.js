export default class Node {
  constructor(one, two) {
    this.firstInput = one;
    this.secondInput = two;
    this.thirdInput = 0;
    this.object = {
      description: `${this.firstInput}`,
      completed: this.secondInput,
      index: this.thirdInput,
    };
  }
}
