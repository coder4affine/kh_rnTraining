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


map

reduce  -> fastest /powerfull 

for in

for of 




