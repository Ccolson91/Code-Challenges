// parameters given p0, percent, aug(inhabitants coming or leaving each year), p(popultion to surpass)

//aug is an integer, percent is a positive or null floating number, p0 and p are positive integers(>0)

// write a function nbYear 
// return a number of entire years needed to get a population greater or equal to p.

// dont forget to convert percent parameters as a percentage in body of function (if percent param is 2 convert to 0.02)

function nbYear(p0, percent, aug, p) {
const popStart = p0
const percentMultiplier = percent / 100
let popTotal = popStart + popStart*percentMultiplier + aug
const n = 
}

nbYear(1500, 5, 100, 5000)