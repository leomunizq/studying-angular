// 📌 What are Generics?
// Generics allow you to create flexible components, where the types can be defined dynamically at the time of use.

// Simple Example (No Generics)
// If we have a function that returns an array:
function getArray(numbers: number[]): number[] {
  return numbers;
}
// ✔️ This works, but it's limited to arrays of numbers.

// What if we want it to work with any type?
// This is where Generic Type (<T>) comes in. 👇
function returnArray<T>(values: T[]): T[] {
  return values;
}

console.log(returnArray([1, 2, 3])); // ✅ [1, 2, 3] (números)
console.log(returnArray(['a', 'b', 'c'])); // ✅ ["a", "b", "c"] (strings)
// ✔️ <T> is a generic parameter that can be any type.
// ✔️ TypeScript automatically infers the type passed in.

// Using Generics in Functions
// We can force a type when calling the function:

const numbers = returnArray<number>([10, 20, 30]);
const texts = returnArray<string>(['TypeScript', 'é', 'top']);
// ✔️ <number> and <string> explicitly define the type.

// Using Generics in Classes
// We can also use generics in classes:

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(10);
const stringBox = new Box<string>('TypeScript');

console.log(numberBox.getValue()); // ✅ 10
console.log(stringBox.getValue()); // ✅ "TypeScript"

// Generics in interfaces
// We can also use generics in interfaces:

interface Odd<T, U> {
  key: T;
  value: U;
}

const user: Odd<string, number> = { key: 'Leo', value: 25 };
const product: Odd<number, string> = { key: 1, value: 'TypeScript' };

console.log(user); // ✅ { key: 'Leo', value: 25 }
console.log(product); // ✅ { key: 1, value: 'TypeScript' }

// Generics constraints
// We can also add constraints to generics:

function returnNumericValue<T extends number>(value: T): T {
  return (value * 2) as T;
}

console.log(returnNumericValue(10)); // ✅ 20
// console.log(returnNumericValue('TypeScript')); // ❌ Argument of type '"TypeScript"' is not assignable to parameter of type 'number'.

// Use with extends keyof
// We can also use generics with extends keyof:

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const userObj = { name: 'Leo', age: 25 };

console.log(getValue(userObj, 'name')); // ✅ Leo
console.log(getValue(userObj, 'age')); // ✅ 25
// console.log(getValue(userObj, 'city')); // ❌ Argument of type '"city"' is not assignable to parameter of type '"name" | "age"'.

// using generics with arrays and promises
// We can also use generics with arrays and promises:

function myFirstElement<T>(items: T[]): T {
  return items[0];
}

console.log(myFirstElement([1, 2, 3])); // ✅ 1
console.log(myFirstElement(['a', 'b', 'c'])); // ✅ "a"

// Using Generics with Promises
// We can also use generics with promises:

function searchData<T>(url: string): Promise<T> {
  return fetch(url).then((response) => response.json());
}

// calling the function with a specific type
async function example() {
  const data = await searchData<{ name: string; age: number }>(
    'https://api.example.com/data',
  );
  console.log(data.age, data.name);
}

// Multiple Generics
// We can also use multiple generics:
function parChaveValor<T, U>(chave: T, valor: U): [T, U] {
  return [chave, valor];
}

console.log(parChaveValor('Nome', 'Leonardo')); // ✅ ["Nome", "Leonardo"]
console.log(parChaveValor(1, true)); // ✅ [1, true]

// mixing generics with other types
// We can also mix generics with other types:

type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin add a unique id
function Identifiable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    id = Math.random();
  };
}

// Base class
class Product {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const ProductWithId = Identifiable(Product);
const product1 = new ProductWithId('TypeScript');

console.log(product1.name); // ✅ TypeScript
console.log(product1.id); // ✅ random number
