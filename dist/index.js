"use strict";
// function getAllDiceCombinations(dices: any[]) {
//   const toCombine = new Array(dices.length).fill("").map((_, i) => i)
//   let combinations: any[] = []
//   let temp: any[] = []
//   let slent = Math.pow(2, toCombine.length) - 1
var _a, _b;
//   for (let i = 0; i < slent; i++) {
//     temp = []
//     for (var j = 0; j < toCombine.length; j++) {
//       if (i & Math.pow(2, j)) {
//         temp.push(toCombine[j])
//       }
//     }
//     if (temp.length > 0) {
//       combinations.push(temp)
//     }
//   }
//   return combinations.map((combi) => {
//     const completion = toCombine.filter((index) => combi.indexOf(index) === -1)
//     const diceCombi = combi.map((e) => dices[e])
//     const diceCompletion = completion.map((e) => dices[e])
//     return [diceCombi, diceCompletion]
//   })
// }
// console.log('test fonction', getAllDiceCombinations(["vert", "rouge", "jaune"]))
// EXERCICE1
function helloWorld(nom) {
    console.log("Bonjour, " + nom + " !");
}
helloWorld("Arnaud");
// EXERCICE2
function square(nombre) {
    console.log("le carre de " + nombre + " est " + Math.pow(nombre, 2));
}
square(16);
// EXERCICE3
function nombrepair(nombre) {
    return nombre % 2 === 0;
}
const quatreestpair = nombrepair(4);
console.log(quatreestpair);
// EXERCICE4
function mindeuxnombres(num1, num2) {
    if (num1 <= num2) {
        return num1;
    }
    else {
        return num2;
    }
}
function mintableau(tab) {
    let min = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}
console.log(mintableau([33, 23, 14, 17]));
console.log(mintableau([33, 23, 16, 3]));
console.log(mintableau([2, 23, 16, 3]));
// EXERCICE5
const tabEleves = ["eleve1", "eleve2", "eleve3"];
const tabEleves2 = ["Jean", "Paul", "Anais"];
let tab;
tab = [{ prenom: "Jean", nom: "Dupond" }, { prenom: "Paul", nom: "Atri" }, { prenom: "Anais", nom: "Mauricette" }];
let tabEleves3;
tabEleves3 = [
    {
        prenom: "Jean",
        nom: "Dupond",
        note: {
            matiere: "Mathématiques",
            values: [19, 20]
        }
    },
    {
        prenom: "Paul",
        nom: "Atri",
        note: {
            matiere: "Physique",
            values: [16, 17]
        }
    },
    {
        prenom: "Anais",
        nom: "Mauricette",
        note: {
            matiere: "Physique",
            values: [18, 19]
        }
    }
];
let tableau = [];
for (let i = 0; i < tabEleves3.length; i++) {
    tableau.push(tabEleves3[i].prenom);
}
console.log(tableau);
let tableau2 = [];
let tableau3 = [];
for (let i = 0; i < tabEleves3.length; i++) {
    tableau2.push({
        prenom: tabEleves3[i].prenom,
        nom: tabEleves3[i].nom
    });
}
console.log(tableau2);
//console.log(tableau3);
for (let i = 0; i < tabEleves3.length; i++) {
    tableau3.push({
        prenom: tabEleves3[i].prenom,
        nom: tabEleves3[i].nom,
        notes: (_a = tabEleves3[i].note) === null || _a === void 0 ? void 0 : _a.values
    });
}
console.log(tableau3);
function nomMatieres(tab) {
    var _a;
    let matieres = [];
    for (let i = 0; i < tab.length; i++) {
        matieres.push((_a = tab[i].note) === null || _a === void 0 ? void 0 : _a.matiere);
    }
    return matieres;
}
console.log(nomMatieres(tabEleves3));
function moyenne(tab) {
    var _a;
    let notes = [];
    let res = 0;
    notes = (_a = tab[tab.length - 2].note) === null || _a === void 0 ? void 0 : _a.values;
    if (notes) {
        for (let i = 0; i < (notes === null || notes === void 0 ? void 0 : notes.length); i++) {
            res = res + notes[i];
        }
        res = res / notes.length;
    }
    return res;
}
console.log(moyenne(tabEleves3));
function plusonepoint() {
    tabEleves3.forEach(element => {
        var _a;
        if ((_a = element.note) === null || _a === void 0 ? void 0 : _a.values.length) {
            for (let i = 0; i < element.note.values.length; i++) {
                element.note.values[i] = element.note.values[i] + 1;
                if (element.note.values[i] > 20) {
                    element.note.values[i] = 20;
                }
            }
        }
    });
}
plusonepoint();
let tableau4 = [];
for (let i = 0; i < tabEleves3.length; i++) {
    tableau4.push({
        prenom: tabEleves3[i].prenom,
        nom: tabEleves3[i].nom,
        notes: (_b = tabEleves3[i].note) === null || _b === void 0 ? void 0 : _b.values
    });
}
console.log(tableau4);
function nbplusdixmoyenne() {
    let cpt = 0;
    tabEleves3.forEach(element => {
        var _a;
        let notes = [];
        let res = 0;
        notes = (_a = element.note) === null || _a === void 0 ? void 0 : _a.values;
        if (notes) {
            for (let i = 0; i < (notes === null || notes === void 0 ? void 0 : notes.length); i++) {
                res = res + notes[i];
            }
            res = res / notes.length;
        }
        if (res >= 10) {
            cpt++;
        }
    });
    return cpt;
}
console.log(nbplusdixmoyenne());
const fruits = ['pomme', 'banane', 'poire', 'fraise', 'orange'];
let tablongueur = [];
fruits.map((element, index) => {
    tablongueur[index] = element.length;
});
console.log(tablongueur);
let tabpluscinqlettres = [];
const result = fruits.filter((value) => value.length > 5);
console.log(result);
const resultreduce = fruits.reduce((acc, val) => {
    return acc + val;
});
console.log(resultreduce);
const resultforeach = fruits.forEach((elt) => {
    console.log(elt);
});
const resultfind = fruits.find((element) => element.includes('a'));
console.log(resultfind);
const resultsome = fruits.some((fruit) => fruit.includes('z'));
console.log(resultsome);
const resultevery = fruits.every((fruit) => fruit.includes('e'));
console.log(resultevery);
const resultsort = fruits.sort();
console.log(resultsort);
console.log(fruits);
const prix = [104, 23.3, 30.1, 240.9, 55];
const resultmap = prix.map((element) => {
    return element * 1.20;
});
console.log(resultmap);
const resultsuptrente = prix.find((element) => element > 30);
console.log(resultsuptrente);
function deuxiemeChiffre(num) {
    //if(num.toString().includes('.')) {
    //}
    const deuxiemelettre = num.toString().charAt(1);
    const deuxiemenumber = deuxiemelettre;
    return deuxiemenumber;
}
console.log(deuxiemeChiffre(28635.135));
const resultdeuxiemeplusgrand = prix.sort((a, b) => deuxiemeChiffre(b) - deuxiemeChiffre(a));
console.log(resultdeuxiemeplusgrand);
function apresvirgule(num) {
    let resnumber = 0;
    if (num.toString().includes('.')) {
        const index = num.toString().indexOf('.');
        console.log(index);
        let res = "";
        for (let i = index + 1; i < num.toString().length; i++) {
            res = res + num.toString().charAt(i);
        }
        resnumber = res;
    }
    return resnumber;
}
console.log(apresvirgule(109.387));
const prixpluscentimestrie = prix.sort((a, b) => apresvirgule(b) - apresvirgule(a));
console.log(prixpluscentimestrie);
