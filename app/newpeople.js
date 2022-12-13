import people from "./user.js";
console.log(people);

const result = people.filter((people) => people.age > 27);

console.log(result);

const peopleNames = people.filter((person) => person.name.startsWith("J"));

console.log(peopleNames);

const greetings = people.map((person) => `${person.salutation}${person.name}`);
console.log(greetings);
