//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Queen', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Who', 'Anthrax'];

// Function to sort band names without articles
function sortBandNames(bandNames) {
    const articles = /^(a |an |the )/i;
    return bandNames.sort((a, b) => {
        const aName = a.replace(articles, '');
        const bName = b.replace(articles, '');
        return aName.localeCompare(bName);
    });
}

// Sorting the band names
let sortedBandNames = sortBandNames(bandNames);

// Displaying the sorted band names
let ul = document.getElementById('band');
sortedBandNames.forEach(name => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
});


