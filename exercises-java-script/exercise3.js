console.log('Executing external script made with JS');

// 3) ARRAYS

/* A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]

console.log('Month 5', calendar[4])
console.log('Month 11', calendar[10])

// B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]

console.log('In Alphabetical Order', calendar.sort())

// C) Agregar un elemento al principio y al final del array (utilizar unshift y push)

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]
var lastYear = calendar.unshift('2020')
var currentYear = calendar.push('2021')

console.log('Years Added', lastYear, calendar, currentYear)

// D) Quitar un elemento del principio y del final del array (utilizar shift y pop)

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]
var newCalendar00 = calendar.shift()
var newCalendar01 = calendar.pop()

console.log('First and Last Elements Removed', newCalendar00, calendar, newCalendar01)

// E) Invertir el orden del array (utilizar reverse)

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]

console.log('Reverse', calendar.reverse())

// F) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join)

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]
var newCalendar02 = (calendar.join('-'))

console.log('Separated by a dash', newCalendar02)

// G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */

var calendar = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"]
var newCalendar03 = (calendar.slice(4,11))

console.log('From May to November', newCalendar03)