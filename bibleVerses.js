/* This file is used to create code for my Mixed Messages code project for Codecademy
*/


var verses = [
    "Take delight in the LORD and he will give you the desires of your heart, Psalms 37:4",
    "Surely I was sinful at birth, sinful from the time my mother conceived me, Psalms 51:5",
    "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty, Psalms 91:1 ",
    "In the beginning was the Word, and the Word was with God, and the Word was God, John 1:1",
    "For all have sinned and fall short of the glory of God, Romans 3:23 ",
    "For it is by grace you have been saved, through faith – and this is not from yourselves, it is the gift of God, Ephesians 2:8",
    "Trust in the LORD with all your heart and lean not on your own understanding, Proverbs 3:5",
    "Above all else, guard your heart, for everything you do flows from it, Proverbs 4:23",
    "A cheerful heart is good medicine, but a crushed spirit dries up the bones, Proverbs 17:22",
    "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God – this is true worship, Romans 12:1",
    "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full. John 10:10",
    "But if serving the LORD seems undesirable to you, then choose for yourselves this day whom you will serve, whether the gods your ancestors served beyond the Euphrates, or the gods of the Amorites, in whose land you are living. But as for me and my household, we will serve the LORD. Joshua 24:15",
    "But as for me and my household, we will serve the LORD. Joshua 24:15c"
  ];

function newVerse() {
    var randomNumber = Math.floor(Math.random() * (verses.length));
    document.getElementById('verseDisplay').innerHTML = verses[randomNumber];
}
