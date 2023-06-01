
// EJERCICIO 1
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10.

console.log("**************EJERCICIO 1*****************");

//Resuelto con funcion declarada:
// function contarCaracteres(cadena = "") {
//   if (!cadena) {
//     console.warn("No ingresaste ninguna cadena");
//   } else {
//     console.info(`La cadena tiene "${cadena}" tiene ${cadena.length} caracteres.`);
//   }
// } esto es lo mismo que lo de abajo;


//Resuelto con funcion expresada:
const contarCaracteres = (cadena = "") =>
  (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena tiene "${cadena}" tiene ${cadena.length} caracteres.`);

contarCaracteres();
contarCaracteres(123);
contarCaracteres("Hola mundo");



// EJERCICIO 2
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá 4.
console.log("**************EJERCICIO 2*****************");

const textoRecortado = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : (longitud === undefined)
    ? console.warn("No ingresaste la longitud para recortar la cadena")
    : console.info(cadena.slice(0, longitud))
    
textoRecortado("Hola Mundo", 4);
textoRecortado("Hola Mundo", 3);
textoRecortado("Hola Mundo", 1);
textoRecortado();
textoRecortado("hola hola");
textoRecortado("", 5);
    


//EJERCICIO 3
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFunción('hola que tal', ' ') devolverá ['hola','que','tal']

console.log("**************EJERCICIO 3*****************");
    
const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena")
      : (separador === undefined)
        ? console.warn("No ingresaste un caracter separador")
        : console.info(cadena.split(separador));

cadenaAArreglo("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum praesentiuplaceat similique? Quidem vero quas velit nihil aliquid veritatis saepe eos rerum praesentiucorporis, beatae eum aperiam, quis, debitis placeat.", " ");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic");
cadenaAArreglo("", " ");

//EJERCICIO 4
//4) Programa una función que repita un texto X veces, pe. miFunción('Hola Mundo', 3) devolverá 'Hola Mundo Hola Mundo Hola Mundo'.
console.log("**************EJERCICIO 4*****************");



const repetirCadena = (cadena = "", repeticiones = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena")
    : (repeticiones === undefined)
      ? console.warn("No ingresaste un numero de repeticiones")
      : console.info(cadena.repeat(repeticiones));

repetirCadena("Hola Mundo ", 3);
repetirCadena("", 3);
repetirCadena("Hola Mundo ", );
  

// const repetirTexto = (texto = "", veces = undefined) => {
//   if (!texto) {
//     return console.warn("No ingresaste un texto");
//   } else if (veces === undefined) {
//     return console.warn("No ingresaste un numero de veces");
//   } else {
//     return console.info(texto.repeat(veces));
//   }
// }

// repetirTexto("HOla Mundo ", 5)

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined) return console.warn("No ingresaste un número de veces");

  if (veces === 0) return console.error("El número de veces no puede ser 0");

  if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("Hola Mundo", 3);
repetirTexto("Hola Mundo", 0);
repetirTexto("Hola Mundo", -10);
repetirTexto("", 10);
repetirTexto("HOla mundo", );



//EJERCICIO 5
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.log("**************EJERCICIO 5*****************");

const revertirTexto = (texto = "") =>
  (!texto)
    ? console.warn("No ingresaste un texto")
    : console.info(texto.split("").reverse().join("")); // con split convertimos cada palabra en un array, luego reverse invierte estos arrays y join los vuelve a juntar en una string.

// const revertirTexto = (texto = "") => {
//   if (!texto) {
//     return console.warn("No igresaste un texto");
//   } else {
//     return console.info(texto.split("").reverse().join(""));
//   }
// }

revertirTexto("Hola mundo")
revertirTexto("")
revertirTexto("Sugus")



//EJERCICIO 6 
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.log("**************EJERCICIO 6*****************");
// PRACTICAR UN POCO MAS WHILE!!!!

const contarPalabras = (texto = "", palabra = "") => {
  if (!texto) return console.warn("No ingresaste un texto");
  if (!palabra) return console.warn("No ingresaste una palabra");
  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = texto.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra "${palabra}" se repite ${contador} veces.`);
}

contarPalabras("Hola mundo, adios mundo", "mundo");
contarPalabras("Hola mundo, adios mundo mundo mundo mundo mundo", "mundo");



//EJERCICIO 7
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log("**************EJERCICIO 7*****************");

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("no ingresaste una palabra");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return (palabra === alReves)
    ? console.info(`la palabra "${palabra}" es palíndromo`)
    : console.info(`la palabra "${palabra}" no es palíndromo`)
}

palindromo("");
palindromo("Hola mundo");
palindromo("sugus");
palindromo("Sugus");



//EJERCICIO 8
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.log("**************EJERCICIO 8*****************");

const eliminarCaracteres = (texto = "", patron = "") =>
  (!texto) 
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingresaste un patrón")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""))
      
eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz 3, xyz4");
eliminarCaracteres("xyz1, xyz2, xyz 3, xyz4", "xyz");
eliminarCaracteres("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae pariatur voluptatem ut numquam veniam, debitis ea aspernatur ipsam tenetur necessitatibus, quo minima ratione dolore voluptatibus reiciendis quod inventore! Pariatur, minima.", "o");
eliminarCaracteres("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae pariatur voluptatem ut numquam veniam, debitis ea aspernatur ipsam tenetur necessitatibus, quo minima ratione dolore voluptatibus reiciendis quod inventore! Pariatur, minima.", "[a-z]"); //"[a-z]" significa la expresión regular que señala a cualquier letra del alfabeto.



//EJERCICIO 9
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.log("**************EJERCICIO 9*****************");


const numeroRandom = () => console.info(Math.round(Math.random()* 100 + 500));

numeroRandom();
numeroRandom();
numeroRandom();
numeroRandom();



//EJERCICIO 10
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
console.log("**************EJERCICIO 10*****************");

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number") return console.error(`el valor ${numero} ingresado, NO es un número`);

  numero = numero.toString();
  let alReves2 = numero.split("").reverse().join("");

  return (numero === alReves2)
    ? console.info(`Sí es capicúa, Número original ${numero}, Número al revés ${alReves2}`)
    : console.info(`No es capicúa, Número original ${numero}, Número al revés ${alReves2}`)
}


capicua();
capicua("901");
capicua(2000);
capicua(2002);
capicua(18.99);
capicua(18.81);



//EJERCICIO 11
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
console.log("**************EJERCICIO 11*****************");

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number") return console.error(`El valor "${numero} ingresado, No es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial();
factorial("12");
factorial(0);
factorial(-10);
factorial(5);
factorial(20);

//EJERCICIO 12
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
console.log("**************EJERCICIO 12*****************");

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number") return console.error(`El valor "${numero} ingresado, No es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");
  
  if (numero === 1) return console.error("El número no puede ser 1");

  if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if ((numero % i) === 0) {
      divisible = true;
      break;
    }
  }
  return (divisible)
    ? console.log(`El número ${numero}, No es primo`)
    : console.log(`El número ${numero}, Sí es primo`);
}

numeroPrimo();
numeroPrimo("340");
numeroPrimo(0);
numeroPrimo(-2);
numeroPrimo(13);
numeroPrimo(200);



//EJERCICIO 13
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
console.log("**************EJERCICIO 13*****************");

const parOImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number") return console.error(`El valor "${numero} ingresado, No es un número`);

  return ((numero % 2) === 0)
    ? console.info(`El número ${numero} es Par`)
    : console.info(`El número ${numero} es Impar`);
}

parOImpar();
parOImpar(true);
parOImpar(0);
parOImpar(2);
parOImpar(3);



//EJERCICIO 14
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
console.log("**************EJERCICIO 14*****************");

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn("No ingresaste grados a convertir");
  
  if (typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, No es un número`);
  
  if (unidad === undefined) return console.warn("No ingresaste el tipo de grados a convertir");
  
  if (typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, No es una cadena de texto`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round((grados * (9 / 5) + 32))}°F`);
  }

  if (unidad === "F") {
    return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`)
  }
}

convertirGrados();
convertirGrados("2");
convertirGrados(2, );
convertirGrados(2, 2);
convertirGrados(2, "E");
convertirGrados(0, "C");
convertirGrados(100, "C");
convertirGrados(230, "F");
convertirGrados(32, "F");


//EJERCICIO 15
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
console.log("**************EJERCICIO 15*****************");

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste el número a convertir");

  if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (base === undefined) return console.warn("No ingresaste la base a convertir");

  if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un número`);

  if (base === 2) {
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  } else if (base === 10) {
    return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`);
  } else {
    return console.error("El tipo de base a convertir NO es válido");
  }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, true);
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);



//EJERCICIO 16
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
console.log("**************EJERCICIO 16*****************");

const aplicarDescuento = (cantidad = undefined, descuento = 0) => {
  if (cantidad === undefined) return console.warn("No ingresaste una cantidad");
  
  if (typeof cantidad !== "number") return console.error(`El valor "${cantidad}" ingresado, NO es un número`);

  if (Math.sign(cantidad) === -1 || Math.sign(cantidad) === 0) return console.error("El valor de cantidad no puede ser 0 ni negativo");
  
  if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número`);
  
  if (Math.sign(descuento) === -1) return console.error("El valor de descuento no puede ser negativo");

  return console.info(`El descuento de "%${descuento}" en los "$${cantidad}" aplicado, da un precio total de "$${(cantidad - (cantidad * (descuento * 0.01)))}"`)

  // return console.info(`${cantidad} - ${descuento}% = ${cantidad - ((cantidad * descuento) / 100)}`)
}

aplicarDescuento(20,"10");
aplicarDescuento(-100, 20);
aplicarDescuento(100, -20);
aplicarDescuento(0, -20);
aplicarDescuento(2000, 0);
aplicarDescuento(2000, 10);
aplicarDescuento(1000, 25);



//EJERCICIO 17
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
console.log("**************EJERCICIO 17*****************");

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste fecha");

  if (!(fecha instanceof Date)) return console.error(`El valor "${fecha} ingresado, NO es una fecha válida`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365, //ms que transcurren en un año
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  
  return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, désde ${fecha.getFullYear()}.`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

calcularAnios();
calcularAnios({});
calcularAnios(new Date());
calcularAnios(new Date(1984,4,23));
calcularAnios(new Date(1884,4,23));
calcularAnios(new Date(1995,6,4));
calcularAnios(new Date(2033,4,23));


//EJERCICIO 18
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
console.log("**************EJERCICIO 18*****************");

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");

  if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);

  let vocales = 0,
    consonantes = 0;
  
  cadena = cadena.toLocaleLowerCase();
  
  for (const letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;

    if (/[bcdfhgjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    cadena,
    vocales,
    consonantes
  })
}

contarLetras();
contarLetras(3);
contarLetras("Hola mundo");
contarLetras("Ñoño");
contarLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate in laborum voluptates provident ab possimus esse est architecto laboriosam laudantium minus molestiae ea quisquam beatae, inventore aspernatur sunt quibusdam?");



//EJERCICIO 19
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
console.log("**************EJERCICIO 19*****************");

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");

  if (typeof nombre !== "string") return console.error(`El valor "${nombre} ingresado, NO es una cadena de texto`);

  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  return (expReg)
    ? console.info(`"${nombre}" ingresado, es un nombre válido`)
    : console.warn(`"${nombre}" ingresado, NO es válido`);
}

validarNombre();
validarNombre(123);
validarNombre("Joanathan");
validarNombre("Joanathan Mircha");
validarNombre("Joanathan Mircha 35");



//EJERCICIO 20
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
console.log("**************EJERCICIO 20*****************");

const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");

  if (typeof email !== "string") return console.error(`El valor "${email} ingresado, NO es una cadena de texto`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return (expReg)
    ? console.info(`"${email}" ingresado, es un email válido`)
    : console.warn(`"${email}" ingresado, NO es válido`);
}

validarEmail();
validarEmail(123);
validarEmail("Jonathan");
validarEmail("joa,cobal,erdi@gmail");
validarEmail("joacobalerdi@gmail.com");




/*Fusión 19 y 20*/
console.info("***************Fusión Ejercicio 19 y 20******************");

const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");

  if (typeof cadena !== "string") return console.error(`El valor "${cadena} ingresado, NO es una cadena de texto`);

  if (patron === undefined) return console.warn("No ingresaste un patron a evaluar");

  if (!(patron instanceof RegExp)) return console.error(`El valor "${patron} ingresado, NO es una expresion regular`);

  let expReg = patron.test(cadena);

  return (expReg)
    ? console.info(`"${cadena}" cumple con el patron ingresado`)
    : console.warn(`"${cadena}" NO cumple con el patron ingresado`);
}


validarPatron("jonathan", "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g");
validarPatron("jonathan", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron("joaquinbalerdi@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);


//EJERCICIO 21
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
console.log("**************EJERCICIO 21*****************");

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número"`);
  }

  const newArr = arr.map(el => el * el);

  return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, "3", 4, {}]);
devolverCuadrados([1, 4, {}]);
devolverCuadrados([1, 4, 8]);


//EJERCICIO 22
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
console.log("**************EJERCICIO 22*****************");

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío")

  for (const num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número"`);
  }

  return console.info(`Arreglo original: "${arr}".\nValor mayor: "${Math.max(...arr)}".\nValor menor: "${Math.min(...arr)}"`);
}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,4,6,23,-5,1]);

//EJERCICIO 23
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
console.log("**************EJERCICIO 23*****************");

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío")

  for (const num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número"`);
  }

  return console.info({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })
}

separarParesImpares();
separarParesImpares("hola");
separarParesImpares([]);
separarParesImpares([1,"3"]);
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);


//EJERCICIO 24
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
console.log("**************EJERCICIO 24*****************");

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número"`);
  }

  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()
  });
}

ordenarArreglo();
ordenarArreglo("Hola");
ordenarArreglo([]);
ordenarArreglo([1,2,5,"4",3]);
ordenarArreglo([2,1,5,4,3]);


//EJERCICIO 25
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
console.log("**************EJERCICIO 25*****************");

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglod e números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");
  
  if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");

  // return console.info({
  //   original: arr,
  //   sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  // });

   return console.info({
    original: arr,
    sinDuplicados: [... new Set(arr)]
  });
}
  
quitarDuplicados();
quitarDuplicados("hola");
quitarDuplicados([]);
quitarDuplicados([2, 10, "x", 10,"x", 1, 2, "c"]);



//EJERCICIO 26
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
console.log("**************EJERCICIO 26*****************");

const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacío");

  for (const num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número"`);
  }

  console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  )
}

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1,2,3,4,5,6,7,8,9,0]);
promedio([1,2,3,4,5]);


//EJERCICIO 27
// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//     - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//        7 restantes números.
//     - Valida que el título no rebase los 100 caracteres.
//     - Valida que el director no rebase los 50 caracteres.
//     - Valida que el año de estreno sea un número entero de 4 dígitos.
//     - Valida que el país o paises sea introducidos en forma de arreglo.
//     - Valida que los géneros sean introducidos en forma de arreglo.
//     - Valida que los géneros introducidos esten dentro de los géneros 
//        aceptados*.
//     - Crea un método estático que devuelva los géneros aceptados*.
//     - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//        decimal de una posición.
//     - Crea un método que devuelva toda la ficha técnica de la película.
//                - Apartir de un arreglo con la información de 3 películas genera 3 
//                   instancias de la clase de forma automatizada e imprime la ficha técnica 
//                   de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
console.log("**************EJERCICIO 27*****************");


class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
    
  }

  static get listaGeneros () {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime","Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
  }

  static generosAceptados() {
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

    if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los 7 restantes números.`);
      }
    }
  }
  
  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) 
      this.validarLongitudCadena("Título", titulo, 100);
  }
  
  validarDirector(director) {
    if (this.validarCadena("Director", director)) 
      this.validarLongitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno))
      if (!(/^([0-9]){4}$/.test(estreno)))
        return console.error(`Año de Estreno "${estreno}" no es válido, debe ser un número de 4 dígitos`);
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (const genero of generos) {
        // console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return (calificacion < 0 || calificacion > 10)
        ? console.error(`La calificación tiene que estar entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
  }

  fichaTecnica() {
    console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector:"${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGénero/s: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB ID: "${this.id}"`)
  }
}



  // Pelicula.generosAceptados();
  // const peli = new Pelicula({
  //   id: "tt1234567",
  //   titulo: "Título de la Peli",
  //   director: "Director de la Peli",
  //   estreno: 2222,
  //   pais: ["Argentina", "Cordoba"],
  //   generos: ["Comedy","Humor Negro", "Thriller", "Sport"],
  //   calificacion: 7.789
  // });

  // peli.fichaTecnica();


  const misPelis = [
    {
      id: "tt1234567",
      titulo: "Into the Wild",
      director:"Sean Penn",
      estreno:2007,
      pais:["USA"],
      generos:["Adventure","Biography","Drama"],
      calificacion:8.1
    },
    {
      id: "tt7654321",
      titulo: "Rocky Balboa",
      director:"Sylvester Stallone",
      estreno:2006,
      pais:["USA"],
      generos:["Action","Drama","Sport"],
      calificacion:7.1
    },
    {
      id: "tt0123789",
      titulo: "The Dark Knight",
      director:"Christopher Nolan",
      estreno:2008,
      pais:["USA","UK"],
      generos:["Action","Crime","Drama"],
      calificacion:9.0
    }
  ];

  misPelis.forEach(el => new Pelicula(el).fichaTecnica());