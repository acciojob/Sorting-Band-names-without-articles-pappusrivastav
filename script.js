//your code here
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

// // Displaying the sorted band names
// let ul = document.getElementById('bands');
// sortedBandNames.forEach(name => {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(name));
//     ul.appendChild(li);
// });

// Let bandNames - ['The Rolling Stone', "Led Zeppelin', 'Aerosmith', "The Beatles',
// /1 Function to remove articles and return the modified band name
// 5v function removeArticles (name) f
// return name. replace(/^(a Jan |the )/i, ).trim;
// 口
// 7
// $
// 11 Remove articles from all band names
// 10
// let modifiedBandNames = bandNames. map(removeArticles):
// 11
// 12
// 13
// I Sort the modified band names lexicographically modifiedBandNames. sort();
// 14
// 15
// 16
// 17
// I Create an ul element with id "band"
// Let ulElement = document. createElement(ul');
// ulELement. id = "band':
// 18
// 19
// 21
// 22
// 23
// 11. Add li
// elements to the ut element
// 20 v modifiedBandNames. for Each(function (bandName) {
// let LiElement document.createElement(li');
// liElement. textContent = bandName;
// ulElement. appendchild(liElement):
// 24
// 25
// 26
// 27
// 11 Append the ul element to the document body or any desired location document. body appendchild(ulElement);

Let bandNames = ['The Rolling Stone', "Led Zeppelin', 'Aerosmith', "The Beatles',
/ Function to remove articles and return the modified band name function
removeArticles (name) {
return name.replace(/(a Jan |the )/f, ).trim);
}
11 Remove articles from all band names
let modifiedBandNames = bandNames. map(removeArticles);
I Sort the modified band names lexicographically modifiedBandNames. sort();
It Create an ul element with id band"
let ulElement = document. createElement (ul);
ulElement. id = "band';
Il Add li elements to the ul element
modifiedBandNames. for Each (function (bandName) f
Let LiElement - document. createElement(li);
liElement. textContent = bandName;
ulElement. appendchild(liElement);
11 Append the ul element to the document body or any desired location document. body•appendChild(ulElement);