// npm init
// npm install @faker-js/fake
// node index.js paleidimui
//fake duomenis sukurianti biblioteka

//http://www.npmjs.com/package/@faker-js/faker
//http://fakerjs.dev/api/
const { faker } = require('@faker-js/faker');

//Sugeneruoti netikrą vardą ir avardę

let randomName = faker.person.firstName();
let randomSurname = faker.person.lastName();

console.log(randomName);
console.log(randomSurname);

//sugeneruoti 100 netikrų users/people, su šiais duomenimis
//Vardas
//Pavardė
//Tel. nr.
//email
//userName
//password
//gimimo data

const user = {
    'name': faker.person.firstName(),
    'surname': faker.person.lastName(),
    'phone': faker.phone.number(),
    'email':faker.internet.email(),
    'userName': faker.internet.username(),
    'password': faker.internet.password(),
    'birthDate': faker.date.past() //atsitiktinė data praeityje
};
console.log(user);

const product = {
    'title': faker.commerce.product(),
    'description': faker.commerce.productDescription(),
    'price': faker.commerce.price()
};
console.log(product);
