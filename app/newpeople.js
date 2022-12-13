import people from "./users.js";
console.log(people);

const result = people.filter((people) => people.age > 27);

console.log(result);

const peopleNames = people.filter((person) => person.name.startsWith("J"));

console.log(peopleNames);

const greetings = people.map((person) => `${person.salutation}${person.name}`);
console.log(greetings);

function createBioCard(person) {
  return `
    <p>${person.salutation} ${person.name} is ${person.age} years old.</p>
  `;
}

const firstBioCard = createBioCard(people[0]);
console.log(firstBioCard);

const biocardHTML = people.map(createBioCard).join("\n");
console.log(biocardHTML);
