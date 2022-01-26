const studenti = [
    'pippo',
    'pluto',
    'paperino'
]
//metodo standard!
/*
const primoElemento = studenti[0];
const secondoElemento = studenti[1];
const terzoElemento = studenti[2];


const [primoElemento, secondoElemento, terzoElemento] = studenti;

console.log(primoElemento);
console.log(secondoElemento);
console.log(terzoElemento);
*/

/* se volessi saltare un elemneto...*/


//const primoElemento = studenti[0];
//const terzoElemento = studenti[2];

const [primoElemento, , terzoElemento] = studenti;

console.log(primoElemento);
console.log(terzoElemento);