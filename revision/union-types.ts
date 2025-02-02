// 📌 Union Types (|)
// The Union Type allows a variable or parameter to accept more than one type.

let data: string | number;

data = 10; // valid
data = 'Hello'; // valid
// data = true; // invalid

// 📌 Union Types in functions

function displayID(id: number | string) {
  console.log(id);
}

displayID(10); // valid
displayID('Hello'); // valid
// displayID(true); // invalid

// 📌 Differential treatment with typeof
// The typeof operator can be used to differentiate between different types in a union.
// when using typeof, we need verify the type before using it.

function displayData(data: string | number) {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toFixed(2));
  }
}

displayData('Hello'); // HELLO
displayData(10.1234); // 10.12

// 📌 Union Types with objects

type AnimalT = {
  name: string;
  type: 'dog' | 'cat';
};

const Dog1: AnimalT = {
  name: 'Buddy',
  type: 'dog',
};

const Cat1: AnimalT = {
  name: 'Tom',
  type: 'cat',
};

// 📌 Union Types with null and undefined

let name2: string | null;

name2 = 'John'; // valid

name2 = null; // valid

// name2 = undefined; // invalid

// 📌 Intersection Types (&)
// The Intersection Type allows a variable or parameter to have multiple types.

type PeopleT = {
  name: string;
};

type EmployeeT = {
  brand: string;
};

type PersonEmployeeT = PeopleT & EmployeeT;

const dev: PersonEmployeeT = {
  name: 'John',
  brand: 'Google',
};

// 📌 Intersection Types with objects

interface UserI {
  id: number;
  name: string;
}

interface Permission {
  level: 'Admin' | 'User' | 'Guest';
}

type UserPermission = UserI & Permission;

const admin: UserPermission = {
  id: 1,
  name: 'John',
  level: 'Admin',
};

// 📌 Intersection Types with functions

type Loggable = {
  log: () => void;
};

type Auth = {
  authenticate: () => void;
};

type System = Loggable & Auth;

const app: System = {
  log: () => console.log('Logging...'),
  authenticate: () => console.log('Authenticating...'),
};

app.log(); // Logging...
app.authenticate(); // Authenticating...
