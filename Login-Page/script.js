const username = document.getElementById("username")
const usernameBtn = document.getElementById("usernameBtn")
const password = document.getElementById("password")
const passwordBtn = document.getElementById("passwordBtn")

// fånga och skriv ut värdena från de två inputen i LS

if (localStorage.getItem("personsRegister")) {
    console.log("Det finns sparat i LS");
} else {
    console.log("Finns inget sparat i LS");

    let personsRegister = [
        {username:"janne", password:"test"},
        {username:"edvin", password:"test"},
        {username:"test", password:"3"},
    ];

    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));
}

//lyckat login 

//misslyckat login

/*Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
Är besökaren inloggad så skall istället en logga-ut knapp visas. */

// byt ut inloggningsformulären till en logga ut knapp när man har loggat in 