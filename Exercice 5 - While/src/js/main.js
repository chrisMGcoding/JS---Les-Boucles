// 1.
// let nombre = prompt("Encodez un nombre !");
// let nb1 = 0;

// while (nombre > nb1 ) {
//     nb1++;
//     console.log(nb1);
// }

// 2.
// let classe = [];
// let nomEleve;
// let maxStu = prompt("Quel est le nombre maximum d'étudiants ?");

// while (classe.length < maxStu) {
//     nomEleve = prompt("Entrez un nom d'élève");
//     classe.push(nomEleve);
//     console.log(classe);
// }

// console.log(classe);

// 3.
// let tab = ["Yassine","Ali","Agim","Adil","Mouna","Nasila","Seif","Haroune","Chris"];
// let i = 0;
// while (i < 9) {
//     console.log(`Bonjour ${tab[i]}`);
//     i++;
// }

// let prenom = ["agim","bekir","adem","chris","bella","afer","demo","tila","biba"];
// let compteur = -1;
// prenom.forEach(element => {
//     compteur++;
//     if (compteur < prenom.length) {
//         console.log(bonjour ${prenom[compteur]});
//     }
// });

// 4.
// let tab = ["banane", "pastèque", "pomme", "fraise", "ananas", "framboise"];

// while (tab.length > 0) {
//     tab.shift();
//     console.log(tab);
// }

// 5.
// let panierLegumes = ["carottes", "courgettes", "tomates", "concombres"];
// let longueur = panierLegumes.length-1; // longueur = 3
// let caisseLegumes = [];


// while(longueur >= 0) {
//     caisseLegumes.push(panierLegumes[longueur]);
//     panierLegumes.pop();
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
//     longueur--;
// }

// 6.
let repEnigme = prompt("J'ai un dos et 4 pieds, qui suis-je ?");

while (repEnigme != "la chaise") {
    repEnigme = prompt("faux, réessayez !");
}

alert("Bonne réponse !");


