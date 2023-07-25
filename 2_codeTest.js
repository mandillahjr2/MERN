const amount = 9;
let state = amount < 10 ? "small" : "Large";

console.log(`hey ${amount} is ${state}`);

//maps
const people = [
  { name: 'John', age: 25, position: 'Dev' },
  { name: 'Mary', age: 34, position: 'Des' },
]

const newPeople = people.map(person => {
  return {
    firstName: person.name.toUpperCase(),
    age: `${person.age} Years`
  }
})

console.log(newPeople);

//timing events in js
console.log(__dirname);
let printing = setInterval(() => console.log("Finally Node JS"), 200)

setTimeout(() => {
  clearInterval((printing));
}, 1200);

