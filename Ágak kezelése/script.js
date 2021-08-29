let age = prompt("Add meg a korodat!");

if (age < 20) {
    alert("Fiatalabb vagy, mint 20 éves!")
} else {
    alert("Idősebb vagy, mint 20 éves!")
}

switch(age){
    case 18:
        console.log("18 éves");
        break;
    case 19:
        console.log("19 éves");
        break;
    default:
        console.log("A felhasználó életkora ismeretlen");
}