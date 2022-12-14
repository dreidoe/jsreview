import bios from "./users.js";

function createBioCard(bio) {
  return `
    <p>${bio.name} ${bio.username} ${bio.email} from ${bio.address.city}<br> ${bio.phone}  ${bio.company.catchPhrase}  </p>
  `;
}

const firstBioCard = createBioCard(bios[0]);
console.log(bios);

// const allNewBioCards = bios.map(firstBioCard);
console.log(firstBioCard);

const allBioCards = bios.map(createBioCard);

console.log(allBioCards);
