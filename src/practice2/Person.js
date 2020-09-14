/* eslint-disable import/prefer-default-export */
export class Person {
  constructor(name) {
    this.name = name;
  }

  move() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} is moving`);
  }
}
