// 📌 What is Inheritance?
// Inheritance allows a class to inherit properties and methods from another class, avoiding code repetition.
// In TypeScript, we use the keyword extends to indicate that one class inherits from another.

// example
// base class (super class)
class Person1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student1 extends Person1 {
  course: string;

  constructor(name: string, age: number, course: string) {
    super(name, age); // call the constructor of the super class
    this.course = course;
  }

  study(): string {
    return `${this.name} is studying ${this.course}.`;
  }
}

const student2 = new Student1('Alice', 20, 'Computer Science');

console.log(student2.greet()); // Hello, my name is Alice and I am 20 years old.
console.log(student2.study()); // Alice is studying Computer Science.

// 📌 Method Overriding
// Method overriding allows a subclass to provide a specific implementation of a method that is already provided by its superclass.
// In TypeScript, we can override a method by simply redefining it in the subclass.

// example
class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  calculatePay(): number {
    return 2000;
  }
}

class Manager extends Employee {
  override calculatePay(): number {
    return super.calculatePay() + 1000;
  }
}

const manager = new Manager('Alice');
console.log(manager.calculatePay()); // 3000

// 📌 Class Abstract
// An abstract class is a class that cannot be instantiated directly. It is designed to be a base class for other classes to inherit from.

// example
abstract class AnimalAbstract {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;
}

class CatAbstract extends AnimalAbstract {
  makeSound(): void {
    console.log('Meow');
  }
}

const catAbstract = new CatAbstract('Kitty');
catAbstract.makeSound(); // Meow

// 📌 Multiple Inheritance
// TypeScript does not support multiple inheritance. A class can only inherit from one class at a time.
// However, TypeScript supports mixin, which is a way to combine multiple classes into a single class.

interface Walkable {
  walk(): void;
}

interface Swimmer {
  swim(): void;
}

class Duck implements Walkable, Swimmer {
  walk(): void {
    console.log('Duck is walking');
  }
  swim(): void {
    console.log('Duck is swimming');
  }
}

const duck1 = new Duck();
duck1.walk(); // Duck is walking
duck1.swim(); // Duck is swimming
