const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const logInBtn = document.getElementById("logInBtn");
const createAccBtn = document.getElementById("createAccBtn");
const loggedOutView = document.getElementById("loggedOutView");
const loggedInView = document.getElementById("loggedInView");

// fånga och skriv ut värdena från de två inputen i LS

if (localStorage.getItem("personsRegister")) {
    console.log("Det finns sparat i LS");
} else {
    console.log("Finns inget sparat i LS");

    let personsRegister = [
        {username:"janne", password:"test"},
        {username:"edvin", password:"ekström"},
        {username:"java", password:"script"},
        {username:"potatis", password:"mannen"},
    ];

    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));
}

//lägg till ett nytt formulär när man trycker på create account 

createAccBtn.addEventListener("click", () => {

    let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

    let newRegister = {
        username: usernameInput.value,
        password: passwordInput.value,
    };

    console.log("personsRegister", personsRegister);

    personsRegister.push(newRegister);

    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));

})

//FIXA DEN NEDAN
/*logInBtn.addEventListener("click", () => {
    For (i = 0; i < personsRegister.length; i++) {
        If (personsRegister[i].password === passwordInput && personsRegister[i].username === usernameInput) {
            loggedInView
        }
    };
});

//let showLoggedInView = docume

//lyckat login meddelande

//misslyckat login meddelande 
//en funktion då för att ändra innehållet på sidan

//Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
//Är besökaren inloggad så skall istället en logga-ut knapp visas.
// när pman loggar ut ska bara de uppgifterna försvinna och man ska komma tillbaka till inloggningssidan
//byt ut inloggningsformulären till en logga-ut knapp när man har loggat in. 
//tror om du har ett id på din button så kan du i javascript skriva style.display(none) eller något sånt
//Sidan skall innehålla en header, en del för innehåll samt en footer.
//Headern skall alltid visas och ändras dynamiskt för att visa rätt innehåll: