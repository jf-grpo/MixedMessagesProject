/* This file is used to create code for my Mixed Messages code project for Codecademy
*/


var quotes = [
    {quote: "Take delight in the LORD and he will give you the desires of your heart", author:"Psalms 37:4"},
   {quote: "Surely I was sinful at birth, sinful from the time my mother conceived me.", author:"Psalms 51:5"},
   {quote: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. ", author: "Psalms 91:1 "},
    {quote: "In the beginning was the Word, and the Word was with God, and the Word was God.", author:"John 1:1"},
   {quote: "For all have sinned and fall short of the glory of God", author:"Romans 3:23 "},
   {quote: "For it is by grace you have been saved, through faith – and this is not from yourselves, it is the gift of God  ",         author: "Ephesians 2:8"},
    {quote: "Trust in the LORD with all your heart and lean not on your own understanding ", author:"Proverbs 3:5"},
   {quote: "Above all else, guard your heart, for everything you do flows from it.", author:"Proverbs 4:23"},
   {quote: "A cheerful heart is good medicine, but a crushed spirit dries up the bones.", author: "Proverbs 17:22"},
    {quote: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God – this is true worship.", author:"Romans 12:1"},
   {quote: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.", author:"John 10:10"},
   {quote: "But if serving the LORD seems undesirable to you, then choose for yourselves this day whom you will serve, whether the gods your ancestors served beyond the Euphrates, or the gods of the Amorites, in whose land you are living. But as for me and my household, we will serve the LORD.", author: "Joshua 24:15"},
    {quote: "But as for me and my household, we will serve the LORD.", author: "Joshua 24:15c"}
  ];

function newVerse() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
}

document.getElementById('verseDisplay').innerHTML = quotes[randomNumber];
console.log(randomNumber);
