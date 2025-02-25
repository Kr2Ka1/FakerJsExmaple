// npm init
// npm install @faker-js/fake
// node index.js paleidimui
//fake duomenis sukurianti biblioteka
// npm i fs

//http://www.npmjs.com/package/@faker-js/faker
//http://fakerjs.dev/api/
const { faker } = require('@faker-js/faker');
const fs = require('fs');

//Sugeneruoti netikrą vardą ir avardę

let randomName = faker.person.firstName();
let randomSurname = faker.person.lastName();

// console.log(randomName);
// console.log(randomSurname);

//sugeneruoti 100 netikrų users/people, su šiais duomenimis
//Vardas
//Pavardė
//Tel. nr.
//email
//userName
//password
//gimimo data

function generateUser() {
    return {
        'name': faker.person.firstName(),
        'surname': faker.person.lastName(),
        'phone': faker.phone.number(),
        'email': faker.internet.email(),
        'userName': faker.internet.username(),
        'password': faker.internet.password(),
        'birthDate': faker.date.past() //atsitiktinė data praeityje
    }
}
// console.log(user);


function generateProduct() {
    return {
        'title': faker.commerce.product(),
        'description': faker.commerce.productDescription(),
        'price': faker.commerce.price()
    }
}
// console.log(product);


function generateCategory() {
    return {
        'title': faker.commerce.product(),
        'description': faker.commerce.productDescription(),
        'bookSeries': faker.book.series()
    };
}
// console.log(category);


function generateToy() {
    return {
        'title': faker.commerce.product(),
        'description': faker.commerce.productDescription(),
        'price': faker.commerce.price()
    };
}
// console.log(toy);


//Išsisaugoti duomenis i duomeų failus. Json ir csv
//lengvai pakeisti generuojamų duomenų kiekį


function generateCompany() {
    return {
        'title': faker.commerce.department()
    }
}


const users = Array.from({ length: 100 }, generateUser);
const product = Array.from({ length: 100 }, generateProduct);
const category = Array.from({ length: 100 }, generateCategory);
const toy = Array.from({ length: 100 }, generateToy);
const company = Array.from({ length: 100 }, generateCompany);
console.log(users);
console.log(users.length);

//users objektą pasiversti į paprastą tekstą
fs.writeFileSync('users.json', JSON.stringify(users, null, 4));
fs.writeFileSync('product.json', JSON.stringify(product, null, 4));
fs.writeFileSync('category.json', JSON.stringify(category, null, 4));
fs.writeFileSync('toy.json', JSON.stringify(toy, null, 4));
fs.writeFileSync('company.json', JSON.stringify(company, null, 4));

//pasiimam bet kokį sugenruotą vartotoją
//JSON
// {
//     "name": "Dakota",
//     "surname": "Kihn",
//     "phone": "(734) 849-4654 x0547",
//     "email": "Kenyatta_Gutkowski@gmail.com",
//     "userName": "Tiara.Marks97",
//     "password": "7L_1BcUS2Pwd07c",
//     "birthDate": "2025-02-25T08:12:51.215Z"
// },

//CSV formatu atrodyti turi taip
//name, surname, phone, email, userName, password, birthDate
//Dakota, Kihn, (734) 849-4654 x0547, Kenyatta_Gutkowski@gmail.com, Tiara.Marks97, 7L_1BcUS2Pwd07c, 2025-02-25T08:12:51.215Z

const csvHeader = Object.keys(users[0]).join(',') + '\n';
fs.writeFileSync('users.csv', csvHeader);
let csvRows = '';
for (let i = 0; i < users.length; i++) {
    let csvRow = Object.values(users[i]).join(',') + '\n';
    csvRows += csvRow;
}

//irašau csvHeader ir vieną csvRow
fs.writeFileSync('users.csv', csvHeader + csvRows);

console.log(csvHeader);



//Primityvus generavimas
//Sulurti daug (100 users) duomenų objektų
// const users = [];
// for (let i = 0; i < 100; i++) {
//     let user = {
//         'name': faker.person.firstName(),
//         'surname': faker.person.lastName(),
//         'phone': faker.phone.number(),
//         'email': faker.internet.email(),
//         'userName': faker.internet.username(),
//         'password': faker.internet.password(),
//         'birthDate': faker.date.past() //atsitiktinė data praeityje
//     };
//     users.push(user);
// }
// console.log(users);