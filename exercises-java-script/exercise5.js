console.log('Executing external script made with JS');

// 5) FOR

/* A) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras. */

var computerSystem = ['hardward', 'software', 'procedures', 'data', 'connectivity']
for (var element of computerSystem) {
    alert(element);
}

/* B) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
modificada. */

var computerSystem = ['hardward', 'software', 'procedures', 'data', 'connectivity']
for (var element of computerSystem) {
    alert(element.substring(0, 1).toUpperCase() + element.slice(1).toLowerCase());
}

/* C) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
cadena completa. */

var computerSystem = ['hardward', 'software', 'procedures', 'data', 'connectivity']
var sentence = ""
for (var element in computerSystem) {
    var sentence = sentence + computerSystem[element] + " "
}
    alert(sentence)

/* D) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0
hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log) */

var newArray = []
for (var i = 0; i <= 9; i++) {
    newArray.push(i)
}
    console.log(newArray)