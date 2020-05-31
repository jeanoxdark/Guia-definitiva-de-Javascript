

Number,String,Boolean,Math,Array,Map,Object,/()/,Set,Symbol,JSON,Date,function(),
Use {} instead of new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()


/////////////////////////////////////MODO ESTRICTO///////////////////////////////////////////////////////////////////////////////////////////

//No se permite el uso de una variable, sin declararla:

"use strict";
x = 3.14;                // This will cause an error



//No se permite el uso de un objeto, sin declararlo:

"use strict";
x = {p1:10, p2:20};      // This will cause an error

//No se permite eliminar una variable (u objeto).

"use strict";
var x = 3.14;
delete x;                // This will cause an error

//No se permite eliminar una función.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 

//No se permite duplicar un nombre de parámetro:

"use strict";
function x(p1, p1) {};   // This will cause an error

//No se permiten literales numéricos octales:

"use strict";
var x = 010;             // This will cause an error

//No se permiten caracteres de escape octales:

"use strict";
var x = "\010";            // This will cause an error

//No se permite escribir en una propiedad de solo lectura:

"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

//No se permite escribir en una propiedad get-only:

"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error

//No se permite eliminar una propiedad no comedeable:

"use strict";
delete Object.prototype; // This will cause an error

//La palabra no se puede utilizar como una variable:eval

"use strict";
var eval = 3.14;         // This will cause an error

//La palabra no se puede utilizar como una variable:arguments

"use strict";
var arguments = 3.14;    // This will cause an error

//La declaración no está permitida:with

"use strict";
with (Math){x = cos(2)}; // This will cause an error

//Por razones de seguridad, no se permite crear variables en el ámbito desde el que se llamó:eval()

"use strict";
eval ("var x = 2");
alert (x);             // This will cause an error


//La palabra clave en las funciones se comporta de manera diferente en modo estricto.this

//La palabra clave hace referencia al objeto que llamó a la función.this

//Si no se especifica el objeto, las funciones en modo estricto devolverán y las funciones en modo normal devolverán el objeto global (ventana):undefined

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();






//////////////////////HOISTING////////////////////////////////////////////////////////////////////////////////////////////



//HOISTING ES LA FORMA EN LA QUE LAS DECLARACIONES Y FUNCIONES SON LLEVADAS A LA PARTE SUPERIOR DE DONDE ESTAN DECLARADAS


var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y



var x = 1; // Inicializa x
var y;// Se elevo la declaración
console.log(x + " " + y); // '1 undefined' 
y = 2; // Inicializa y 


function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}

nombreDelGato("Maurizzio");
/*
El resultado del código es: "El nombre de mi gato es Maurizzio"
*/



nombreDelGato("Dumas");

function nombreDelGato(nombre) { 
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/



//////////////////////////////////////////////////THIS///////////////////////////////////////////////////////////


//La palabra clave JavaScript this hace referencia al objeto al que pertenece.
//Tiene diferentes valores dependiendo de dónde se utilice:

//En un método, hace referencia al objeto propietario.this
//Solo, se refiere al objeto global.this
//En una función, hace referencia al objeto global.this
//En una función,this en modo estricto, es .undefined
//En un evento, hace referencia al elemento que recibió el evento.this
//Métodos como call y apply puede hacer referencia a cualquier objeto this



/////////////////////////////////////////////////////////SECUENCIAS//////////////////////////////////////////////////////////////////////


switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.

//el break sale de todo lo que lo rodee, funciones y inicia el siguiente
var count = 0;
function ala(a){
	switch(a){
	 case 1:
	   count++;
	   break;
	 case 2:
	   count--;
	   break;
	}
	return count;
}
ala(2);
ala(1);
ala(2);// -1



//Do While///////////////////////////////////////////////////////////////////////////////

let result = "";
let i = 0;

do {
 i++;
 result += i;

} while (i < 5); 

console.log(result);



break //Termina el bucle actual, switch o instrucción label y transfiere el control de programa a la instrucción que sigue a la instrucción terminada.

continue //Termina la ejecución de las instrucciones en la iteración actual del bucle actual o etiquetado y continúa la ejecución del bucle con la siguiente iteración.

Empty //Una instrucción vacía se utiliza para proporcionar ninguna instrucción, aunque la sintaxis de JavaScript esperaría una.

throw //Produce una excepción definida por el usuario.

try...catch //Marca un bloque de instrucciones para probar y especifica una respuesta, en caso de que se produzca una excepción.

function* //Las funciones del generador permiten escribir iteradores más fácilmente.

async function //Declara una función asincrónica con los parámetros especificados.

do...while //Crea un bucle que ejecuta una instrucción especificada hasta que la condición de prueba se evalúa como false. La condición se 
evalúa después de ejecutar la instrucción, lo que da como resultado que la instrucción especificada se ejecute al menos una vez.

for each...in //Recorre en iteración una variable especificada sobre todos los valores de las propiedades del objeto. Para cada propiedad 
	distinta, se ejecuta una instrucción especificada.

for...in //Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

for...of //Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook
	with statements to be executed for the value of each distinct property.

for await...of //Recorre en iteración los objetos iterables asincrónicos, los objetos similares a matrices, los iteradores y los 
	generadores,invocando un enlace de iteración personalizado con instrucciones que se ejecutarán para el valor de cada propiedad distinta

debugger//Invoca cualquier funcionalidad de depuración disponible. Si no hay ninguna funcionalidad de depuración disponible, esta 
instrucción no tiene ningún efecto.

export //Se utiliza para exportar funciones para que estén disponibles para las importaciones en módulos externos y otros scripts.

import //Se utiliza para importar funciones exportadas desde un módulo externo, otro script.

import.meta //Una meta-propiedad que expone metadatos específicos del contexto a un módulo JavaScript.

label //Proporciona una instrucción con un identificador al que puede hacer referencia mediante una instrucción o.breakcontinue

with //Extiende la cadena de ámbito de una instrucción.

function* //La palabra clave define una expresión de función generadora.function*

yield //Pausar y reanudar una función de generador.

yield* // delega un generador 

/ab+c/i //Sintaxis literal de expresión regular.

new.target //En constructores, hace referencia al constructor invocado por new.new.target
arguments	
enum*
eval
extends*
finally	
implements
interface
void
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











//////////////////////////////////////////////////////////////IMPORT/EXPORT/////////////////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<body>
</head>
<body>
	<h1 id="sumar">El resultado de la suma es:</h1>	
	<button onclick="this.innerHTML('.h') = 5+5">hola</button>
	<h1 class="h"></h1>
</body>
</html>













/////////////////////////////////////////MAP///////////////////////////////////////////////////////////////////////////////////////////////

var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}





var car = new Map();

car.set("brand","volskwagen");
car.set("name","golf");
car.set("color","white");

console.log(car.get("brand")); // volskwagen

console.log(car.has("brand")); // true
car.delete("brand");
console.log(car.has("brand")); //false
console.log(car);


////////////////////////METODOS MAP/////////////////////////////////////////////////////////////////////////////////////

clear() //
constructor() // 
delete()  // 
entries() // 
forEach() // 
get() // 
has()  // 
keys() // 
set() // 
size // 
values() // 
Symbol(Symbol.iterator)) // 
Symbol(Symbol.toStringTag) // 
size() // 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////////////////////////SET////////////////////////////////////////////////////////////////

//Te permite agregar valores unicos de cada tipo
var dogs = new Set();


///////////////////////PROPIEDADES SET//////////////////////////////
dogs.length;
dogs.prototype;
dogs.size;

//////////////////////////////////////METODOS SET///////////////////////////////////////////////////////////


dogs.add(value); //
dogs.clear(); //
dogs.delete(value); //
dogs.entries(); //
dogs.forEach(callback); //
dogs.has(value); //
dogs.keys(); //
dogs.values(); //
dogs.[Symbol.it erator](); //
dogs.[Symbol.species](); //















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Funciones de Orden Superior, Son funciones que se envian como parametros a otra funcion(callbacks)

function sing(retroalimentacion){
	console.log('la la la la'); 
	retroalimentacion(100);
}

function cantar(webo){
	console.log('soy retroalimentado');
	console.log(`Hoy me comi ${webo} huevos`);
}

sing(cantar);

//Otra forma sería

sing(() => console.log('soy retroalimentado')); 




//Callback
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);









button.addEventListener('click', clickAlert) // Cuando el boton es clickeado ejecuta la funcion que tiene como parametro

function clickAlert() {
  alert(‘me tocaste!’);
} 

button.addEventListener('click', () => a+b); // Cuando el boton es clickeado ejecuta la funcion que esta dentro




//Almacenadas en variables

let porTres = function(numero) {
  return numero * 3;
}

const multiplicaTres = porTres;

console.log(multiplicaTres(10)); //30




//Closures

function Papel(){ // Acceso a variables internas
	let a = 10;

	function animal(){
		console.log(a);
	}
}



function masGrandeQue(n) {
  return function(m){return m > n}; // Lo retorna con el valor guardado en n
}

const masGrandeQue10 = masGrandeQue(10);
const masGrandeQue20 = masGrandeQue(20);

console.log(masGrandeQue10(12)); //true
console.log(masGrandeQue20(12)); //false



let c = function (precio) {
  let impuestos = 1.21;
  let gastosEnvio = 10;
  let precioTotal = ( precio * impuestos ) + gastosEnvio;
 
  return precioTotal;
}

let precioTotal = c(23.34);



//Funciones Auto ejecutables

/*Las expresiones de función se pueden hacer "autoinvocación".

Una expresión autoinvocativa se invoca (inicia) automáticamente, sin que se llame.

Las expresiones de función se ejecutarán automáticamente si la expresión va seguida de ().

No se puede autoinvocar una declaración de función.
*/


//Se ejecuta el autoejecutable una vez y inicializa secureCode y retorna otra funcion
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // Un codigo que no queremos que externos sean capaces de modificar...
  return function () { return secureCode}
})();


getCode = function() {return secureCode} //pero como es autoejecutable, el nuevo function recuerda la variable anterior(SecureCode)

getCode(); // 0]Eal(eh&2






/*A la variable add se le asigna el valor devuelto de una función autoinvocativa.

La función de autoinvocación solo se ejecuta una vez. Establece el contador en cero (0) y devuelve una expresión de función.

De esta manera add se convierte en una función. La parte "maravillosa" es que puede acceder a counter de la funcion principal.

Esto se denomina cierre de JavaScript. Hace posible que una función tenga variables "private".

El contador está protegido por el ámbito de la función anónima y solo se puede cambiar mediante la función add.
*/


var add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add = function(){counter+=1; return counter} // El valor de counter se recuerda de la anterior funcion y solo es modificable por add


add();//1
add();//2
add();//3




var comida = (function(){
	let comer = "rica";
	return function(){return `La comida es ${comer}`};
})();

comida();





var callate = (function(){
	let cabeza = 5;
	let codo = 10;
	let bebe = 20;
	return function(){
		return cabeza + codo + bebe; // Recuerda las 3 variables anteriores
	}
})();

callate();






//Se autoejecuta sin llamarla
(function(){
	let jaja = "soy gay y me gusta el numero";
	let numero = 55;
	console.log(`${jaja} ${numero}`)
})();








(function () {
  document.getElementById("demo").innerHTML = "Hello! I called myself";
})();




var suma = (function(a,b){ //
	return a+b;
})(1,2);

console.log(suma); //Tiene el valor del return no de la funcion osea 3



var suma = function(a,b){
	return a+b
};

console.log(suma(1,2));//Guarda la funcion completa




function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}
console.log(add());



var myObject = (function () { // Ahora myObject es un objeto con dos metodos que recuerdan el valor de value
    var value = 0;
 
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}());

myObject.increment(5); // undefined
myObject.getValue(); // 5










map(),sort(),reduce(),fill(),filter() // Funciones del objeto aray de orden superior





//Funcion generadora

function*Hola(){
	yield 1; // pausa y resume la funcion
	yield 2;
	yield 3;
	yield 4;
}

console.log(Hola());


function fibonacci() {
  var a = yield 1;
  yield a * 2;
  yield* Hola(); // delega a otro generador o objeto iterable
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)



readline();


//Asignamiento destructurado(Deestructuracion)
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const [first, second] = input.map(s => s.split(""))


////////////////////////////////////////////////////////////////////////////////////////////

//Spread Syntax

function myFunction(x, y, z) {return x+y+z }
var args = [0, 1, 2];
myFunction(...args); // 3



function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]

var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]


var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }



//Rest parameters

function cinco(...meses){
	for(let uno of meses){
		document.write(uno); // enero febrero marzo abril
	}
};

cinco("enero","febrero","marzo","abril");










//Scope de Funciones

// La forma para que una funcion interna coloque su valor dentro y luego en el externo debemos colocar unos parentesis al final, ejemplo: el return canal entra en la function() y luego la function() retorna a la variable obtener y imprime hola.





var pet = function(name) {          // La funcion externa define una variable llamada "name"
      var getName = function() {
        return name;                // La funcion interna tiene aceso a la variable "name" de la funcion externa
      }

      return getName;               // Devolver la funcion interna, por lo tanto exponiendola a un ambito exterior
    },
    myPet = pet("Vivie");
    
console.log(myPet());     



function A(x) {
	function B(y) {
    	function C(z) {
      	  console.log(x + y + z);
    	}
    	C(3);
	}
  	B(2);
}
A(1); // registra 6 (1 + 2 + 3)


function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
result1 = outside(3);
result2 = result1(4);
console.log(resu2);
console.log(outside(3)(5));




//Operador de Cortocircuito
//Si da true imprime lo de la izquierda con el operador ||, si da false imprime lo de la derecha // imprime los true
//Si da false imprime lo de la izquierda con el operador &&, si da true imprime lo de la derecha//Imprime los false
function a(a){
  a = a || "No existe";
  return a;
}
a();
console.log(19||"valor de la derecha");//19
console.log(0||"Valor de la derecha");//"Valor de la derecha"

function b(b){
	b = b && "Existe";
}
console.log(false&&"Existe"); // false
console.log(0&&"valor de la derecha")//0



////////////////////////////////////////////METODOS CALL, APPLY Y BIND/////////////////////////////////////////////////////////////


//Sirve para mantener el scope particular de un codigo

console.log(this)//window
this.lugar = "contexto global";

function saludar(saludo,aQuien){
	console.log(`${saludo} ${aQuien} estamos desde el ${this.lugar}`);
}
saludar("Hola","Cris"); // Hola Cris desde el contexto global


//Ahora quiero cambiar la referencia
const obj = {
	lugar: "contexto objeto";
}

//Voy a ejecutar saludar pero con un nuevo contexto, osea el contexto de el obj, ahora en ves de ser window, es obj el contexto del this
saludar.call(obj,"Hola","Jean") // Hola Jean estamos desde el contexto objeto
saludar.call(null,"Hola","Jean")//Hola Jean desde el contexto global, con null no referenciamos a nada
saludar.call(this,"Hola","Jean") // Hola Jean desde el contexto global, con this referenciamos al global


//Ejecutamos saludar tomando como contexto del this el obj, asi que this.lugar es referencia del obj no de saludar
saludar.apply(obj,["Adios","Boulos"]) //Adios Boulos desde el contexto objeto
saludar.apply(null,["Adios","Boulos"]) //Adios Boulos desde el contexto global
saludar.apply(this,["Adios","Boulos"]) //Adios Boulos desde el contexto global



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//BIND

//Si fuera arrow function diria Hola Undefined ya que toma el scope global no el scope interno del bloque
const persona = {
	nombre:"jon",
	saludar() {
		console.log(`Hola ${this.nombre}`);
	}
}
persona.saludar()//Hola jon


const otraPersona = {
	saludar: persona.saludar;
}
otraPersona.saludar(); // Hola Undefined


//Para poder invocar metodos de otros objetos en el objeto actual utilizamos bind

const otraPersona = {
	saludar: persona.saludar.bind(persona); // enlaza el contexto de persona
}
otraPersona.saludar(); // Hola jon


const otraPersona = {
	saludar: persona.saludar.bind(this); // enlaza el contexto global
}
otraPersona.saludar(); // Hola window





////////////////////////////////Arrow Functions/////////////////////////////////////////////////////////////////////////////////


var animal = nombre => `hola ${nombre}`;

console.log(animal("perro"));//hola perro 

const numeros = [1,2,3,4,5];

numeros.forEach((v,i) => console.log(`El elemento ${v} esta en la posicion ${i}`));

const perro = {
	nombre: "Kenai",
	ladrar: () => console.log(this); // Hace referencia al contexto global, si fuera funcion normal, haria referencia al objeto interno
}







//////////////////////////////////////////////////////PROMISES///////////////////////////////////////////////////////////////////////////////


let miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function(){
    resolve("¡Éxito!"); // ¡Todo salió bien!
  }, 250);
});

miPrimeraPromise.then((successMessage) => {
  // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
  // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
  console.log("¡Sí! " + successMessage);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let x == 10;

const p = new Promise((resolve,reject) => {
	if(x == 10){
		resolve('La variable es igual a 10'); // Valor a retornar a resolve, mando a llamar a resolve, el valor de resolve entra en p
	}else{
		reject('La variable no es igual a 10') // Valor a retornar a reject
	}
});
p
.then(res => console.log(`success: ${res}`)) // Ejecuta el valor de resolve que esta en res
.catch(error => console.log(`Failure ${error}`)) // Ejecuta el valor de reject que se encuentra en error


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let x = 10;
const promesa = new Promise((resolve,reject) => {
	setTimeout(() => {
		x *= 3 + 2
		console.log('2. Proceso terminado...');
		resolve(x);
	},2000);
});
console.log('1. Proceso Iniciando');
promesa.then(res => console.log(`el resultado es: ${res}`));


/////////////////////////////////////////////////////////////////////////////////////////


let telefonos = [{
	id:1,
	telefono:04121039055,
	nombre:"John"
}, {
	id:2,
	telefono:04149905866,
	nombre:"maria"
}, {
	id:3,
	telefono:04128854439,
	nombre:"pedro"
}];

const obtenerTelefono = (id) => {
	return new Promise((resolve,reject) => {
		if(telefonos.find(telefono => telefono.id == id)){ // El array telefonos se pasa como parametro por la funcion, va a reccorer cada objeto del array
			resolve('el id existe y su numero es ' + telefonos[id-1].telefono + 'y el nombre del propietario es ' + telefonos[id-1].nombre);
		}else{
			reject('el id no existe');
		}
	});
}
obtenerTelefono(2)
.then(res => console.log(`${res}`))
.catch(error => console.log(error));






fetch('http://example.com/movies.json') // Devuelve la promesa del API con la respuesta(correcta o rechazada)
  .then(response => response.json()) // Si es correcta, El Promise(response) se transforma en json y la retorna
  .then(myJson => console.log(myJson)); // Ese json retornado se imprime por console.log
  .catch(error => console.log(error)) // si el Api esta malo, pasa por catch y imprime el error

///////////////////////////////////////////////////////////////FETCH/////////////////////////////////////////////////////////////////////////


//Fetch sirve para realizar solicitudes de un url,traer dato de un url
//Utiliza Funciones de P5.JS OJO

let wordnikAPI = "https://blablabla"
let giphyAPI = 'blablalba'
fetch(wordnikAPI) // Empiezo con fetch, que devuelve una promesa del API wordnikAPI
	.then(respuesta => respuesta.json() //pasa la Promesa del API a respuesta si la funcion then pasa, que significa que es correcta y no hay errores, ejecuta la funcion, pero lo que devuelve no se puede usar, para poder usar el contenido del promise, se debe poner respuesta.json() para convertirlo en Json y devolverlo para usarlo en la siguiente instruccion. 

	.then(json => { // Obtengo el promise de wordnikApi transformado en json, y creo un elemento <p>
		createP(json.word)) // Agarra el Json que acabas de transformar y crea un elemento <p>, ya puedo acceder a las propiedades pq es json
		return fetch(giphyAPI + json.word);	//y retorno otro fetch para agregar mas datos pero ahora a giphyAPI sumado a un propiedad de word
	})

	.then(respuesta => respuesta.json()); // Si el promise de giphy esta correcto, retorno el json de ese promise
	.then(json => createImg(json.data[0].images['fixed_height_small'].url) // agarro el json de giphy y creo una imagen 
	.catch(error => console.log(error)) // si el Api esta malo, pasa por catch y devuelve el error



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Usa fetch() para enviar una petición POST con datos codificados en JSON .

var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));



/////////////////////////////////////////////COMO HACER UNA PROMESA////////////////////////////////////////////////////////////////////////


function delay(time){
	return new Promise((resolve,reject) => {
		if(isNaN(time)){
			reject(new Error('delay is not a valid number'))
		}
		setTimeout(resolve,time)
	});
}

delay(1000)
  .then(() => console.log("perfecto"))
  .catch((err) => console.error(err));










/////////////////////////////////////////////////ASYNC-AWAIT/////////////////////////////////////////////////////////////////////////////////




async function getData(){
	let promise = new Promise((resolve,reject) => {
		setTimeout(() => resolve('done'), 3000)
	});

	let result = await promise;
	console.log(result);
}

getData();




let suma = (a,b) => console.log(`el resultado de la suma es ${a+b}`);

suma(Number(prompt('ingresa un valor')),Number(prompt('ingresa otro valor')));








	const sayName = (name,cb) => {  //callback asincrono
		console.log('running some code');
		console.log(`My name is ${name}`);
		cb();
	}

	function callback(){
		console.log('devuelve algo');
	}

	sayName('MARCOS', callback );







	const name = 'Gerardo';
	const surname = 'Fernández';
	const telephone = '123 123 123';



	let startAt = performance.now(); //Calcula el tiempo de ejecucion

	for (let i = 0; i < 20 ; i++){

		console.log(i);
	}

	let endAt = performance.now();

	console.log(`User info: ${name} ${surname} ${telephone}`);

	console.log(`${endAt - startAt} took miliseconds to execute`);







console.log(`first`);

setTimeout(() => {
	console.log('lol')

}, 2000);

console.log('last');


setTimeout(hello,5000);


function hello(){
	document.write("hola");
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////PROMISE.ALL Y PROMISE.RACE/////////////////////////////////////////////////////////////////



















//////////////////////////////////////////////OBJETOS//////////////////////////////////////////////////////////////////



//Objeto Literal
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};
person.firstName
console.log(person.fullName());



//Objeto Anidado
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

flight.departure.city


var ArrayUtil = {
    contains : function(array, element)
    {
        for(var x=0; x<array .length; x++)
        {
            if(array[x] === element)
               return true;
        }
        return false;
    }
}
var list = ["A", "B", "C"];
console.log("¿Contiene A? " + ArrayUtil.contains(list, "A"));


stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = { model: 'Boeing 777' }
flight.status = 'overdue';



//Objeto por New

var persona2 = new Object();
persona2.nombre = "charles";
persona2.edad = 15;
persona2.pipi = "hola";
persona2.move = () => this.nombre + this.edad;


//Objeto por constructor

function Persona(nom,age,an){
	this.nombre = nom;
	this.anio = age;
	this.an = an;
	this.sonar = function(){
		console.log("hola");
	}
}

var ob = new Persona("marco",15,22);

ob.nombre; // marco
//this hace referencia al objeto que lo contiene





function Cat(name) {
  this.name = name;
  this.sound = "Meow";
  this.create = () => this.name + this.sound;
}

Cat.name = () => { // Agregue un metodo a la funcion constructor Cat
  return this.firstName + " " + this.lastName;
};

Cat.name(); //Error se debe crear un nuevo objeto con la palabra new
//Las funciones de constructor se invocan usando la new palabra clave:

let cat = new Cat("Tom");
cat.sound; // Returns "Meow"
//Las funciones de constructor también tienen una propiedad prototype que apunta a un objeto cuyas propiedades son heredadas automáticamente por todos los objetos creados con ese constructor:

Cat.prototype.speak = function() {
  console.log(this.sound);
}

cat.speak(); // Outputs "Meow" to the console
//Los objetos creados por las funciones de constructor también tienen una propiedad especial en su prototipo llamado constructor , que apunta a la función utilizada para crearlos:

cat.constructor // Returns the `Cat` function
//Los objetos creados por las funciones del constructor también se consideran "instancias" de la función del constructor por el operador instanceof :

cat instanceof Cat // Returns "true"







//objeto por clase

class Producto{
	constructor(){
	this.arroz = 0.85;
	this.azucar = 0.85;
	this.aceite = 1.5,
	this.harinaTodoUso = 0.9;
	this.Pasta = 0.5;
	this.Deline = 0.7;
	this.HarinaPan = 1.1;
	this.Mayo = 0.5;
	this.Sal = 0.5;
	this.Leche = 2.25;
	this.Jabon = 0.25;
	}
	sacarCombo() {
		console.log(this.arroz+this.azucar+this.aceite+this.harinaTodoUso+(2*this.Pasta)+this.Deline+this.HarinaPan);
	}
}
let producto = new Producto();

producto.sacarCombo();



class Papa {
	constructor(x){
		this.x = x;
	}
	contestar(x){
		console.log(`Hola ${x}`);
	}
	construir(){
		this.x += 10;
		console.log(this.x);
		this.contestar(this.x = 20);
	}
}

let papa = new Papa(5);

console.log(papa.construir());







///////////////////////////////////////////PROPIEDADES OBJECT/////////////////////////////////////////////////////////////////


Object.length //Largo de Objeto
Object.prototype// Permite añadir propiedades a todos los objetos del tipo Object.



/////////////////////////////////////////////////////METODOS OBJECT/////////////////////////////////////////////////////////////////

Object.assign() //Copia los valores de todas sus propiedades enumerables desde uno o más objetos fuente a un objeto destino.
Object.create() //Crea un nuevo objeto con el prototipo objeto y propiedades específicadas.
Object.defineProperty() //Añade la propiedad nombrada descrita por un descriptor dado a un objeto.
Object.defineProperties() //Adds the named properties described by the given descriptors to an object.
Object.entries() //Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze() //Freezes an object: other code can't delete or change any properties.
Object.fromEntries() //Returns a new object from an iterable of key-value pairs (reverses Object.entries).
Object.getOwnPropertyDescriptor() //Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors() //Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames() //Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols() //Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf() //Returns the prototype of the specified object.
Object.is() //Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible() //Determines if extending of an object is allowed.
Object.isFrozen() //Determines if an object was frozen.
Object.isSealed() //Determines if an object is sealed.
Object.keys() //Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions() //Prevents any extensions of an object.
Object.seal() //Prevents other code from deleting properties of an object.
Object.setPrototypeOf() //Sets the prototype (i.e., the internal [[Prototype]] property).
Object.values() //Returns an array containing the values that correspond to all of a given object's own enumerable string properties.




//Object instances and Object prototype object
//All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype, although they may be overridden. For example, other constructors' prototypes override the constructor property and provide their own toString() methods. Changes to the Object prototype object are propagated to all objects unless the properties and methods subject to those changes are overridden further along the prototype chain.

//Deleting a property from an object, To do so one has to use the delete operator.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////CLASES Y CONSTRUCTORES//////////////////////////////////////////////////////////////////

class Burbuja {
	constructor(x,y){ //Propiedades
		this.x = x;
		this.y = y;
	}
	move() { // metodos
		this.x += this.y;
	}

	speed() {
		this.x++
	}

}

let burbuja = new Burbuja(100,200);
burbuja.x;
burbuja.move();
burbuja.speed();




function Tree (name) {
   this.name = name;
}

var theTree = new Tree( "Redwood" );
console.log( "theTree.constructor is " + theTree.constructor );

//Este ejemplo muestra la siguiente salida:

/*
theTree.constructor is function Tree (name) {
    this.name = name;
}
*/









////////////////////////////////////////////////////HERENCIA DE PROTOTIPOS//////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////EJEMPLO 1/////////////////////////////////////////////////////


/*Cree una clase denominada "Model" que heredará los métodos de la clase "Car", mediante la palabra clave extends

Al llamar al método super() en el método constructor, llamamos al método constructor primario y obtiene acceso a las propiedades y métodos del elemento primario
*/

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); //Quiero definir mi propio constructor Model pero que haga exactamento lo mismo que el constructor car, lo hago con super
    this.model = mod;
  }
  present() {
    super.present(); // Haz lo que hace el metodo present de car pero agregandole otras cosas, tiene otra propiedad adicional
    this.model = 1;

  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.present();









///////////////////////////////////////////////////////EJEMPLO 2///////////////////////////////////////////////////////////////////////



//En vez de crear dos clases iguales podriamos hacer esto

class Particle {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	update(){
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		point(this.x,this,y);
	}
}



class SquareP {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	update(){
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		square(this.x,this,y,10);
	}
}











class Particle {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	update(){
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		point(this.x,this,y);
	}
}

//Cuando se haga un new de SquareP llama el codigo que esta en el constructor de Particle , super();
class SquareP extends Particle { // Ya que hicimos el extends, heredamos todos los metodos de Particle asi que no es necesario definirlo
	constructor(x,y){ // ya que pusimos super(x,y),Heredo el constructor de Particle asi que tenemos todas las propiedades de Particle
		super(x,y);// Hereda todo el constructor de Particle pero le podemos agregar cosas al constructor de Squarep localmente 
		this.bright = random(255);  //Quiero definir mi propio constructor SquareP pero que haga exactamento lo mismo que el constructor Particle que no modifique el constructor padre, lo hago con super()
		this.r = 10;
		//this.x = x; // Obtenido con super() de Particle
		//this.y = y;
		
	}
	/*update(){ // Heredado de Particle
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		square(this.x,this,y,10);
	}*/
	update(){
		super.update() // Hereda el metodo update de Particle pero ahora tiene otras cosas adicionales locales a SquareP sin cambiar padre
		this.r += random(-10,-10);
	} // Si escribo un metodo con el mismo nombre que padre,el metodo padre sera ignorado para cada objeto Particle,sobreescribo localmente
}

p1 = new Particle(300,300);
p2 = new SquareP(300,300)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













//////////////////////////////////METODO CLASS///////////////////////////////////////////////////////////

constructor()	//A special method for creating and initializing objects created within a class




//////////////////////////////KEYWORDS DE CLASS//////////////////////////////////////////////////////////////////////////////


extends //Hereda una clase
static	//Los metodos estaticos son llamados directamente de la clase sin crear una instancia del objeto con el new, osea si tu metodo esta en la clase Car, se invoca con Car()
super	//Refiere a la clase padre


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









//////////////////////POLIMORFISMO//////////////////////////////////////////////////////////////////////////////////////////


let particles = [];

//los metodos de P5.vector se heredan a Particle y los metodos de Particle se heredan a SquareP

class Particle extends p5.Vector { // Un objecto de p5.js que tiene x y z como propiedades y muchas funcionalidades
	constructor(x,y){
		super(x,y) // Heredo el constructor(Propiedades) de p5.Vector,ahora puedo sobreescribir localmente en Particle,contiene (x) (y) (z)
		this.vel = p5.Vector.random2D(); // velocidad random
		//this.x = x;
		//this.y = y;
	}
	update(){
		this.add(this.val); // Uso los metodos de p5.Vector ya que se heredaron,sin super ya que no estamos agregando nada adicional ni local
		//this.x += random(-5,5);
		//this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		point(this.x,this,y);
	}
}

//Cuando se haga un new de SquareP llama el codigo que esta en el constructor de Particle , super();
class SquareP extends Particle { // Ya que hicimos el extends, heredamos todos los metodos de Particle asi que se borran de SqueareP
	constructor(x,y){ // ya que pusimos super(x,y),Heredo el constructor de Particle asi que se borra de Squarep
		super(x,y);// Hereda todo el constructor de Particle pero le podemos agregar cosas al constructor de Squarep localmente 
		this.bright = random(255);  //Quiero definir mi propio constructor SquareP pero que haga exactamento lo mismo que el constructor Particle que no modifique el constructor padre, lo hago con super()
		this.r = 10;
		//this.x = x;
		//this.y = y;
		
	}
	/*update(){ // Heredado de Particle
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(24);
		square(this.x,this,y,10);
	}*/
	update(){
		super.update() // Hereda el metodo de update de Particle pero ahora tiene otras cosas adicionales locales a SquareP sin cambiar padre
		this.r += random(-10,-10);
	} // Si escribo un metodo con el mismo nombre que padre,el metodo padre sera ignorado para cada objeto Particle,sobreescribo localmente
}

for(let i = 0;i < 10; i++){
	if(random(1) < 0.5){
		particles[i] = new Particle(300,300);
	}else{
		particles[i] = new Squarep(300,300);
	}
}

for(let p of particles){ // en p se encuentra un array de 10 posiciones llena de objetos(Particles o SquareP)
	p.update(); // Invoco los metodos de ambos dependiendo de lo que este dentro
	p.show();
}

//Literalmente SquareP tiene dentro r,bright,vel,x,y,z










////////////////////GETTERS Y SETTERS//////////////////////////////////////////////////////////////////////////////////////////


//Los getters y setters se trabajan como propiedades a pesar de que parezcan metodos

//se utiliza para hacer algo especial con el valor antes de devolverlos, o antes de establecerlos, Nos permite establecer y obtener los valores de propiedades de nuestra clase


class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this._carname;
  }
  set cnam(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.cnam; // Ford





class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x + " hello";
  }
}

mycar = new Car("Ford");
mycar.carname = "Volvo"; // esto llega al parametro del set y lo manda al get para deolverlo

document.getElementById("demo").innerHTML = mycar.carname; // Volvo





class Car {
  constructor() {
    this._carname = null;
  }
  get getCarname() { // retorna el valor modificado por set
    return this._carname;
  }
  set setCarname() { // recibe el valor de fuera y lo modifica
    this._carname = x;
  }
}

mycar = new Car();
mycar.setCarname = "Volvo"; // esto llega al parametro del set y lo manda al get para deolverlo

document.getElementById("demo").innerHTML = mycar.getcarname; // Volvo







//Constructor Base

function Persona(nom,age,an){
	this.nombre = nom;
	this.anio = age;
	this.an = an;
	this.sonar = function(){
		console.log("hola");
	}
	this.escuchar = function(){
		console.log("soy gay");
	}
}

var ob = new Persona("marco",15,22);
var ab = new persona("pedro",20,30);

ob.nombre; // marco




//Prototipos

function Persona(nom,age,an){
	this.nombre = nom;
	this.anio = age;
	this.an = an;
	}
}

Animal.prototype.sonar = function(){ // Ahora estan en el proto del constructor Persona
	console.log("hola");
}
Animal.prototype.escuchar = function(){
	console.log(`Hola me llamo ${this.nombre}`);
}

var ob = new Persona("marco",15,22);
var ab = new persona("pedro",20,30);

ob.sonar(); // marco
ab.sonar(); // pedro







// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0; 
}
 
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};
 
// Rectangle - subclass
function Rectangle() {
    Shape.call(this); //llama al super constructor Shape.
}
 
Rectangle.prototype = Object.create(Shape.prototype); // Aniade al prototipo de Rectangle un Objeto con los prototipos de Shape
 
var rect = new Rectangle();
 
rect instanceof Rectangle   // true.
rect instanceof Shape       // true.
 
rect.move(); // Outputs, "Shape moved."









///////////////////////////////////////////////////PROPIEDADES STRING///////////////////////////////////////////////////////


var string = new String; // Objeto string
console.log(string);

var x = "yo me llamo \"vikingo\"online"
var y = "yo me llamo \'vikingo\'online";
var z = "yo me llamo \\vikingo\\online";;
var t = "it\'s alright";
var c = "hola" +
"locon";

/*	\'	cotización simple
	\"	doble cita
	\\	Barra invertida
	\n	Newline
	\r	retorno del carro
	\t	pestaña
	\b	límite de palabras
	\f	forma de alimentación
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
//La comparación de dos objetos JavaScript siempre devolverá false (x==y)(x===y)




var x = "hola mela llamona jeanla"
//Devuelve la longitud del string
x.length;
 // puedes crear propiedades y metodos y agregarlas a cualquier objeto
String.prototype.crear = () => this.slice() / 2
String.crear();
// in JavaScript, the constructor property returns the constructor function for an object.

function xa(){
	this.x = 10;
}

let x = new xa();

x.constructor //function xa(){this.x = 10}

//Las funciones de constructor son funciones diseñadas para construir un nuevo objeto. Dentro de una función constructora, la palabra clave this se refiere a un objeto recién creado, que se pueden asignar valores a. Las funciones del constructor "devuelven" este nuevo objeto automáticamente.
//Ejemplo


String.raw`Hi\n${2+3}!`; // Hi\n5!

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////METODOS STRING/////////////////////////////////////////////////////////////////////////////


//Todos los métodos de cadena devuelven una nueva cadena. No modifican la cadena original.
//Devuelve la posicion de la primera ocurrencia de un valor especificado en un String
x.IndexOf("h",15) // 0, -1 si no existe
//Devuelve la posicion de la ultima ocurrencia de un valor especificado en un String
x.lastIndexOf("l",15);
// busca en una cadena un valor especificado y devuelve la posición de la coincidencia.
x.search(/jean/i); // Busca por igual mayusculas y minusculas, devuelve 18
//Hay 3 métodos para extraer una parte de una cadena:
//extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena.
x.slice(start, end); 
//extrae partes de una cadena, comenzando en el carácter en la posición especificada, y devuelve el número especificado de caracteres.
x.substring(start, end); // 0,1 H
//xtrae los caracteres de una cadena, entre dos índices especificados, y devuelve la nueva subcadena.
x.substr(start, length); // 0,1 H
//El método reemplaza un valor especificado con otro valor en una cadena
x.replace(actual,a cambiar);
// Para reemplazar mayúsculas y minúsculas, utilice una expresión regular con una marca (sin distinción)
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
//Para reemplazar todas las coincidencias, utilice una expresión regular con una marca (coincidencia global):/g
/MICROSOFT/g
//Transformar texto a Mayuscula
x.toUpperCase();
//Minuscula
x.toLowerCase();
//concatenar, es igual a x = "Hello" + "" + "World"
x.concat("","World");
//quita espacios en blanco de ambos lados de una cadena
var str = "                  hello                world              "
alert(str.trim());
//Hay 3 métodos para extraer caracteres de cadena:
//El método devuelve el carácter en un índice especificado (posición) en una cadena
x.charAt(position) 
//devuelve el unicode del carácter en un índice especificado en una cadena
x.charCodeAt(position) 
//Se puede acceder a un caracter de un string de esta forma
Acceso a la propiedad [] //str[0]
//Convierte una cadena en un array
x.split(","); // separado por comas
// Checkea si un String termina con un String especificado o un caracter
x.endsWith("Jean", 4)
//Convierte valores Unicode en caracteres
String.fromCharCode(65,72,43)
//Checkea si un String contiene el String especificado o caracteres
x.includes("llamo", 4)
//Compara 2 strings, 0 si son iguales, -1 si str1 esta ordenado antes de str2, 1 si str1 esta ordenado despues de str2 
var str1 = "ab";
var str2 = "cd";
str1.localeCompare(str2)// -1
var str2 = "ab"
str1.localeCompare(str2) // 0
//Busca una coincidencia en una cadena con una expresión regular y devuelve las coincidencias como un objeto Array.
x.match(/la/g)// la, la, la, la
//Retorna un nuevo String con un numero especificado de copias de un String existente
x.repeat(2) //Hola me llamo JeanHola me llamo jean
//Checkea  cuando un string empieza con un String especificado,iniciando la búsqueda en la posición 10:
x.startsWith("llamona", 10)
// Convierte un String en minsucula, según la configuración regional actual del host.
x.toLocaleLowerCase() // hola me llamo jean
//Convierte un String a Mayuscula, según la configuración regional actual del host.
x.toLocaleUpperCase() // HOLA ME LLAMO JEAN
//Retorna el valor de un objeto String
x.toString() // Hola me llamo Jean
//Retorna el valor primitivo de un objeto String
x.valueOf() // Hola mela llamola Jeanla
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















/////////////////PROPIEDADES NUMBER///////////////////////////////////////////////////////////////////////////////////////////////

//devuelve el mayor número posible en JavaScript.
Number.MAX_VALUE; // retorna 1.7976931348623157e+308
//Devuelve el menor numero posible en JavaScript
Number.MIN_VALUE; // 5e-324
//Se devuelve en desbordamiento
Number.POSITIVE_INFINITY; //Infinity
//Se deveulve en desbordamiento
Number.NEGATIVE_INFINITY; // -Infinity
//Devuelve NaN
Number.NaN; // NaN

Number.EPSILON

Number.MIN_SAFE_INTEGER

Number.MAX_SAFE_INTEGER

//Retorna la funcion creada por el prototipo number, retorna la funcion constructora de un objeto, retorna una referencia no el nombre
n.constructor;
//Te permite agregar nuevas propiedades y metodos a numeros JavaScript,Al construir una propiedad
//TODOS los números recibirán la propiedad y su valor, de forma predeterminada.
//Al construir un método, TODOS los números tendrán este método disponible.

Number.prototype.picar  = () => this.valueOf() / 2;


function myFunction() {
  var n = 55;
  document.getElementById("demo").innerHTML = n.picar(); // 27.5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









///////////////METODOS NUMBER//////////////////////////////////////////////////////////////////////////////////////////////////////////


//All number methods return a new value. They do not change the original variable.


var n = 20.15;
//Convierte numero a string
n.toString() 
(100 + 23).toString();
//devuelve una cadena, con un número redondeado y escrito utilizando notación exponencial. Un parámetro define el número de caracteres detrás del punto decimal:
n.toExponential(6) // 20.150000e+0
//devuelve una cadena, con el número escrito con un número especificado de decimales:
n.toFixed(4) // 20.1500
//devuelve una cadena, con un número escrito con una longitud especificada
n.toPrecision(3)//20.2
//devuelve un el valor primitivo de un número.
n.valueOf();
(12+20).valueOf();
//Determina si el valor esta en el limite de javaScript, (253 - 1) to -(253 - 1)), retorna true si esta, si se excede retorna false
Number.isSafeInteger(100000e10000000) //false
//Determina si el valor es un entero
Number.isInteger("10") // false
//Retorna si el valor es finito
Number.isFinite(Infinity) // false
// Checkea si un numero es NaN
Number.isNaN(0/0) // true
// convierte un número en una cadena, utilizando un formato de idioma local.
var n = new Number(1000000);
var myObj = {
	style:"currency"
	currency:"USD"
}
document.write("ar-SA: " + n.toLocaleString("ar-SA", myObj)); //ar-SA: $١٬٠٠٠٬٠٠٠

/*
Convertir variables en números
Hay 3 métodos JavaScript que se pueden utilizar para convertir variables en números:
Estos métodos no son métodos numéricos, sino métodos globales de JavaScript.
*/
// se puede utilizar para convertir variables de JavaScript en números:
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
//El metodo retorna la cantidad de milsegundosegundos desde la fecha indicada
Number(new Date("2017-09-30"));    // returns 1506729600000
//analiza una cadena y devuelve un número entero. Se permiten espacios. Solo se devuelve el primer número
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
//analiza una cadena y devuelve un número. Se permiten espacios. Solo se devuelve el primer número
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////















///////////////////////////PROPIEDADES ARRAY///////////////////////////////////////////////////////////////////////////////////


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var points = [40,100,1,5,25,10] 




// Retorna la funcion que creo el prototipo del objeto array
fruits.constructor // function Array() { [native code] }
// Retorna los numeros de elementos del array
fruits.length // 4
// Te permite agregar propiedades y metodos en el objeto Array
Array.prototype.myUpperCase() = function myUpperCase(){
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
}
fruits.myUpperCase();

delete fruits[0]; // Changes the first element in fruits to undefined







//////////////////////////////////////////METODOS ARRAY////////////////////////////////////////////////////////////////////////////


//El método crea una nueva matriz combinando (concatenando) matrices existentes, puede agregar texto solo
var myGirls = ["Cecilie", "Lone"];
var myChildren = myGirls.concat(fruits,otro array);   // ["Cecilie","Lone","Banana", "Orange", "Apple", "Mango"]

//El método copia los elementos de la matriz en otra posición de la matriz, sobrescribiendo los valores existentes, (Sobreescribe el array original) Nunca agrega mas elementos al array
fruits.copyWithin(donde se van a colocar,donde empezar a copiar 2,donde termina de copiar 0) // Banana,Orange,Banana,Orange
fruits.copyWithin(2,0,2) // Banana,Orange,Banana,Orange

//El método devuelve un objeto Array Iterator con pares clave/valor
var f = fruits.entries();

for (x of f) {
  document.getElementById("demo").innerHTML += x + "<br>"; // 0.Banana
														   // 1.Orange
														   // 2.Apple
														   // 3.Mango
}

//El método comprueba si todos los elementos de una matriz superan una prueba (proporcionada como una función)
/*El método every() ejecuta la función una vez para cada elemento presente en la matriz: Si encuentra un elemento de matriz donde la función devuelve un valor false, every() devuelve false (y no comprueba los valores restantes)
Si no se produce ningún false, every() devuelve true */
var edades = [32, 33, 16, 40];

function checkear(edad) {
  return edad >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = edades.every(checkear); //False, Comprueba si todos los valores son mayores de 18 años
}
/*function(currentValue, index, arr)	Required. A function to be run for each element in the array.
Function arguments:

Argument	    Description
currentValue	Required. El valor de el elemento actual
index	        Optional. El indice del array del elemento actual
arr	            Optional. El objeto Array de el elemento actual de donde proviene
thisValue	    Optional. A value to be passed to the function to be used as its "this" value.

If this parameter is empty, the value "undefined" will be passed as its "this" value
*/
var survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];


function myFunction() {
  document.getElementById("demo").innerHTML = survey.every(function isSameAnswer(el, index, arr) {
  if (index === 0){
    return true;
  } else {
    return (el.answer === arr[index - 1].answer); // compara cada elemento, indice 1 === arr[0].answer yes === yes
  }
});
}

//El método rellena los elementos especificados en un array con un valor estático, parametros(value,start,end),este método sobrescribe el array original.
fruits.fill("Kiwi") // Kiwi,Kiwi,Kiwi,Kiwi
fruits.fill("Kiwi",2,4); // Banana, Orange, Kiwi, Kiwi	

//El método crea una matriz llena de todos los elementos de matriz que pasan una prueba (proporcionada como una función).Similar a every()
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult); //32,33,40
}

//El método devuelve el valor del primer elemento de una matriz que pasa una prueba (proporcionada como una función)
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult); //18
}

//El método devuelve el índice del primer elemento de una matriz que pasa una prueba (proporcionada como una función)
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult); //2
}

//Itera en cada indice del array, valor, indice y el array completo
fruits.forEach((valor,indice,arrayCompleto) => console.log(`en el indice ${indice} hay este valor: ${valor} en el array ${arrayCompleto}`))

//El método Array.from() devuelve un objeto Array de cualquier objeto con una propiedad length o un objeto iterable.
Array.from(The object to convert to an array, A map function to call on each item of the array, A value to use as this when executing the mapFunction)
var myArr = Array.from("ABCDEFG"); // A,B,C,D,E,F,G
	
//El método includes() determina si una matriz contiene un elemento especificado.Este método devuelve true si contiene, false si no 
var n = fruits.includes("Banana", 3);//Compruebe si una matriz incluye "Banana", iniciando la búsqueda en la posición 3: false

//El método busca en una matriz un valor de elemento y devuelve su posición, si devuelve 
var a = fruits.indexOf("Apple", start); // 2

//El método isArray() determina si un objeto es una matriz.
function myFunction() {
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits); // true
}

//El método también une todos los elementos de matriz en una cadena,se comporta igual que toString() , pero además se puede especificar el separador 
fruits.join(" * "); //Banana * Orange * Apple * Mango

//El método devuelve un objeto Array Iterator con las claves de una matriz.keys()
var fk = fruits.keys();

for (x of fk) {
  document.getElementById("demo").innerHTML += x + "<br>"; // 0
  														//    1
  														//	  2
  														//	  3
}

// es el mismo que indexOf(), pero devuelve la posición de la última aparición del elemento especificado
var a = fruits.lastIndexOf("Apple");//2, pero si hubiera Apple dos veces saldria el otro

//El método crea una nuevo array realizando una función en cada elemento del array
var numbers2 = points.map(myFunction);

document.getElementById("demo").innerHTML = numbers2; // 80,200,2,10,50,20

function myFunction(value, index, array) {
  return value * 2;	
}
//El método quita el último elemento de una matriz y tambien devuelve el ultimo valor
fruits.pop(); // Removes the last element ("Mango") from fruits
var x = fruits.pop(); // the value of x is "Mango"

//El método agrega un nuevo elemento a un array (al final) y tambien devuelve la nueva longitud del array
fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
var x = fruits.push("Kiwi");   //  the value of x is 5

//El método ejecuta una función en cada elemento de matriz para producir (reducirlo a) un único valor.El método funciona de izquierda a derecha
var sum = points.reduce(myFunction,100); // con el 100 tiene resultado 281

function myFunction(total, value, index, array) { // total = valor inicial y luego el valor retornado de la suma
  return total + value; // 181
}

//El método ejecuta una función en cada elemento de matriz para producir (reducirlo a) un único valor.El método funciona de derecha a izquierda
var sum = points.reduceRight(myFunction,100); // con el 100 tiene resultado 281

function myFunction(total, value, index, array) { // total = valor inicial y luego el valor retornado de la suma
  return total + value; // 181

//El método invierte los elementos de una matriz,
fruits.reverse() // Mango,Apple,Orange,Banana

//El cambio es equivalente a pop(),.El método quita el primer elemento del array y "desplaza" todos los demás elementos a un índice inferior
fruits.shift(); // Removes the first element "Banana" from fruits
var x = fruits.shift();    // the value of x is "Banana"

//El método divide un fragmento de un array en una nuevo array.
var citrus = fruits.slice(1); //Orange,	lemon, apple, mango
var citrus = fruits.slice(2); //lemon, apple, mango
var citrus = fruits.slice(1,3); // Orange,Lemon, el ultimo argumento no incluye al borrar
const users = [1,2,3,4,5,6,7];
console.log(users.slice(-3)); //Imprime los tres ultimos valores dependiendo del valor

//El método comprueba si algunos valores de matriz superan una prueba
var someOver18 = points.some(myFunction);

function myFunction(value, index, array) { // True, 100,40,25
  return value > 18;
}

//El método ordena una matriz alfabéticamente
fruits.sort() // Apple,Banana,Mango,Orange
// Al usar ambos se puede ordenar un array de forma descendente
fruits.reverse() // Orange,Mango,Banana,Apple
//Para ordenar un array numerico se debe utilizar la funcion sort junto a una funcion,si da negativo "a" es < que "b", si da positivo "a" es > que b
points.sort(function(a,b){return a-b }); // 1,5,10,25,40,100, ordenado
points.sort(function(a,b){return b-a}); // 100,40,25,10,5,1, descreciente
points.sort(function(a, b){return 0.5 - Math.random()}); // Ordenar de forma aleatoria
//Algoritmo Fisher Yates para obtener numeros aleatorios en un array
for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
};
//Maximo y minimo en un array ordenado
points[0] // menor
points[points.length -1] // mayor
//Maximo y minimo en un array desordenado
function myArrayMax(array) {
  return Math.max.apply(null, array); // Math.max(points)
}
myArrayMax(points);

function myArrayMin(array) {
  return Math.min.apply(null, array); // Math.min(points)
}
myArrayMin(points);
//Algoritmo para encontra maximo y minimo
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
myArrayMax(points);

function myArrayMin(arr) {
  var len = arr.length; 
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) { 
      min = arr[len]; 
    }
  }
  return min;
}
myArrayMin(points);
//Ordenar un objeto por edad
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}
//Ordenar un objeto por tipo
function myFunction() {
  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}
// El método se puede utilizar para agregar nuevos elementos a un array, El primer parámetro define la posición donde se agregan.El segundo define cuántos elementos se deben quitar.
fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
fruits.splice(2, 2, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi
fruits.splice(0, 1);        // Orange,Apple,Mango

// el método JavaScript convierte una matriz en una cadena de valores de matriz (separados por comas).toString()
fruits.toString(); //Banana,Orange,Apple,Mango

// Agrega nuevos elementos al principio del array, funciona igual que push(), el metodo devuelve la longitud del array
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
var x = fruits.unshift("Lemon");    // Returns 5

// Se retorna a si mismo
var v = fruits.valueOf(); // El mismo array



///////////////////////////////arguments


//El objeto es una variable local disponible dentro de todas las funciones que no son deflecha. Puede hacer referencia a los argumentos de una función dentro de esa función mediante su objeto. Tiene entradas para cada argumento con el que se llamó a la función, con el índice de la primera entrada en 0


function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
  arguments[1] = 'new value';
}

func1(1, 2, 3);


arguments.callee //Referencia a la función que se está ejecutando actualmente a la que pertenecen los argumentos.
arguments.caller //Referencia a la función que invocó la función que se está ejecutando actualmente.
arguments.length //el número de argumentos que se pasaron a la función.
arguments[@@iterator] //devuelve un nuevo objeto Array Iterator que contiene los valores de cada índice del archivo .arguments


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for..of
user = [5,6,4,2];

for(let i of user){ // Itera sobre todas los objetos iterables(Array,String,Map,Set), es exclusivo para colecciones
	i++;
	console.log(i); // imprime todos los valores de user aumentado en uno
}

//for..in
var obj = {a: 1, b: 2, c: 3}

for(let i in obj){ // Itera sobre todas los propiedades de un objeto, es exclusivo para objetos
	console.log(`obj.${i} = ${obj[i]}`); // obj.a = 1 y asi con b y c
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














/////////////////////////////////////////////////////////////PROPIEDADES DATE//////////////////////////////////////////////////////////


Date.prototype;
Date.constructor;
var d = new Date()
//7 números especifican año, mes, día, hora, minuto, segundo y milisegundo (en ese orden):
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
var d = new Date(100);// miliseegundos
var d = new Date("October 13, 2014 11:13:00"); // String
var d = new Date("Jan 25 2015");



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////METODOS DATE///////////////////////////////////////////////////////////////////////


// Coloca el date en demo
document.getElementById("demo").innerHTML = d;
//Convierte la fecha en string
document.getElementById("demo").innerHTML = d.toString();
//The toUTCString() method converts a date to a UTC string (a date display standard).
document.getElementById("demo").innerHTML = d.toUTCString();
//The toDateString() method converts a date to a more readable format:
document.getElementById("demo").innerHTML = d.toDateString();
//Devuelve el numero en milisegundos entre el dia y la fecha especificada abajo
var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;



//Obtiene las fechas
getTime()//El método devuelve el número de milisegundos desde el 1 de enero de 1970
getFullYear()//Get the year as a four digit number (yyyy)
getMonth()//Get the month as a number (0-11)
getDate()//Get the day as a number (1-31)
getHours()//Get the hour (0-23)
getMinutes()//Get the minute (0-59)
getSeconds()//Get the second (0-59)
getMilliseconds()//Get the millisecond (0-999)
getTime()//Get the time (milliseconds since January 1, 1970)
getDay()//Get the weekday as a number (0-6)
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
Date.now()//Get the time. ECMAScript 5.



//Coloca fechas
setDate()//Set the day as a number (1-31)
d.setFullYear(2020);
setFullYear()//Set the year (optionally month and day)
setHours()//Set the hour (0-23)
setMilliseconds()//Set the milliseconds (0-999)
setMinutes()//Set the minutes (0-59)
setMonth()//Set the month (0-11)
setSeconds()//Set the seconds (0-59)
setTime()//Set the time (milliseconds since January 1, 1970)



now()//Returns the number of milliseconds since midnight Jan 1, 1970
parse()//Parses a date string and returns the number of milliseconds since January 1, 1970
toDateString()//Converts the date portion of a Date object into a readable string
toGMTString()//Deprecated. Use the toUTCString() method instead
toISOString()//Returns the date as a string, using the ISO standard
toJSON()//Returns the date as a string, formatted as a JSON date
toLocaleDateString()//Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()//Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()//Converts a Date object to a string, using locale conventions
toString()//Converts a Date object to a string
toTimeString()//Converts the time portion of a Date object to a string
toUTCString()//Converts a Date object to a string, according to universal time
UTC()//Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()//Returns the primitive value of a Date object

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////JSON/////////////////////////////////////////////////////////////////////////////////////////////////


//Convert a JavaScript object into a JSON string, and send it to the server

var myObj = { "name":"John", "age":31, "city":"New York" }; //demo_json.php: John from New York is 31
var myJSON = JSON.stringify(myObj,replacer,space);//replacer es una funcion usada para transformar el resultado,se llama para cada elemento
window.location = "demo_json.php?x=" + myJSON;
//Convert a string written in JSON format, into a JavaScript object.
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
var myObj = JSON.parse(myJSON,funct);
document.getElementById("demo").innerHTML = myObj.name;//John
JSON.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////PROPIEDADES MATH///////////////////////////////////////////////////////////


//A diferencia de otros objetos globales, el objeto Math no tiene ningún constructor. Los métodos y las propiedades son estáticos asi que no tienes que usar new Math, con solo usarlo es suficiente.

Math.prototype;
Math.PI;	  //Devuelve PI
Math.E        // returns Euler's number
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E




//////////////////////////////////METODOS MATH///////////////////////////////////////////////////////////////////////////////////////////



// devuelve el valor de x redondeado a su entero más cercano:
Math.round(x);
// devuelve el valor de x a la potencia de y
Math.pow(x,y);
//devuelve la raíz cuadrada de x
Math.sqrt(x)
//devuelve el valor absoluto (positivo) de x
Math.abs(x);
//devuelve el valor de x devuelve el entero mayor o igual más próximo a un número dado.
Math.ceil(x);
//devuelve el valor de x redondeado hacia abajo a su entero más cercano
Math.floor(x);
// devuelve el seno (un valor entre -1 y 1) del ángulo x (dado en radianes).Si desea utilizar grados en lugar de radianes, tiene que convertir grados en radianes: Angulo en radianes - Angulo en grados x PI / 180.
Math.sin(90 * Math.PI / 180); // 1 seno de 90grados
//devuelve el coseno (un valor entre -1 y 1) del ángulo x (dado en radianes).Si desea utilizar grados en lugar de radianes, tiene que convertir grados en radianes: Angulo en radianes - Angulo en grados x PI / 180.
Math.cos(0 * Math.PI / 180) //1 cos de 0grados
//Encuentra el valor mas alto en una lista de elementos
Math.max(0,150,20,40,50,60);
//Encuentra el valor mas pequenio en una lista de elementos
Math.min(0,150,20,40,50,60);
//devuelve un número aleatorio entre 0 (incluido) y 1 (exclusivo):
Math.random();
Math.floor(Math.random() * 100);// returns a random integer from 0 to 99
//Returns the arccosine of x, in radians
Math.acos(x)
//Returns the hyperbolic arccosine of x
Math.acosh(x)
//Returns the arcsine of x, in radians
Math.asin(x)
//Returns the hyperbolic arcsine of x
Math.asinh(x)
//Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
Math.atan(x)
//Returns the arctangent of the quotient of its arguments
Math.atan2(y, x)
//Returns the hyperbolic arctangent of x
Math.atanh(x)
//Returns the cubic root of x
Math.cbrt(x)
//Returns the hyperbolic cosine of x
Math.cosh(x)
//Returns the value of Ex
Math.exp(x)
//Returns the natural logarithm (base E) of x
Math.log(x)
//Returns the hyperbolic sine of x
Math.sinh(x)
//Returns the tangent of an angle
Math.tan(x)
//Returns the hyperbolic tangent of a number
Math.tanh(x)
//Returns the integer part of a number (x)
Math.trunc(x)



//////////////////////////////PROPIEDADES BOOLEAN/////////////////////////////////////////////////////////////


Boolean.constructor	//Returns the function that created JavaScript's Boolean prototype
Boolean.prototype	//Allows you to add properties and methods to the Boolean prototype




/////////////////////////////METODOS BOOLEAN/////////////////////////////////////////////////////////////////


var x = true;
x.toString()//Converts a boolean value to a string, and returns the result
x.valueOf()//Returns the primitive value of a boolean


////////////////////////////////////////////////////////////////////////////////////////////////////////////








////////////////////////PROPIEDADES GLOBALES//////////////////////////////////////////////////////////////////////////////////////////


//Las propiedades y funciones globales de JavaScript se pueden utilizar con todos los objetos JavaScript integrados.

Infinity	//A numeric value that represents positive/negative infinity
NaN	//"Not-a-Number" value
undefined//Indicates that a variable has not been assigned a value



///////////////////////////////////////////////Funciones globales de JavaScript/////////////////////////////////////////////////////////
//Todos los objetos tienen estos metodos

decodeURI()//Decodes a URI
decodeURIComponent()//Decodes a URI component
encodeURI()//Encodes a URI
encodeURIComponent()//Encodes a URI component
eval()//Evaluates a string and executes it as if it was script code
isFinite()//Determines whether a value is a finite, legal number
isNaN()//Determines whether a value is an illegal number
Number()//Converts an object's value to a number
parseFloat()//Parses a string and returns a floating point number
parseInt()//Parses a string and returns an integer
String()//Converts an object's value to a string

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//el operador in devuelve true si la propiedad especificada está en el objeto especificado, de lo contrario false:

Ejemplo
// Arrays
var cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars          // Returns false (specify the index number instead of value)
0 in cars               // Returns true
1 in cars               // Returns true
4 in cars               // Returns false (does not exist)
"length" in cars        // Returns true  (length is an Array property)

// Objects
var person = {firstName:"John", lastName:"Doe", age:50};
"firstName" in person   // Returns true
"age" in person         // Returns true

// Predefined objects
"PI" in Math            // Returns true
"NaN" in Number         // Returns true
"length" in String      // Returns true



//El operador void evalúa una expresión y devuelve undefined. Este operador se utiliza a menudo para obtener el valor primitivo indefinido, utilizando "void(0)" (útil al evaluar una expresión sin usar el valor devuelto).


//<a href="javascript:void(0);">
  //Useless link
//</a>

//<a href="javascript:void(document.body.style.backgroundColor='red');">
 // Click me to change the background color of body to red
//</a>








/////////////////////////////////////////////////////////REGULAR EXPRESSIONS//////////////////////////////////////////////////////


/*
¿Qué es una expresión regular?
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda.

Al buscar datos en un texto, puede utilizar este patrón de búsqueda para describir lo que está buscando.

Una expresión regular puede ser un solo carácter o un patrón más complicado.

Las expresiones regulares se pueden utilizar para realizar todos los tipos de operaciones de búsqueda de texto y reemplazo de texto.



*/
//Utilice una expresión regular para realizar una búsqueda sin distinción entre mayúsculas y minúsculas de "w3schools" en una cadena:

var str = "Visit W3Schools"; //6
var n = str.search(/w3schools/i); // / /i para buscar sin distincion


//Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools"); // Vist W3Schools!





//Modificadores
i	//Perform case-insensitive matching	
g	//Perform a global match (find all matches rather than stopping after the first match)	
m	//Perform multiline matching



//brackets
[abc]	//Find any of the characters between the brackets	
[0-9]	//Find any of the digits between the brackets	
(x|y)	//Find any of the alternatives separated with |	



//MetaCharacters
.	//Find a single character, except newline or line terminator
\w	//Find a word character
\W	//Find a non-word character
\d	//Find a digit
\D	//Find a non-digit character
\s	//Find a whitespace character
\S	//Find a non-whitespace character
\b	//Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	//Find a match, but not at the beginning/end of a word
\0	//Find a NULL character
\n	//Find a new line character
\f	//Find a form feed character
\r	//Find a carriage return character
\t	//Find a tab character
\v	//Find a vertical tab character
\xxx	//Find the character specified by an octal number xxx
\xdd	//Find the character specified by a hexadecimal number dd
\udddd	//Find the Unicode character specified by a hexadecimal number dddd



//Quantifier	
n+//Matches any string that contains at least one n
n*//Matches any string that contains zero or more occurrences of n
n?//Matches any string that contains zero or one occurrences of n
n{X}//Matches any string that contains a sequence of X n's
n{X,Y}//Matches any string that contains a sequence of X to Y n's
n{X,}//Matches any string that contains a sequence of at least X n's
n$//Matches any string with n at the end of it
^n//Matches any string with n at the beginning of it
?=n//Matches any string that is followed by a specific string n
?!n//Matches any string that is not followed by a specific string n





////////////////////////EXPRESIONES REGULARES PROPIEDADES//////////////////////////////////////////////////////////////////////


constructor	//Returns the function that created the RegExp object's prototype
global	//Checks whether the "g" modifier is set
ignoreCase	//Checks whether the "i" modifier is set
lastIndex	//Specifies the index at which to start the next match
multiline	//Checks whether the "m" modifier is set
source	//Returns the text of the RegExp pattern




///////////EXPRESIONES REGULARES METODOS////////////////////////////////////////////////////////////////////////////////


I//t searches a string for a pattern, and returns true or false, depending on the result.

//The following example searches a string for the character "e":
var patt = /e/;
patt.test("The best things in life are free!"); //true
/e/.test("The best things in life are free!");

//It searches a string for a specified pattern, and returns the found text as an object.

//If no match is found, it returns an empty (null) object.

var obj = /e/.exec("The best things in life are free!");
document.getElementById("demo").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;


exec()	//Tests for a match in a string. Returns the first match
test()	//Tests for a match in a string. Returns true or false
toString()	//Returns the string value of the regular expression

/()/ // reg exp


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cadena = Lorem ipsum nisi aliqua magna cillum voluptate tempor et cupidatat mollit eiusmod aute ullamco sit consequat in voluptate.

let expReg = new RegExp("lorem","g");

let expReg2 = /lorem/ig;
let expReg3 = /\d/ig;
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

((a,b) => a+b)(12,45);










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












///////////////////////////////////////////////ERRORES//////////////////////////////////////////////////////////////////////////////////


//La instrucción le permite probar un bloque de código en busca de errores.try

//La instrucción le permite controlar el error.catch

//La instrucción le permite crear errores personalizados.throw

//La instrucción le permite ejecutar código, después de try y catch, independientemente del resultado.finally






//<p id="demo"></p>

try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}

/*La instrucción permite definir un bloque de código que se va a probar para detectar errores mientras se ejecuta.try

La instrucción le permite definir un bloque de código que se va a ejecutar, si se produce un error en el bloque try.catch

Las sentencias JavaScript y vienen en pares:trycatch
*/
try {
	let numero = "y";
  	if(isNaN(numero)){
  		throw new Error("El caracter introducido no es un Numero");
  	}
catch(err) {
  console.log(`Se produjo el siguiente error: ${err}`); // Se produjo el siguiente error: El caracter introducido no es un Numero
}

/*la instrucción le permite crear un error personalizado.throw

Técnicamente puede producir una excepción (producir un error).

La excepción puede ser un JavaScript , a , a o un :StringNumberBooleanObject*/

throw "Too big";    // throw a text
throw 500;          // throw a number


function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
/* PROPIEDADES ERROR
name	Sets or returns an error name
message	Sets or returns an error message (a string)


Valores del Error

EvalError	Se ha producido un error en la función eval()
RangeError	Se ha producido un número "fuera del rango"
ReferenceError	Se ha producido una referencia ilegal
SyntaxError	Se ha producido un error de sintaxis
TypeError	Se ha producido un error de tipo
URIError	Se ha producido un error en encodeURI()
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











//////////////////////////////////OBJETOS DE ALTO NIVEL(BOM)/////////////////////////////////////////////////////////////////////////////


//DEPENDEN DEL NAVEGADOR

/*Algunos de los elementos que forman el BOM son los siguientes:

Crear, mover, redimensionar y cerrar ventanas de navegador.
Obtener información sobre el propio navegador.
Propiedades de la página actual y de la pantalla del usuario.
Gestión de cookies.
Objetos ActiveX en Internet Explorer.*/

//https://www.arkaitzgarro.com/javascript/images/cap06/jerarquia.png
//los objetos mostrados con varios recuadros superpuestos son arrays.

/////////////////////PROPIEDADES WINDOW////////////////////////////////////////////////////////////////////////////////////////////

//El objeto window representa la ventana completa del navegador. Mediante este objeto, es posible mover, redimensionar y manipular la ventana actual del navegador. Incluso es posible abrir y cerrar nuevas ventanas de navegador.


window.closed	//Returna un valor booleano si la ventana esta cerrada
window.console	//Returns a reference to the Console object, which provides methods for logging information to the browser's console
window.defaultStatus	//Sets or returns the default text in the statusbar of a window
window.document	//Returns the Document object for the window (See Document object)
window.frameElement	//devuelve el frame en el que la ventana esta insertada
window.frames	//devuelve todos los elementos iframe de la ventana
window.history	//Returns the History object for the window (See History object)
window.innerHeight	//Returns the alto of the window's content area (viewport) including scrollbars
window.innerWidth	//Returns the ancho of a window's content area (viewport) including scrollbars
window.length	//Retorna el numero de frames que tiene la ventana
window.localStorage	//Allows to save key/value pairs in a web browser. Stores the data with no expiration date
window.location	//Returns the Location object for the window (See Location object)
window.name	//Pone o retorna el nombre de la ventana
window.navigator	//Returns the Navigator object for the window (See Navigator object)
window.opener	//Retorna una referencia de la ventana que creo la ventana actual
window.outerHeight	//Returns the alto of the browser window, con toolbar y scrollbar
window.outerWidth	//Returns the ancho of the browser window, con toolbar y scrollbar
window.pageXOffset	//Returns the pixels de el scroll horizontal
window.pageYOffset	//Returns the pixels de el scroll vertical
window.parent	//Retorna la ventana padre de la ventana actual
window.screen	//Returns the Screen object for the window (See Screen object)
window.screenLeft	//Returns the horizontal coordinate of the window relative to the screen
window.screenTop	//Returns the vertical coordinate of the window relative to the screen
window.screenX	//Returns the horizontal coordinate of the window desde la izquierda
window.screenY	//Returns the vertical coordinate of the window desde arriba
window.sessionStorage	//Allows to save key/value pairs in a web browser. Stores the data for one session
window.scrollX	//An alias of pageXOffset
window.scrollY	//An alias of pageYOffset
window.self	//Retorna la ventana actual
window.status	//Sets or returns the text in the statusbar of a window
window.top	//Returns the topmost browser window





//////////////////////////////////////METODOS WINDOW/////////////////////////////////////////////////////////////////////////////////////

//No es necesario colocar el window delante

window.alert()	//Displays an alert box with a message and an OK button
window.atob()	//Decodes a base-64 encoded string
window.blur()	//Removes focus from the current window
window.btoa()	//Encodes a string in base-64
window.clearInterval()	//Clears a timer set with setInterval()
window.clearTimeout()	//Clears a timer set with setTimeout()
window.close()	//Closes the current window
window.confirm()	//Displays a dialog box with a message and an OK and a Cancel button
window.focus()	//Sets focus to the current window
window.getComputedStyle()	//Gets the current computed CSS styles applied to an element
window.getSelection()	//Returns a Selection object representing the range of text selected by the user
window.matchMedia()	//Returns a MediaQueryList object representing the specified CSS media query string
window.moveBy()	//Moves a window relative to its current position
window.moveTo()	//Moves a window to the specified position
window.open()	//Opens a new browser window
window.print()	//Prints the content of the current window
window.prompt()	//Displays a dialog box that prompts the visitor for input
window.requestAnimationFrame()	//Requests the browser to call a function to update an animation before the next repaint
window.resizeBy()	//Resizes the window by the specified pixels
window.resizeTo()	//Resizes the window to the specified width and height
window.scroll()	//Deprecated. This method has been replaced by the scrollTo() method.
window.scrollBy()	//Scrolls the document by the specified number of pixels
window.scrollTo()	//Scrolls the document to the specified coordinates
window.setInterval()	//Calls a function or evaluates an expression at specified intervals (in milliseconds)
window.setTimeout()	//Calls a function or evaluates an expression after a specified number of milliseconds
window.stop()	//Stops the window from loading


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//open(<url> <nombre> <especificaciones>)
let miVentana;

function crearVentana(){
	miVentana = window.open("http://google.com");
	miVentana = window.open("","parent","width=500,height=200");
	miVentana.document.write("<h1>Mi vida</h1>")
}

// <button onclick="crearVentana()">Clickea</button>


function cerrar(){
	miVentana.close();
}
//<button onclick="cerrar()">cerrar</button>



//resizeBy(<npixel>, npixel)

function redimensionarVentana(){
	miVentana.resizeby(10,10);
}
//<button onclick="redimensionarVentana()">redimensionar</button>

//resizeTo(<npixel>, npixel)

//moveBy(<npixel>, npixel)

function mover(){
	miVentana.moveBy(10,10);
}
//<button onclick="mover()">moverse 10 px</button>

//moveTo(<npixel>, npixel)

//scrollBy(<npixel>, npixel)

//focus()
function enfocar(){
	miVentana.focus();
}


//print()

function imprimir(){
	//print();
	miVentana.print();
}

//stop()

function parar(){
	miVentana.stop();
}

alert("he");
prompt("hr");
confirm("he");


setTimeOut(<function>,<miliseg>); // indica cuantos segundos deben pasar antes que la funcion se ejecute

function muestraMensaje() {
  console.log("Han transcurrido 3 segundos desde que me programaron");
}
 
setTimeout(muestraMensaje, 3000);




clearTimeout(<variable timeout>);//cancela el tiempo de espera
clearInterval() // Cancela una repeticion de intervalo
setInterval(<funcion>,<miliseg>);//repite cada intervalo











/////////////////////////////////////////////////PROPIEDADES SCREEN////////////////////////////////////////////////////////////////////


//El objeto screen se utiliza para obtener información sobre la pantalla del usuario. Uno de los datos más importantes que proporciona el objeto screen es la resolución del monitor en el que se están visualizando las páginas.


pixelDepth	//Returns the color resolution (in bits per pixel) of the screen
availHeight	//Altura de pantalla disponible para las ventanas
availWidth	//Anchura de pantalla disponible para las ventanas
colorDepth	//Profundidad de color de la pantalla (32 bits normalmente)
height	//Altura total de la pantalla en píxel
width	//Anchura total de la pantalla en píxel





/////////////////////////////////////////////////////PROPIEDADES NAVIGATOR////////////////////////////////////////////////////////

//El objeto navigator se emplea habitualmente para detectar el tipo y/o versión del navegador en las aplicaciones cuyo código difiere para cada navegador. Además, se emplea para detectar si el navegador tiene habilitadas las cookies y Java y también para comprobar los plugins disponibles en el navegador.

appCodeName	//Returns the code name of the browser
appName	//Returns the name of the browser
appVersion	//Returns the version information of the browser
cookieEnabled	//Determines whether cookies are enabled in the browser
geolocation	//Returns a Geolocation object that can be used to locate the user's position
language	//Returns the language of the browser
onLine	//Determines whether the browser is online
platform	//Returns for which platform the browser is compiled
product	//Returns the engine name of the browser
userAgent	//Returns the user-agent header sent by the browser to the server
Navigator //Object Methods

///////////////////////////METODOS NAVIGATOR////////////////////////////////////////////////////////////////////////////////////////////////


javaEnabled()	Specifies whether or not the browser has Java enabled







//////////////////////////////////////////////////////LOCATION//////////////////////////////////////////////////////
//El objeto location representa la URL de la página HTML que se muestra en la ventana del navegador y proporciona varias propiedades útiles para el manejo de la URL:





//////////////////////////////////////////////////////HISTORY//////////////////////////////////////////////////////











////////////////////////////////////////DOCUMENT OBJECT MODEL(DOM)/////////////////////////////////////////////////////////////////////////

//Al escribir código para la Web con JavaScript, hay muchas API disponibles. A continuación se muestra una lista de todas las interfaces (es decir, tipos de objetos) que puede usar al desarrollar su aplicación web o sitio.
//DOM permite a los programadores web acceder y manipular las páginas XHTML como si fueran documentos XML. 
//De hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos html.

//Tipos de Nodos
/*Document, nodo raíz del que derivan todos los demás nodos del árbol.
Element, representa cada una de las etiquetas XHTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.
Attr, se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas XHTML, es decir, uno por cada par atributo=valor.
Text, nodo que contiene el texto encerrado por una etiqueta XHTML.
Comment, representa los comentarios incluidos en la página XHTML.*/



//////////////////////////////////////////////////////METODOS DOCUMENT////////////////////////////////////////////////////////////////


addEventListener()	//Attaches an event handler to the document
adoptNode()	//Adopts a node from another document
close()	//Closes the output stream previously opened with document.open()
createAttribute()	//Creates an attribute node
createComment()	//Creates a Comment node with the specified text
createDocumentFragment()	//Creates an empty DocumentFragment node
createElement()	//Creates an Element node
createEvent()	//Creates a new event
createTextNode()	//Creates a Text node
execCommand()	//Invokes the specified clipboard operation on the element currently having focus.
fullscreenEnabled()	//Returns a Boolean value indicating whether the document can be viewed in fullscreen mode
getElementById()	//Returns the element that has the ID attribute with the specified value
getElementsByClassName()	//Returns a HTMLCollection containing all elements with the specified class name
getElementsByName()	//Returns a HTMLCollection containing all elements with a specified name
getElementsByTagName()	//Returns a HTMLCollection containing all elements with the specified tag name
hasFocus()	//Returns a Boolean value indicating whether the document has focus
importNode()	//Imports a node from another document
normalize()	//Removes empty Text nodes, and joins adjacent nodes
normalizeDocument()	//Removes empty Text nodes, and joins adjacent nodes
open()	//Opens an HTML output stream to collect output from document.write()
querySelector()	//Returns the first element that matches a specified CSS selector(s) in the document
querySelectorAll()	//Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
removeEventListener()	//Removes an event handler from the document (that has been attached with the addEventListener() method)
renameNode()	//Renames the specified node
write()	//Writes HTML expressions or JavaScript code to a document
writeln()	//Same as write(), but adds a newline character after each statement
createCDATASection()
createExpression()
createNodeIterator()
createRange()


document.createTreeWalker
document.currentScript
document.dir
document.Document
document.enableStyleSheetsForSet
document.evaluate
document.exitFullscreen
document.exitPointerLock
document.fonts
document.fullscreen
document.getAnimations
document.getBoxObjectFor
document.hasStorageAccess
document.height
document.hidden
document.lastStyleSheetSet
document.location
document.onfullscreenchange
document.onfullscreenerror
document.onoffline
document.ononline
document.onselectionchange
document.onvisibilitychange
document.origin
document.plugins
document.policy
document.preferredStyleSheetSet
document.queryCommandEnabled
document.queryCommandState
document.queryCommandSupported
document.releaseCapture
document.requestStorageAccess
document.scrollingElement
document.selectedStyleSheetSet
document.styleSheetSets
document.timeline
document.visibilityState
/////////////////////////////////////////////////////PROPIEDADES DOCUMENT///////////////////////////////////////////////////////////

compatMode
contentType
activeElement	//Returns the currently focused element in the document
anchors	//Returns a collection of all <a> elements in the document that have a name attribute
applets	//Returns a collection of all <applet> elements in the document
baseURI	//Returns the absolute base URI of a document
body	//Sets or returns the document's body (the <body> element)
cookie	//Returns all name/value pairs of cookies in the document
charset	//Deprecated. Use characterSet instead. Returns the character encoding for the document
characterSet	//Returns the character encoding for the document
defaultView	//Returns the window object associated with a document, or null if none is available.
designMode	//Controls whether the entire document should be editable or not.
doctype	//Returns the Document Type Declaration associated with the document
documentElement	//Returns the Document Element of the document (the <html> element)
documentMode	//Returns the mode used by the browser to render the document
documentURI	//Sets or returns the location of the document
domain	//Returns the domain name of the server that loaded the document
domConfig	//Obsolete. Returns the DOM configuration of the document
embeds	//Returns a collection of all <embed> elements the document
forms	//Returns a collection of all <form> elements in the document
fullscreenElement	//Returns the current element that is displayed in fullscreen mode
head	//Returns the <head> element of the document
images	//Returns a collection of all <img> elements in the document
implementation	//Returns the DOMImplementation object that handles this document
inputEncoding	//Returns the encoding, character set, used for the document
lastModified	//Returns the date and time the document was last modified
links	//Returns a collection of all <a> and <area> elements in the document that have a href attribute
readyState	//Returns the (loading) status of the document
referrer	//Returns the URL of the document that loaded the current document
scripts	//Returns a collection of <script> elements in the document
strictErrorChecking	//Sets or returns whether error-checking is enforced or not
title	//Sets or returns the title of the document
URL //Returns the full URL of the HTML document

////////////////////////////////////////////////ATRIBUTOS DOM////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////CONSOLA DOM////////////////////////////////////////////////////////////////////////

//Acede al debugger de js

console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg}); //Escribe un mensaje de error en la consola si la aserción es false. Si la aserción es verdadera, no pasa nada.
console.clear() // Limpia la consola
console.context()
console.count() // cuenta cuantas veces se ejecuta si mismo
console.countReset()
console.debug()
console.dir() // puedes ver las propiedades y metodos de lo que sea
console.dirxml()
console.error() // te sale error
console.group() // te lo coloca en un flex
console.groupCollapsed()
console.groupEnd()
console.info() // informacion
console.log() // imprime
console.memory;
console.profile()
console.profileEnd()
console.table() // te lo muestra como tabla
console.time: //toma el tiempo
console.timeEnd() // finaliza el conteo de tiempo
console.timeLog()
console.timeStamp()
console.trace()
console.warn() // te muestra una advertencia


console.log(`hola me llamo %s y me gusta %d`, "tu", 15);


console.time("cuanto tiempo tarda");
let arreglo = Array(1000);
for (var i = 0; i < arreglo.length; i++) {
	arreglo[i] = i;
};

console.timeEnd("cuanto tiempo tarda");


let x = 3;
let y = 2;
let pruebaXY = "Se espera que x siempre sea menor que y";
console.assert(x < y, {x,y,pruebaXY})


////////////////////////////////////////////////ELEMENTOS DOM////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////EVENTOS DOM////////////////////////////////////////////////////////////////////////
//Los eventos DOM se envían para notificar el código de las cosas interesantes que han tenido lugar. Cada evento está representado por un objeto que se basa en la interfaz de evento  y puede tener campos personalizados adicionales o funciones utilizadas para obtener información adicional sobre lo que sucedió. Los eventos pueden representar todo, desde las interacciones básicas del usuario hasta las notificaciones automatizadas de las cosas que suceden en el modelo de representación.




////////////////////////////////////////////////OBJETOS DE ELEMENTOS DOM////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////GEOLOCACION DOM////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////COLECCIONHTML DOM////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////ESTILO DOM////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////ALMACENAMIENTO WEB////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













/////////////////////////////////////ALGORITMOS///////////////////////////////////////////////////////////////////////////////////////////



/*
let c = prompt("Ingresa un texto"),d = prompt("Ingresa un caracter a sacar las letras repetidas");

console.log(contarFs(c,d));



function contarFs(c,d){
	let contar = 0;
	for(i = 0; i < c.length -1; i++){
		if(c[i] == d) //compara si el caracter en esa posicion es igual al caracter a contar
			contar++;
	}
	return contar;
}
*/




/*
//Ejercicio de Minimo
var a = Number(prompt("Introduce un numero")),b = Number(prompt("Introduce un numero"));

compararNumero(a,b);

function compararNumero(a,b){
	if(a < b){
		return console.log(`El numero mas pequenio entre ${a} y ${b} es ${a}`);
	}else if(b < a){
		return console.log(`El numero mas pequenio entre ${a} y ${b} es ${b}`);
	}else{
		return console.log("ambos son iguales");
	}
}





//Ejercicio de pares e impares recursivo
esPar(Math.abs(a)); //valor absoluto

function esPar(a){
	if(a == 0){
		return console.log(true)
	}else if(a == 1){
		return console.log(false)
	}else{
		esPar(a-2);
	}
}

*/

/*Arrow function

let h = () => 2+5;
console.log(h());
*/



/*Succesion de fibonacci

var n = Number(prompt("Ingresa un numero entero"));

var fibonacci = 1,posicion = 1;
var anterior = 0,ultNumero = 0;

while (posicion < n) {
	anterior = ultNumero;
	ultNumero = fibonacci;
	fibonacci = anterior + ultNumero;
	posicion++;
}
console.log(`fibonacci ${posicion} = ${fibonacci}`);
*/
const hola = (a,b) => {
	return (a > b)
	? console.log("pepo")
	:console.log("maraca");
}
hola(2,3)



/*



const humus = function(factor){
   const ingrediente = function(cantidad, unidad, nombre){
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
  };
  ingrediente(1, "lata", "garbanzos");
  ingrediente(0.25, "taza", "tahini");
  ingrediente(0.25, "taza", "jugo de limón");
  ingrediente(1, "clavo", "ajo");
  ingrediente(2, "cucharada", "aceite de oliva");
  ingrediente(0.5, "cucharadita", "comino");
};

humus(5);

*/
/*	function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return encontrar(actual + 5, `(${historia} + 5)`) ||
             encontrar(actual * 3, `(${historia} * 3)`);
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(23));
// → (((1 * 3) + 5) * 3)

	const potencia = (base,exponente) => {
		let resultado = 1;
		for(cuenta = 0; cuenta < exponenente;cuenta++){
			resultado *=base;
		}
		return resultado;
	}
	console.log(potencia(2,3));

	//Pensar en programas de esta manera requiere algo de práctica. Un buen modelo mental es pensar en los valores de función como que contienen tanto el código en su cuerpo tanto como el entorno en el que se crean. Cuando son llamadas, el cuerpo de la función ve su entorno original, no el entorno en el que se realiza la llamada.

	function multiplicar(factor){ 
		return function num(numero){
			numero*factor
		}
	};
	let duplicar = multiplicar(5);
	console.log(duplicar(5));



function potencia(base, exponente = 2) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
}

console.log(potencia(4));
// → 16
console.log(potencia(2, 6));
// → 64

//const es local

	let x = 5;
	if (true) {
	  var y = 20;
	  let x = 30;
	  console.log(x + y);
	  // → 60
	}
	// y no es visible desde aqui
	console.log(x + y);
	// → 40

	let tamano = 8;

	let tablero = "";

	for (let j = 0; j < tamano; j++) {
	  for (let i = 0; i < tamano; i++) {
	    if ((i + j) % 2 == 0) {
	      tablero += " ";
	    } else {
	      tablero += "#";
	    }
	  }
	  tablero += "\n";
	}

	console.log(tablero);









	
	for (let i = 1; i <= 100; i++) {
	  	let salida = "";
		 if (i % 3 == 0){
		 	salida += "Fizz";
		 } 
		 if (i % 5 == 0){
		 	salida += "Buzz"
		 }
		 //Si tiene algun valor lo imprime, si no imprime el numero
		 console.log(salida || i);
	}












	for(let i = 0; i < 100; i++){

		if(i % 5 == 0 && i % 3 == 0) {
			console.log("FizzBuzz")
		}else if(i % 3 == 0){
			console.log("Fizz")
		} else if(i % 5 == 0){
			console.log("Buzz")
		}else{
			console.log(i)
		}
	}



	for(let i = "#"; i.length < 8 ; i+="#"){
		console.log(i);
	}



/*







	/*for(let i = 20; ; i++){

		if(i % 7 == 0){
			console.log(i);
			//continue;
			break;
		}
	}

















var sumaID = document.getElementById('sumar');

var sumar = (n1,n2) => n1 + n2;

sumaID.innerHTML += sumar(10,5);















/////////////////////////////////////////////////TRUCOS////////////////////////////////////////////////////////////////////////


	const users = {
		name: "ed",
		ocupation: "sex model",
		hobbies: "licking doors"
	};

	const userArray = Object.values(users); // obtener los valores de un objeto a un array, si coloco keys me da los nombres

	console.log(userArray);


//////////////////////////////////////////////////////////////////

	const users = [1,2,3,4,5,6,7];

	const usersObject = {...users};

	console.log(usersObject);  //Transforma un array en objeto



/////////////////////////////////////////////////////////////

	const dynamic = 'hobbies';

	const users = {
		name: "ed",
		email: "deve@aol.com",
		[dynamic]: "sleep" //Funciona para colocar un valor en un objeto de forma dinamica ya que lo define la variable
	};

	console.log(users);




///////////////////////////////////////////////////////////////



	const users = ["ed ", "traversy", "lol", "gol", "lol"];

	const unique = Array.from(new Set(users)); //EL ARRAY QUEDA SIN VALORES REPETIDOS

	console.log(unique);



//////////////////////////////////////////////////////////////


	let numero = Number(prompt("Escribe un numero"));
	let validar = false;
if(!Number.isNaN(numero)){
	validar = true;
}else{
	
}
console.log(validar? "la raiz cuadrada de " + numero + " es " + numero * numero:"No es un numero");

console.log(Math.min(2,4) + 100);




///////////////////////////////////////////////////////////////////////////////////
//Devuelve una funcion aleatoria entre min y max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

*/



