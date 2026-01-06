const user = { name: 'John', age: 30, city: 'NYC' };
function sayHello(u) {
  console.log('Hello ' + u.name + ' from ' + u.city);
}
sayHello(user);
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((a, b) => a + b);
console.log('Sum:' + sum);
