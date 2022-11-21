const username = document.getElementById("username")
const usernameBtn = document.getElementById("usernameBtn")
const password = document.getElementById("password")
const passwordBtn = document.getElementById("passwordBtn")

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

/*Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
Är besökaren inloggad så skall istället en logga-ut knapp visas. */