// //your code here
// let bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Queen', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Who', 'Anthrax'];

// // Function to sort band names without articles
// function sortBandNames(bandNames) {
//     const articles = /^(a |an |the )/i;
//     return bandNames.sort((a, b) => {
//         const aName = a.replace(articles, '');
//         const bName = b.replace(articles, '');
//         return aName.localeCompare(bName);
//     });
// }

// // Sorting the band names
// let sortedBandNames = sortBandNames(bandNames);

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

// Adding the sorted band names to the ul with id 'bands'
const ul = document.querySelector('#bands');
sortedBandNames.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
