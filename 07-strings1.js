"use strict"

let greetings = " ---Hallo Welt!--- "

//Anzahl der Zeichen abfragen
console.log(greetings.length)

//Jedes einzelne Zeichen abfragen
console.log(greetings.charAt(5))
console.log(greetings[6])

//Wo findet sich ein Zeichen im String
console.log(greetings.indexOf("e"))


//Großbuchstaben u. Kleinbuchstaben
console.log(greetings.toLocaleUpperCase())

//Texte ersetzen
console.log(greetings.replace("!", "???"))

//Zeichen rechts und links vom String entfernen

console.log(greetings.trim())