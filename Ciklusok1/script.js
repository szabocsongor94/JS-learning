var szamok = [2, 4, 13, 4, 6, 42, 6, 7, 9];

var parosakSzama = 0;

var paratlanokSzama = 0;


//console.log(parosakSzama);
/*
let index = 0;

while (index < szamok.length) {
    parosakSzama += szamok[index] % 2 === 0 ? 1 : 0;
    index++;
}

console.log(parosakSzama);

/* 
Ciklusok
*/

for(let szam of szamok) {
    parosakSzama += szam % 2 === 0 ? 1 : 0;
}

for(let szam of szamok) {
    paratlanokSzama += szam % 2 === 1 ? 1 : 0 ;
}

console.log(parosakSzama);
console.log(paratlanokSzama);