const username = document.getElementById("username")
const password = document.getElementById("password")
const logInBtn = document.getElementById("logInBtn")

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

logInBtn.addEventListener("click", () => {

    // HÄMTA
    let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

    // SKAPA NYTT OBJEKT
    let newRegister = {
        username: username.value,
        password: password.value,
    };

    console.log("personsRegister", personsRegister);

    // ÄNDRA
    personsRegister.push(newRegister);

    // SPARA
    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));

})

//lyckat login meddelande

//misslyckat login meddelande 

//Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
//Är besökaren inloggad så skall istället en logga-ut knapp visas.

//byt ut inloggningsformulären till en logga-ut knapp när man har loggat in. 