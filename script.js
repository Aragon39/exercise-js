// let dwTab = [
//   "marc",
//   "farid",
//   "delphine",
//   "christopher",
//   "gaetan",
//   "vlad",
//   "alex",
//   "sylvain",
//   "caroline",
//   "ali",
//   "arnaud",
//   "maxime",
//   "khaled",
//   "dylan",
//   "yannis",
// ];
// console.log(dwTab);

// let maliste = document.getElementById("ma liste");
// console.log(maliste);

// let tableauInverse = dwTab.slice().reverse();
// console.log("tableau Inverse");
// console.table(tableauInverse);

// dwTab.unshift(15);
// console.table(dwTab);

// dwTab.push('patmo','formateur');
// console.table(dwTab);

// dwTab.shift(0);
// dwTab.pop(17)
// console.table(dwTab);

// dwTab.push('ToTo');
// let position = 2 ;
// dwTab.splice(position, 2, 'ToTo')
// console.table(dwTab);

// let indiceAReplacer = dwTab.indexOf("ali")
// if (indiceAReplacer !== -1) {
//   // Nouvelle valeur à assigner
//   let nouvelleValeur = "Khaled";

//   // Remplacer l'élément à l'indice spécifié
//   dwTab[indiceAReplacer] = nouvelleValeur;

//   // Afficher le tableau
//   console.table(dwTab);
// }
// // Utilisation d'une boucle for avec un itérateur
//  for (let i = 0; i < dwTab.length; i++) {
//    console.log("Index " + i + ": " + dwTab[i]);
//  }
// // Utilisation de la boucle forEach
//  dwTab.forEach(function(element, index) {
//   console.log("Index " + index + ": " + element);
// });

// // Utilisation de la boucle for...of
// for (const element of dwTab) {
//   console.log(element);
// }

// for (const index in dwTab) {
//   console.log("Index" + index +": " + dwTab[index]);
// }

// exercise numero 2

let tableau = [
  { prenom: "arnaud", nom: "bondaz" },
  { prenom: "ali", nom: "ansoimoudine" },
  { prenom: "alex", nom: "andres-robert" },
  { prenom: "christophe", nom: "busin" },
  { prenom: "delphine", nom: "deschamps" },
  { prenom: "gaetan", nom: "finiels" },
  { prenom: "sylvain", nom: "françois" },
  { prenom: "maxime", nom: "hery" },
  { prenom: "khaled", nom: "ikhlef" },
  { prenom: "farid", nom: "kchouk" },
  { prenom: "dylan", nom: "martin" },
  { prenom: "yanis", nom: "romanelli" },
  { prenom: "marc", nom: "skalski" },
  { prenom: "vlad", nom: "tymchenko" },
  { prenom: "caroline", nom: "bénété" },
];
console.table(tableau);
// Créer un tableau avec prénoms et noms concaténés
let fullNameTab = tableau.map(function (stagiaire) {
  return stagiaire.prenom + " " + stagiaire.nom;
});
// Afficher le tableau fullNameTab
console.log("Tableau avec prénoms et noms concaténés :");
console.table(fullNameTab);

// Filtrer les prénoms qui contiennent 4 lettres
let prenomQuattreLettre = tableau.filter(function (stagiaire) {
  return stagiaire.prenom.length === 4;
});

// Afficher les prénoms qui contiennent 4 lettres
console.log("\nPrenom qui contiennent 4 lettres :");
console.log(prenomQuattreLettre.map(function (stagiaire) {
    return stagiaire.prenom;
  })
);
