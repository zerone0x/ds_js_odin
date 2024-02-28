const array = ['food', 'water', 'shelter', 'clothing'];

let [eat, ,house] = array;

console.log(eat); // food
console.log(house); // shelter

[eat, house] = [house, eat];

console.log(eat); // food
console.log(house); // shelter

function getFood() {
  return ['apple', 'banana', 'orange'];
}

const [apple, banana, orange] = getFood();
console.log(apple+' '+banana+' '+orange); // apple banana orange


const nested = [1, 2, [3, 4]];
const [a, , [c, d]] = nested

console.log(a  +c+d)