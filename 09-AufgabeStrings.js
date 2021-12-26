"use strict"

let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "

// let shopping = shopping.trim()

//console.log(shopping)
//console.log(shopping.indexOf("M"))
//console.log(shopping.slice(4, 20) + " " + shopping.slice(24))
//console.log(shopping.substr(4, 17)+ shopping.substr(24,100))
//console.log(shopping.replace("+++", ""))


//let einkaufsliste = "Meine Einkaufsliste:\n" + "- " + shopping.slice(4, 9) + "\n" + "- " + shopping.slice(24, 31) + "\n" + "- " + shopping.slice(11, 19) +"\n" + "- " + shopping.slice(33, 38)
//oder:
let einkaufsliste = "Meine Einkaufsliste:\n" + "- " + shopping.trim().replace(",", "\n-").replace("+++", "", ",", "\n-").replace(",", "\n-").replace(",", "\n-")
console.log(einkaufsliste)
