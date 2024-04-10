// function getAllDiceCombinations(dices: any[]) {
//   const toCombine = new Array(dices.length).fill("").map((_, i) => i)
//   let combinations: any[] = []
//   let temp: any[] = []
//   let slent = Math.pow(2, toCombine.length) - 1

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
function helloWorld(nom: string) {
  console.log("Bonjour, "+nom+" !");
}
helloWorld("Arnaud");

// EXERCICE2
function square(nombre: number) {
  console.log("le carre de "+nombre+" est "+Math.pow(nombre,2));
}
square(16);

// EXERCICE3
function nombrepair(nombre: number) {
  return nombre%2===0
}
const quatreestpair = nombrepair(4);
console.log(quatreestpair);

// EXERCICE4
function mindeuxnombres(num1: number, num2: number) {
  if(num1<=num2) {
    return num1;
  }
  else {
    return num2;
  }
}
function mintableau(tab: number[]) {
  let min = tab[0];
  for(let i=1;i<tab.length;i++) {
      if(tab[i]<min) {
        min=tab[i];
      }
  }
  return min;
}
console.log(mintableau([33,23,14,17]));
console.log(mintableau([33,23,16,3]));
console.log(mintableau([2,23,16,3]));

// EXERCICE5
const tabEleves=["eleve1","eleve2","eleve3"] as string[];
const tabEleves2=["Jean","Paul","Anais"];
interface IEleve {
  prenom : string,
  nom : string,
  note? : INote
}
interface INote {
  matiere: string,
  values: number[]
}

type TabEleves = IEleve[]

let tab: IEleve[];
tab = [{prenom:"Jean",nom:"Dupond"},{prenom:"Paul",nom:"Atri"},{prenom:"Anais",nom:"Mauricette"}];

let tabEleves3: IEleve[];
tabEleves3=[
  {
    prenom:"Jean",
    nom:"Dupond",
    note:{
      matiere:"Mathématiques",
      values:[19,20]
    }
  },
  {
    prenom:"Paul",
    nom:"Atri",
    note:{
      matiere:"Physique",
      values:[16,17]
    }
  },
  {
    prenom:"Anais",
    nom:"Mauricette",
    note:{
      matiere:"Physique",
      values:[18,19]
    }
  }
];
let tableau = [] as string[];
for(let i=0;i<tabEleves3.length;i++) {
  tableau.push(tabEleves3[i].prenom);
}
console.log(tableau);

let tableau2 = [] as IObjet[];
let tableau3 = [] as IObjet[];
interface IObjet {
  nom:string,
  prenom:string,
  notes?:number[]
}
for(let i=0;i<tabEleves3.length;i++) {
  tableau2.push({
    prenom:tabEleves3[i].prenom,
    nom:tabEleves3[i].nom
  });
}
console.log(tableau2);
//console.log(tableau3);
for(let i=0;i<tabEleves3.length;i++) {
  tableau3.push({
    prenom:tabEleves3[i].prenom,
    nom:tabEleves3[i].nom,
    notes:tabEleves3[i].note?.values
  });
}
console.log(tableau3);

function nomMatieres(tab: IEleve[]) {
  let matieres = [];
  for(let i=0;i<tab.length;i++) {
      matieres.push(tab[i].note?.matiere)
  }
  return matieres;
}
console.log(nomMatieres(tabEleves3));

function moyenne(tab: IEleve[]) {
  let notes = [] as number[]|undefined;
  let res = 0;
  notes = tab[tab.length-2].note?.values;
  if(notes) {
    for(let i=0;i<notes?.length;i++) {
      res = res+notes[i]
    }
    res=res/notes.length
  }
  return res;
}
console.log(moyenne(tabEleves3));

function plusonepoint() {
  tabEleves3.forEach(element => {
    if (element.note?.values.length) {
      for(let i=0;i<element.note.values.length;i++) {
        element.note.values[i]=element.note.values[i]+1;
        if(element.note.values[i]>20) {
          element.note.values[i]=20;
        }
      }
    }
  });
}
plusonepoint();
let tableau4 = [] as IObjet[]
for(let i=0;i<tabEleves3.length;i++) {
  tableau4.push({
    prenom:tabEleves3[i].prenom,
    nom:tabEleves3[i].nom,
    notes:tabEleves3[i].note?.values
  });
}
console.log(tableau4);

function nbplusdixmoyenne() {
  let cpt=0;
  tabEleves3.forEach(element=>{
    let notes = [] as number[]|undefined;
    let res = 0;
    notes = element.note?.values;
    if(notes) {
      for(let i=0;i<notes?.length;i++) {
        res = res+notes[i]
      }
      res=res/notes.length
    }
    if(res>=10) {
      cpt++;
    }
  })
  return cpt;
}
console.log(nbplusdixmoyenne());

const fruits = ['pomme','banane','poire','fraise','orange'];
let tablongueur = [] as number[];
fruits.map((element,index)=>{
  tablongueur[index]=element.length;
})
console.log(tablongueur)