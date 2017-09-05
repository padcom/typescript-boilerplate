export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) { }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}
