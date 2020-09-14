/* eslint-disable import/prefer-default-export */
import { Person } from "./Person";

export class Student extends Person {
  constructor(name, clasz) {
    super(name);
    this.className = clasz;
    this.study = this.study.bind(this);
  }

  study() {
    this.move();
    // eslint-disable-next-line no-console
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
