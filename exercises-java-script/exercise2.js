console.log('Executing external script made with JS');

// 2) STRINGS //

/* A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase) */

var title = 'Introduction of Static Websites';
var title01 = title.toUpperCase();
console.log('Title', title01);

/* B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring) */

var str = 'Introduction';
console.log('first5CharactersOfIntroduction', str.substring(0, 5));

/* C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring) */

var str = 'Introduction';
console.log('last3CharactersOfIntroduction', str.slice(-3));

/* D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +) */

var str01 = 'documentation';
var str02 = (str01.substring(0, 1));
var str03 = (str01.slice(1));
var letterChanges = (str02.toUpperCase() + str03.toLowerCase());
console.log('letterChanges', letterChanges);

/* E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable */

var subtitle = 'First Example';
var blankSpace = subtitle.indexOf ('Example');
console.log('BlankSpaceInFirstExample', blankSpace);

/* F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
el operador +) */

var sentence = 'recommended maintenance'
var sentencePart1 = 'recommended'
var sentencePart2 = 'maintenance'

var sentence00 = sentencePart1.substring(0,1).toUpperCase() + sentencePart1.substring(1).toLowerCase();
var sentence01 = sentencePart2.substring(0,1).toUpperCase() + sentencePart2.substring(1).toLowerCase();

console.log('SenteceWithUpperAndLowerCase', sentence00, sentence01)