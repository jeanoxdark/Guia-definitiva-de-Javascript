
html,css,js,nodejs,express,npm,react,sql

//1
const contarCaracteres = (cadena = "") =>
(!cadena) 
? console.log(`No ingresaste nada`) 
: console.log(`la cantidad de caracteres es "${cadena.length}"`); 
//Si no mandas nada la cadena esta vacia por defecto, si no hay cadena entonces no ingresaste nada, si no , imprime la cantidad
contarCaracteres();





//2
const recortarTexto = (cadena = "", longitud = undefined) => 
(!cadena) 
? console.log("No ingresaste nada")
: (longitud === undefined)
? console.log("No colocaste una longitud")
: console.log(`El caracter recortado es`, cadena.slice(0,longitud));

recortarTexto("Hola Mundo", 4); 





//3
const separar = (cadena = "", separador = undefined) =>
(!cadena)
? console.log("No ingresaste nada")
: (separador === undefined)
? console.log("No ingresaste ningun separador")
: console.log(`Las palabras separadas son ${cadena.split(separador)}`) ;

separar("Coco loco esta muy loco", " ");





//4
const repetirTexto = (cadena = "", veces = undefined) => {
	if(!cadena){
		console.warn("No ingresaste nada");
	}
	if(veces === undefined){
		console.warn("no ingresaste las veces");
	}
	if(veces === 0){
		console.error("No puedes repetir 0 veces");
	}
	if(Math.sign(veces) === -1){
		console.error("No puedes repetir el string negativas veces");
	}
	for(let i = 0; i < veces; i++){
		console.info(`el texto ${cadena} se repitio ${i} veces`)
	}
}

repetirTexto("Hola Mundo", 4);





//5
const invertirTexto = (cadena = "") =>
(!cadena) 
? console.log(`No ingresaste nada`)
: console.log(`"la cantidad de 'caracteres' es" ${cadena.split("").reverse().join("")}`); 

invertirTexto("Hola Mundo");





//6
const textoEnCadena = (cadena = "", texto = "") => {
	if(!cadena) return console.warn("No ingresaste el texto largo");

	if(!texto) return console.warn("No ingresaste la palabra a evaluar");

	let i = 0,//0,6,12,18
	 contador = 0;

	while(i !== -1){
	 i = cadena.indexOf(texto,i); // 5,11,17,-1
	 if(i !== -1){
		i++; 
		contador++; 
	 }
	}
	return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena("Hola Mundo Mundo Mundo", "Mundo");






//7
const palindromo = (palabra = "") => {
	if(!palabra) return console.warn("No ingresaste una palabra o frase");
	palabra = palabra.toLowerCase();
	(palabra == palabra.split("").reverse().join(""))// transforma en arreglo, luego invierto todo de atras para adelante y los uno todo en un string otra vez
	?console.info(`Palabra original ${palabra}, palabra al reves ${palabra.split("").reverse().join("")}`)
	:console.info(`No es palindromo,Palabra original ${palabra}, palabra al reves ${palabra.split("").reverse().join("")}`)
}
palindromo("Hola Mundo");
palindromo("salas");





//8
const reemplazar = (cadena = "",patron = "") => 
(!cadena) 
? console.warn("No ingresaste ninguna cadena")
: (!patron)
? console.warn("No ingresaste el patron")
: console.info(cadena.replace(new RegExp(patron,"ig"),""));
//Reemplaza la cadena en donde halla el patron indicado en la expresion regular de forma global con vacios, osea los borra 
reemplazar("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz");




//9
const aleatorio = () => console.info(Math.round((Math.random() * 100)+ 500)); 
aleatorio();





//10
const capicua = (numero = 0) => {
	if(!numero) return console.warn("No ingresaste un numero");

	if(typeof numero !== "number") return console.error(`el valor ingresado NO es un numero`);

	numero = numero.toString();
	let alReves = numero.split("").reverse().join("");
	(numero === alReves)
	? console.log(`El numero ${numero} es igual a ${alReves} es capicua`)
	: console.log(`El numero ${numero} no es igual a ${alReves} No es capicua`);
}
capicua(22);




//11
const factorial = (numero = undefined) =>{
	if(numero === undefined) return console.warn("No ingresaste un numero");
	if(typeof numero !== "number") return console.error(`el valor${numero} ingresado no es un numero`);
	if(numero === 0) return console.error("No existe factorial de 0");
	if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

	let factorial = 1;

	for(let i = numero; i > 1;i--){
		factorial *= i; 
	}
	return console.info(`el factorial de ${numero} es ${factorial}`);
}

factorial(10);





//12 // un numero primo es aquel que solo es divisible por si mismo y 1
const numerosPrimos = (numero = undefined) => {
	if(numero === undefined) return console.warn("No ingresaste un numero");
	if(typeof numero !== "number") return console.error(`el valor${numero} ingresado no es un numero`);
	if(numero === 0) return console.error("No existe primo de 0");
	if(numero === 1) return console.error("No existe primo de 1");
	if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");
	let divisible = false;

	for(let i = 2; i < numero; i++){
		if(numero % i === 0){
			divisible = true;
			break;
		}
	}
	return (divisible)
		? console.log(`el numero ${numero} no es primo`)
		: console.log(`El numero ${numero} si es primo`);
} 
numeroPrimo(20);
numeroPrimo(7);




//13
const numeroParImpar = (numero = undefined) =>{
	if(numero === undefined) return console.warn("No ingresaste un numero");
	if(typeof numero !== "number") return console.error(`el valor ${numero} ingresado no es un numero`);

	return (numero % 2 === 0)
	 ? console.info(`el numero ${numero} es Par`)
	 : console.info(`el numero ${numero} es Impar`);
}

numeroParImpar(-39);
numeroParImpar(23);





//14
const convertirGrados = (grados = undefined, unidad = undefined) => {
	if(grados === undefined) return console.warn("No ingresaste un numero");
	if(typeof grados !== "number") return console.error(`el valor ${grados} ingresado no es un numero`);
	if(unidad === undefined) return console.warn("No ingresaste un numero");
	if(typeof unidad !== "string") return console.error(`el valor ${unidad} ingresado no es un numero`);
	if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad invalido");

	if(unidad === "C") {
		return console.info(`${grados} C = ${Math.round(grados * (9/5) + 32)} F `);	
	} else if(unidad === "F"){
		return console.info(`${grados} F = ${Math.round(grados - 32) * (5/9)} C `)
	}
}
convertirGrados();
convertirGrados(2,"Hola");





//15





const transformarBinarioADecimal = (numero = undefined, base = undefined) => {
	if(!numero) return console.warn("No ingresaste un numero");
	if(!base) return console.warn("No hay base");
	if(typeof numero !== "number") return console.warn("No es un numero");
	if(typeof base !== "number") return console.warn("No es un numero");

	if(base == 2) {
		console.log(`${numero} base ${base} = ${parseInt(numero,2)}`);
	} else if(base == 10) {
		console.log(`${numero} base ${base} = ${numero.toString(2)}`);
	}else {
		console.log("No valido");
	}
}
transformarBinarioADecimal(145,10);
transformarBinarioADecimal(11011011,2);





//16
const descuento = (cantidad = undefined, descuento = 0) => {
	if(!cantidad) return console.warn("No ingresaste la cantidad");
	if(!descuento) return console.warn("No ingresaste la cantidad a descontar");
	if(cantidad === 0) return console.error("No puede ser 0 la cantidad");
	if(Math.sign(cantidad) === -1) return console.error("No puede ser numero negativo");
	if(Math.sign(descuento) === -1) return console.error("No puede ser negativo");

	let montoFinal = cantidad  * descuento / 100;
	return console.log(montoFinal);
}

descuento(10,5);




document.forms[0].elements[0].focus();




















//Analiza si hay coincidencias en ambos lados del array por cada elemento
function FindIntersection(input) { 

 //firstList        //secondList
  ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

  // code goes here  
  const [firstList, secondList] = input.map( s => s.split(", ") ); //agarra input.map que tiene el array y aplica la funcion que vuelve cada elemento en un nuevo array de cadena 

  const resultMap = {};
  const result = [];
  
  for ( const number of firstList ) { // le agrega true a todos los elementos del primer lado
    resultMap[ number ] = true;
  }
  
  for ( const number of secondList ) { // compara si los elementos del segundo son true, si son true significa que estan en ambos lados, si no no lo agrega
    if ( resultMap[number] ) {
      result.push( number );
    }
  }
  
  return result.length ? result.join(",") : false; //si el array esta vacio devuelve false porque no hubo ninguna coincidencia, si existe los vuelve un string
}
   
// keep this function call here 
console.log(FindIntersection(readline()));




let a;
a = parseInt(prompt("Ingresa un numero"));
a == 12 ? console.log("No entramos :("):console.log("vamos dentro!");
while(a !== 12){
	a = parseInt(prompt("Ingresa un numero"));
	a == 12 ? console.log("Adios"):console.log("seguimos!");
}






"aaffd3???7" // analiza si la suma de 2 numeros separados por 3 signos de interrogacion da 10 y devuelva true
function QuestionsMarks(str) { 	
  let numPlaces = [];
  //suponemos que es falso hasta que el flag se ponga true para saber si cumple la condicion
  let flag = false;

  //obtenemos un array de lugares en entero contenedores de string
  for (let i = 0, len = str.length; i < len; i++) { // str.lenght = 10
    if (/\d/.test(str[i])) { // /\d/ busca un digito y testea cada posicion del string buscando digitos, si la encuentra hace push de la posicion del digito
      numPlaces.push(i);
    }
  }

  let numCount = numPlaces.length; // numPlaces = [5,9]; son posiciones recuerda

  for (let i = 0; i < numCount - 1; i++) { // numCount = 2
    if (parseInt(str[numPlaces[i]], 10) + parseInt(str[numPlaces[i + 1]], 10) === 10) { // str[5] = 3 + str[9] = 7 === 10;  Indica que es base 10 lo que esta en coma
      flag = true;
      let strSeg = str.slice(numPlaces[i], numPlaces[i + 1]); // pica el string indicando inicio y fin y crea otra cadena, pica de 5 a 9; strSeg = 3???7

      strSeg = strSeg.replace(/[^\?]/g, '');  // reemplaza los signos de interrogacion por espacios en blanco
      if (strSeg !== '???') {
        return false;
      }
    }
  }
  return flag;
} 

// keep this function call here 
console.log(QuestionsMarks(readline()));






function map(arreglo, funcion) {
  var mapped = [];
  for (var i = 0; i < arreglo.length; i++) {
    mapped.push(funcion(arreglo[i]));
  }
  return mapped;
}

map([1, 2, 3],(el) => el * 2); //  => [2, 4, 6]


















let concejal = {},
total = 0,
i = 0,
vector = [];

function lectura(){
	concejal.nombre = prompt("Ingresa un nombre");
	concejal.pais = prompt("Ingresa un pais");
	concejal.edad = parseInt(prompt("Ingresa un edad"));
}



lectura();
while(concejal.edad != -1){
	vector[i] = concejal.nombre;
	i++;
	total += concejal.edad;
	lectura();
}
console.log(total);
for(let n of vector){
	console.log(n);
}