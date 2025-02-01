// 📌 What is an Interface?
// An interface defines the form (structure) that an object should have, without implementing logic. Unlike type, interfaces can be extended and implemented in classes.

// Syntax
// interface InterfaceName {
//   property1: type;
//   property2: type;
//   method1(): void;
//   method2(): void;
// }

// Example
interface Person {
  name: string;
  age: number;
  active: boolean;
  greet(): void;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  active: true,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Hello, my name is John Doe

console.log(person); // { name: 'John Doe', age: 30, active: true, greet: [Function: greet] }
// ✔️ The User interface defines the structure of the object.
// ✔️ TypeScript ensures that user1 follows this structure.

// ✅  Read-Only Properties
// You can make properties read-only by adding the 'readonly' keyword before the property name.
// We use readonly to prevent the modification of a field after it has been defined:

interface Car {
  readonly brand: string;
  model: string;
}

const car1: Car = { brand: 'Toyota', model: 'Corolla' };

// car1.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.

// ✅  Interface with methods
// You can define methods in an interface. The methods should not have any implementation:

interface People {
  name: string;
  age: number;
  greet(): string;
}

const people: People = {
  name: 'John Doe',
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log(people.greet()); // Hello, my name is John Doe and I am 30 years old.

// ✅ Extending Interfaces
// You can extend an interface using the extends keyword:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: 'Buddy', breed: 'Labrador' };
// ✔️ The Dog interface extends the Animal interface and adds a breed property.

// ✅ Interfaces vs. Type Aliases
// interface and type are very similar, but have differences:
// ✔️ Interfaces can be extended, while type aliases can't.
// ✔️ Interfaces can be implemented in classes, while type aliases can't.
// ✔️ Interfaces are hoisted, while type aliases aren't.
// ✔️ Interfaces are more commonly used for defining shapes of objects.

// ✅ Implementing Interfaces
// A class can implement an interface using the implements keyword:

interface Form {
  calculateArea(): number;
}

class Circle implements Form {
  constructor(private radius: number) {}

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.53981633974483
