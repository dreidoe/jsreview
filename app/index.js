import bios from "./users.js";

function createBioCard(bio) {
  return `
    <p>${bio.name} <br>${bio.username} <br> ${bio.email}<br> from ${bio.city}<br> ${bio.phone} <br> ${bio.catchPhrase}  </p>
  `;
}

const firstBioCard = createBioCard(bios[0]);
console.log(bios);

// const allNewBioCards = bios.map(firstBioCard);
console.log(firstBioCard);

const allBioCards = bios.map(createBioCard);

console.log(allBioCards);
