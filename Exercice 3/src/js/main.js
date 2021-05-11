// 1.
let multiplicateur = 5;

for (let i = 1; i <= 9; i++) {
    console.log(`${multiplicateur} x ${i} = ${i * multiplicateur}`);
}

// 3.
for (let i = 20; i >= 0; i--) {
    (i%2 == 0) ? console.log(i) : "try again";
}

// 4.
let classe = ["Yassine", "Ali", "Elvis", "Adil", "Kevin", "Stan", "Chris", "Mouna", "Nasila", "Fanny", "Nathan", "Jean", "Vanhoa", "Agim"];
let longPrenoms = [];

for (i in classe) {
    // classe[i].length > 5 ? longPrenoms.push(classe[i]) : "try again";
    if (classe[i].length > 5) {
        longPrenoms.push(classe[i]);
    }
    
}
console.log(longPrenoms);

// 5.
let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grossesSommes = [];

for (i in sommes) {
    // sommes[i] > 60 ? grossesSommes.push(sommes[i]) && sommes.slice(sommes[i]) : "try again";
    if (sommes[i] > 60) {
        grossesSommes.push(sommes[i]);
    }
}

for (i in grossesSommes) {
    sommes.splice(sommes.indexOf(grossesSommes[i]), 1);
}
console.log(sommes);
console.log(grossesSommes);

// 6.
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(element => {
    console.log(typeof element);
    if (typeof element == "string") {
        typeString.push(element);
    }
    else if (typeof element == "number") {
    typeNumber.push(element);
    }
    else if (typeof element == "object") {
        typeObject.push(element);
    }
    else {
        typeAutre.push(element);
    }
});

console.log(donnees);
console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);

// typeString.forEach(element => {
//     donnees.splice(donnees.indexOf(element),1);
// });

donnees.splice(0, donnees.length);
