/** 
* Spread syntax di gunakan untuk memisahkan array atau project menjadi 1 item (single value)
* Notasinya adalah ... (titik tiga)
*/

const fruits = ["Apel", "Anggur"];

const newFruits = ["Mangga", "Lemon"];

// Spread operator tidak aktif
// console.log(fruits);

// Spread operator aktif
// console.log(... fruits);

const user = {
    name: "Budi Santoso",
    major: "Informatics"
};

const newUser = {
    ...user,
    age: 20,
};

console.log(newUser);