// exo1

// let addition = (a,b) => {
//     return a + b
// }
// console.log(addition(10, 5));

// exo2

// let soust = (a,b) => {
//     return a - b
// }
// console.log(soust(10, 5));

// exo3

// let mult = (a,b) => {
//     return a * b
// }
// console.log(mult(10, 5));

// exo4

// let div = (a,b) => {
//     return a / b
// }
// console.log(div(10, 5));

// exo5

// let mod = (a,b) => {
//     return a % b
// }
// console.log(mod(10, 5));


// exo6

// let carrer = (a) => {
//     return a*a
// }
// console.log(carrer(5));

// exo7

// let addition = (a,b) => {
//     return (Math.pow(a, b))
// }
// console.log(addition(5, 3));

// exo8

// let capitalize = (a) => {
//     return (a + "").charAt(0).toUpperCase()+a.substr(1).toLowerCase()
// }
// console.log(capitalize("abdel"))

// exo9

let calcul = (nbr1, operator, nbr2) => {
     
    switch (operator) {
        case "+" :
        return `${nbr1 + nbr2}`
        case "-" :
        return `${nbr1 - nbr2}`
        case "*" :
        return `${nbr1 * nbr2}`
        case "/" :
        return `${nbr1 / nbr2}`
        default:
        return  "erreur"
    }
}
console.log(calcul(10, "/", 5));
