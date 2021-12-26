"use strict"

let dayOfMonth = (new Date()).getDate()

let monthName = (new Date()).toLocaleString(["de", "en"], {month: "long"})

let year1 = (new Date()).getFullYear()

let year2 = (new Date()).toLocaleString(["de", "en" ], {year: "numeric"})

console.log (">>> Heute ist der " + dayOfMonth + ". " + monthName + " " + year1 + " <<<")

 
//1: Zahl

