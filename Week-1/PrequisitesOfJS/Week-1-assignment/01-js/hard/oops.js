class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello ${this.name}, you are ${this.age}`);
  }
}

const Person1 = new Person("Shubham", "23");

Person1.sayHello();
