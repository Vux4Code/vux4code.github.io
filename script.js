var factAboutVux = [
    "1 + 1 = 2",
    "2 + 2 = 4",
    "4 + 1 = 5",
    "5 * 2 = 10",
    "2 ^ 2 = 4",
    "1 - 1 = 0"
];
function randomFact () {
    var randomIndex = Math.floor(Math.random () * factAboutVux.length);
    var randomSentence = factAboutVux [randomIndex];
    alert (randomSentence + ", wow!");
}
