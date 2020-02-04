// let a = 1;

// a = 2;

// console.log(a)

{
  let a = 1;
  console.log(a);
}

{
  let a = 2;
  console.log(a);
}

{
  const a = 1;
  console.log(a);
}

{
  const a = 2;
  console.log(a);
}

// ((arguments) => {
//     var a = 1;

//     var a = 2;
//     console.log(a)
// })();

const fname = "yagnesh";

const lname = "modh";

// const fullName = fname +  '\' car';

// console.log(fullName)

// string literal

const fullName = `${fname}'s car`;

console.log(fullName);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "\n\t<title>Document</title>" +
  "\n</head>" +
  "\n<body>" +
  "\n" +
  "\n</body>" +
  "\n</html>";

// console.log(es5);

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(es6);

function add(a, b) {
  return a + b;
}

const add1 = function(a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;

console.log(add(1, 2));

console.log(add1(1, 2));

console.log(add2(1, 2));

function add(a, b) {
  return a + b;
}

const add1 = function(a, b) {
  return a + b;
};

// arrow function

const add2 = (a, b) => a + b;

// const add2 = (a, b) => {
//     return a + b
// }

const add3 = (a, b) => {
  if (a !== 0 && b !== 0) {
    return a + b;
  }
  return -1;
};

const literal = a => 5;

console.log(literal(3));

console.log(add(1, 2));

console.log(add1(1, 2));

console.log(add2(1, 2));

console.log(add3(0, 9));

const a = 1;

const obj = {
  a: a,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c());

const obj1 = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.c());

const obj = {
  a: 1,
  b: 2,
  c: 3
};

const user = {
  ssn: "abcsds",
  medicaidId: "asdfsd",
  name: "yagnesh",
  fname: "modh"
};

const { ssn, medicaidId, ...rest1 } = user;

console.log(rest1);

console.log(user);

const { a, c, ...rest } = obj;

console.log(a);
console.log(c);
console.log(rest);

const add = (a, b, ...rest) => {
  console.log(rest);
  let add = 0;
  for (let i = 0; i < rest.length; i++) {
    const element = rest[i];
    add += element;
  }
  return add;
};

console.log(add(1, 2, 3, 3, 4, 5));

// delete obj.b;

// console.log(obj)

// obj.c = 3;

// console.log(obj)

// const obj1 = {...obj, b: 4};

// console.log(obj1)

// const obj1 = { ...obj, c: 3};

// console.log(obj1)
// console.log(obj)

// const a = 1;

// const obj = { a: 1, b: 2, c: 3};

// const  { a: abc, ...rest } = obj

// console.log(abc)

// const arr = [1,2, 3,4,5, 6];

// // // const arr1 = [...arr];

// // // console.log(arr1)

// // // const arr1 = [...arr.slice(0, 2), ...arr.slice(3)];

// // // console.log(arr1);

// const [a, ...rest] = arr;

// // console.log(rest);

const arr = [...Array(1000000).keys()];

console.time("for loop");

const newArr = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element);
}

console.timeEnd("for loop");

console.time("foreach loop");

const newArr1 = [];
arr.forEach(element => {
  newArr1.push(element);
});

console.timeEnd("foreach loop");

// map

// reduce  -> fastest /powerfull

// for in

// for of

const arr = [1, 2, 3, 4, 5];

const arr2 = [...arr.slice(0, 2), 6, ...arr.slice(3)];

console.log(arr2);

const arr1 = arr.map(item => {
  if (item === 3) {
    return 6;
  }
  return item;
});

console.log(arr1);

const users = [
  {
    name: "yagnesh",
    gender: "male",
    age: 31
  },
  {
    name: "advik",
    gender: "female",
    age: 10
  },
  {
    name: "namrata",
    gender: "female",
    age: 28
  },
  {
    name: "nirali",
    gender: "female",
    age: 20
  }
];

const index = users.findIndex(x => x.name === "advik");
const changeUsers = [
  ...users.slice(0, index),
  // {...users[index], gender: 'male'},
  ...users.slice(index + 1)
];

const changeUsers1 = users.filter(x => x.name !== "advik");

console.log(changeUsers1);

console.log(changeUsers);

const updatedUser = users.map(x => {
  if (x.name === "advik") {
    return { ...x, gender: "male" };
  }
  return x;
});

console.log(updatedUser);

const arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  sum += element;
}

console.log(sum);

const sum1 = arr.reduce((p, c) => p + c, 0);

console.log(sum1);

const users = [
  {
    name: "yagnesh",
    gender: "male",
    age: 31
  },
  {
    name: "advik",
    gender: "male",
    age: 10
  },
  {
    name: "namrata",
    gender: "female",
    age: 28
  },
  {
    name: "nirali",
    gender: "female",
    age: 20
  }
];

const groupBy = users.reduce((p, c) => {
  (p[c.gender] = p[c.gender] || []).push(c);
  return p;
}, {});

console.log(groupBy);

const a = 1;
const b = 2;

const c = a || b;

const d = a && b;

console.log(c);

console.log(d);

//   [
//     {
//       name: "yagnesh",
//       gender: "male",
//       age: 31,
//       profession: 'cricketer'
//     },
//     {
//       name: "advik",
//       gender: "female",
//       age: 10
//       profession: 'cricketer'
//     },
//     {
//       name: "namrata",
//       gender: "female",
//       age: 28
//       profession: 'actor'
//     },
//     {
//       name: "nirali",
//       gender: "female",
//       age: 20
//       profession: 'actor'
//     }
//   ];

//   const updateUser = users.reduce((p, c) => {
//       if(c.name === 'advik') {
//         return p;
//       }
//       return [...p, c]
//   }, []);

//   console.log(updateUser)

const obj = { a: 1, b: 2, c: 3, d: 4 };

// for(let item in obj) {
//     console.log(item);
//     console.log(obj[item])
// }

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
  console.log(iterator);
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject p2");
  }, 2000);
});

const func = async () => {
  try {
    const res = await Promise.race([p1, p2]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

func();

// p1
// .then((val) => {
//     console.log(val)
//     p2
//     .then((val1) => {
//         console.log(val1);
//     })
//     .catch((err1) => {
//         console.log(err1);
//     })
//  })
// .catch((err) => { console.log(err) })

// async function xyz() {
//     await
//     await

// };

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  return 1;
}

const gen = xyz();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

for (const iterator of gen) {
  console.log(iterator);
}

class Animal {
  constructor(type = "animal") {
    this.type = type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  get type() {
    return this._type;
  }

  makeSound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);

    console.log("animal sound");
  }
}

const a = new Animal();
console.log(a.type);
a.makeSound();

// class Cat extends Animal {
//     constructor(type = 'cat') {
//         super(type)
//     }

//     makeSound() {
//         super.makeSound();
//         console.log('meow...')
//     }
// }

// const c = new Cat()
// console.log(c.type);
// c.makeSound();
