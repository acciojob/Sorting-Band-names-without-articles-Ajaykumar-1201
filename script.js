// Your array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Nirvana'];

// Function to remove articles from band names
function removeArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names
bandNames.sort((a, b) => {
  const nameA = removeArticle(a).toLowerCase();
  const nameB = removeArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Get the ul element by its ID
const bandList = document.getElementById('band');

// Populate the ul element with sorted band names
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});
