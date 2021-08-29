/* Input:
    Hány jegyet kér?
    Milyen típusó jegyet kér?
    
   A diákjegy ára: 300 ft
   A felnőtt jegy ára: 350 ft
   Tíznél több jegy vásárlása esetén jár 10% kedvezmény 
*/

/* let darabszam = prompt('Mennyi jegyet kér?');
let tipus = prompt('Diák vagy felnőtt jegyet kér?');

if (tipus === "Diák" || "diák") {
    if (darabszam < 10) {
        alert("A jegy/jegyek ára " + 300*darabszam + " forint")
    } else {
        alert("A jegy/jegyek ára " + 300*0.9*darabszam + " forint")
    }
    
} else if (tipus === "felnőtt" || "Felnőtt") {
    if (darabszam < 10) {
        alert("A jegy/jegyek ára " + 350*darabszam + " forint")
    } else {
        alert("A jegy/jegyek ára " + 350*0.9*darabszam + " forint")
    }
} else (
    alert("Csak felnőtt és diák jegyünk van!")
);
*/


var quantity = prompt('How many ticket would you like?');
var type = prompt('What type of ticket? Adult/Student/Retired');

var types = {
    student: 300,
    adult: 350,
    retired: 280    
};

var price = types[type];

if (price === undefined) {
    alert("Incorrect type!")
} else {
    var discount = quantity > 10 ? 0.9 : 1;

    var total = quantity * price * discount ;

    alert("The total pirce is " + total + "!")
}


