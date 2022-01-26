const studenti = [
    'pippo',
    'pluto',
    'paperino'
];

const copiaProfonda = [...studenti]; // questa sintassi non da errori, quindi usiamola!

const copiaSuperficiale = studenti; // potrebbe generare un errore, di fatto è solo un collegamento

copiaSuperficiale[0] = 'gastone';

console.log('Studenti originale');
console.log(studenti);

console.log('Copia profonda');
console.log(copiaProfonda);

console.log('Copia superficiale');
console.log(copiaSuperficiale);

if (studenti === copiaSuperficiale) {
    alert('primo caso');
}

if (studenti === copiaProfonda) {
    alert('secondo caso');
}



/*
const studenti2 = [
    'gastone',
    'minnie'
]

const studenti3 = [
    'foo',
    'bar'
]

const merged = [...studenti, ...studenti2, ...studenti3];
console.log(merged);

const mergedConcat = studenti.concat(studenti2.concat(studenti3));
console.log(mergedConcat);

const mergedFaiDaTe = [];

for (let i=0; i<studenti.length; i++) {
    mergedFaiDaTe.push(studenti[i]);
}
for (let i=0; i<studenti2.length; i++) {
    mergedFaiDaTe.push(studenti2[i]);
}
for (let i=0; i<studenti3.length; i++) {
    mergedFaiDaTe.push(studenti3[i]);
}

console.log(mergedFaiDaTe);

const mergeTest = [];

mergeTest.push(studenti);
mergeTest.push(studenti2);
mergeTest.push(studenti3);

console.log(mergeTest);

// array di array

const arrayDiArray = [
    ["pippo", "pluto", "paperino"], 
    ["gastone", "minnie"], 
    ["foo", "bar"]
];

console.log('Alla posizione [1][1] ho trovato: ' + arrayDiArray[1][1]);

*/