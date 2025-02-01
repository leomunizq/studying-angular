// 📌  What is a class in typescript??
// A class is a blueprint for creating objects with specific properties and methods.
// In TypeScript, a class help us to define a structure and behavior more easily.

//✅  Create a class
class Person {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`,
    );
  }
}

//✅  Create an object of the class
const person1 = new Person('John', 30);
console.log(person1.greet()); // Hello, my name is John

// ✅ Access modifiers (public, private, protected)
// Modifiers control the visibility of properties and methods.
// By default, all properties and methods are public.
// Public: Accessible from anywhere.
// Private: Accessible only within the class.
// Protected: Accessible within the class and its subclasses.

class Person2 {
  // Properties
  private name: string;
  private age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`,
    );
  }
}

const person2 = new Person2('Leo', 15);
console.log(person2.greet()); // Hello, my name is John

//private properties are not accessible from outside the class

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
// console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// protected properties are accessible within the class and its subclasses
// allow subclasses to access the property but not the outside world.

class Animal {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }
}

class Dog extends Animal {
  constructor(type: string) {
    super(type);
  }

  getType() {
    console.log(`The type of this animal is ${this.type}`);
  }
}

const dog1 = new Dog('Mammal');
// console.log(dog1.type) // Error: Property 'type' is protected and only accessible within class 'Animal' and its subclasses.
dog1.getType();

// ✅  Getters and Setters
// Getters and setters are used to get and set the values of private properties.
// Getters are used to get the value of a property.
// Setters are used to set the value of a property.

class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return 'Access Denied'; // protect the password
  }

  set password(newPassword: string) {
    if (newPassword.length < 6) {
      console.error('Password must be at least 6 characters long');
    }
    this._password = newPassword;
  }
}

const user1 = new User('123456');
console.log(user1.password); // Access Denied
user1.password = '123'; // Error: Password must be at least 6 characters long
user1.password = '1234567'; // OK

// ✅ Inheritance (extends)
// Inheritance allows a class to inherit properties and methods from another class.
// The class that inherits is called a subclass or child class.
// The class that is inherited from is called a superclass or parent class.

class PersonAgain {
  name = 'John';
  age = 30;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

class Student extends PersonAgain {
  course: string;

  constructor(name: string, age: number, course: string) {
    super(name, age); // Call the constructor of the superclass
    this.course = course;
  }

  study(): string {
    return `${this.name} is studying ${this.course}`;
  }
}

const student1 = new Student('Alice', 25, 'Math');
console.log(student1.greet()); // Hello, my name is Alice and I am 25 years old
console.log(student1.study()); // Alice is studying Math

// ✅ Abstract classes
// Abstract classes are classes that cannot be instantiated directly.
// They are used as a blueprint for other classes.
// Abstract methods are methods that must be implemented in the subclass.

abstract class AnimalAgain {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // Abstract method (no implementation)
}

class Cat extends AnimalAgain {
  makeSound(): void {
    console.log('Meow');
  }
}

const cat1 = new Cat('Tom');
cat1.makeSound(); // Meow

// ✅ Interface vs. class
// Interface: Defines the structure of an object.
// Class: Implements the structure of an object.

interface Form {
  calculateArea(): number;
}

class Square implements Form {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  calculateArea(): number {
    return this.side ** 2;
  }
}

const square1 = new Square(5);
console.log(square1.calculateArea()); // 25

// the Square class implements the Form interface, which requires the calculateArea method to be implemented.

// ✅ Singleton Class
// A singleton class is a class that can only have one instance.

class Database {
  private static instance: Database;

  private constructor() {
    console.log('Database instance created');
  }
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true

// ✔️ private constructor() prevents the creation of new instances.
// ✔️ getInstance() ensures that it always returns the same instance.

// 📌  Summary:
// A class is a blueprint for creating objects with specific properties and methods.
// Access modifiers control the visibility of properties and methods.
// Getters and setters are used to get and set the values of private properties.
// Inheritance allows a class to inherit properties and methods from another class.
// Abstract classes are classes that cannot be instantiated directly.
// Interface defines the structure of an object.
// Singleton class is a class that can only have one instance.
// Classes help us to define a structure and behavior more easily.
// Classes are a fundamental part of object-oriented programming.
