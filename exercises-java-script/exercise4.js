console.log('Executing external script made with JS');

// 4) IF ELSE

/* A) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */

var duration = Math.random();
if (duration >= 0,5) {
    console.log('Greater than 0,5');
} else {
    console.log('Lower than 0,5');
}

// B) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

var age = 35
// i) “Bebe” si la edad es menor a 2 años
if (age < 2) {
    alert('Baby')

// ii) “Niño” si la edad es entre 2 y 12 años
} else if ((age >= 2) & (age <= 12)) {
    alert('Niño')

// iii) “Adolecente” si la edad es entre 13 y 19 años
} else if ((age >= 13) & (age <= 19)) {
    alert('Adolescente')

// iv) “Joven” si la edad está entre 20 y 30 años
} else if ((age >= 20) & (age <= 30)) {
    alert('Joven')

// v) “Adulto” entre 31 y 60 años
} else if ((age >= 31) & (age <= 60)) {
    alert('Adulto')

// vi) “Adulto mayor” entre 61 y 75 años
} else if ((age >= 61) & (age <= 75)) {
    alert('Adulto mayor')

// vii) “Anciano” si es mayor a 75 años
} else if (age > 75) {
    alert('Anciano')
}