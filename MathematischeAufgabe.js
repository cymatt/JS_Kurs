"use strict"

let RechnungStr = "52,23", GegebenStr = "60,00"

let Rechnung = parseFloat(RechnungStr.replace(",", ".") * 100), Gegeben = parseFloat(GegebenStr.replace(",", ".") * 100)

let amount = Gegeben - Rechnung

let amountStr = amount /100
let amountStr1 = amountStr.toString().replace(".", ",")


console.log("Rechnung: " + RechnungStr + " €" + "\n" + "Gegeben: " + GegebenStr + " €" + "\n" + "Rückgabe: " + amountStr1 + " €\n" + "- " + Math.floor(amount / 200) + " x 2€ Münze(n)")

amount = amount - Math.floor(amount / 200) * 200

console.log("- " + Math.floor(amount / 100) + " x 1€ Münze(n)")
amount = amount - Math.floor(amount / 100) * 100

console.log("- " + Math.floor(amount / 50) + " x 50ct Münze(n)")
amount = amount - Math.floor(amount / 50) * 50

console.log("- " + Math.floor(amount / 10) + " x 10ct Münze(n)")
amount = amount - Math.floor(amount / 10) * 10

console.log("- " + Math.floor(amount / 1) + " x 1ct Münze(n)")
amount = amount - Math.floor(amount / 1) * 1

console.log(amount)






