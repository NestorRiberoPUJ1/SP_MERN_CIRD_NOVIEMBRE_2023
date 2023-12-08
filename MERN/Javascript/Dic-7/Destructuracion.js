

var lista = ["Flamengo", "Palmeiras", "Fluminense", "Santos", "Sao Paulo"];
/* Sintaxis antigua */
console.time("antigua");
var equipo1 = lista[0];
var equipo2 = lista[1];
var equipo3 = lista[2];
var equipo4 = lista[3];
var equipo5 = lista[4];
console.log(equipo1, equipo2, equipo3, equipo4, equipo5);
console.timeEnd("antigua");

/* Sintaxis ES6 */
console.time("es6");
var [team1, team2, team3, team4, team5] = lista;
console.log(team1, team2, team3, team4, team5);
console.timeEnd("es6");



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

/* Sintaxis antigua */
console.time("antigua");
const firstName = person.firstName;
const lastName = person.lastName;
const email = person.email;
const password = person.password;
const username = person.username;
const createdAt = person.createdAt;
console.log(firstName, lastName, email, password, username, createdAt);
console.timeEnd("antigua");

/* Sintaxis ES6 */
console.time("es6");
const { firstName: firstName2, lastName: lastName2, email: email2, password: password2, username: username2, createdAt: createdAt2 } = person;
console.log(firstName2, lastName2, email2, password2, username2, createdAt2);
console.timeEnd("es6");


const persona = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        },
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '205001',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DUZ',
        }
    ],
    createdAt: 1543945177623
};


const { addresses: [, { zipcode: zip }, , { zipcode: zip2 }] } = persona;
console.log(zip, zip2);

/* Residuo */


const animales = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [caballo, perro, ...resto] = animales;
console.log(caballo, perro, resto);

const ciudadano = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { firstName: nombre, lastName: apellido, ...demas } = ciudadano;

console.log(nombre, apellido, demas);


let arr1 = [1, 2, 3, 4];//Creo
let arr2 = [...arr1];//asignacion el valor
arr2.push(5);//agregamos a ar2
console.log(arr1, arr2);
const ciudadano2 = {...ciudadano};
ciudadano2.firstName = "Bab";
console.log(ciudadano.firstName, ciudadano2.firstName);


