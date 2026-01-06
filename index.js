const user = { name: 'John', age: 30, skills: ['js', 'node', 'react'] };
function greet(u) {
  console.log('Hello, ' + u.name + '! You have ' + u.skills.length + ' skills');
}
greet(user);
