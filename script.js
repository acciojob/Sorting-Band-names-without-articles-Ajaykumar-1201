//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

touristSpots.sort((a, b) => {
  const nameA = removeArticle(a).toLowerCase();
  const nameB = removeArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

console.log(touristSpots);