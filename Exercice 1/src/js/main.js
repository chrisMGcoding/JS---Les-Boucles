// intro boucle 
// for (let i = 0; i < 10; i++) {
//     console.log("Hello World " + i)
// }

// boucle tableau
// let monTab = ["Fanny", "Django le chat", "pastèque", "rap"];
// for (let i = 0; i < monTab.length; i++) {
//     console.log("bonjour " + monTab[i])
// }

// for(i in monTab) {
//     console.log("bonjour " + monTab[i]);
// }

// 1.
let classe = ["Yassine", "Ali", "Elvis", "Adil", "Kevin", "Stan", "Chris", "Mouna", "Nasila", "Fanny", "Nathan", "Jean", "Vanhoa", "Agim"];

for (let i = 0; i < classe.length; i++) {
    console.log("Bonjour " + classe[i]);
}

// 2.
let nb = prompt("Encodez un nombre !");

for (let i = 0; i <= nb; i++) {
    console.log("Numéro " + i);
}