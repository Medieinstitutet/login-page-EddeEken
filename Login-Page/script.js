const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const logInBtn = document.getElementById("logInBtn");
const createAccBtn = document.getElementById("createAccBtn");
const closeBtn = document.getElementById("closeBtn");
const createAccForm = document.getElementById("createAccForm");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const loggedOutView = document.getElementById("loggedOutView");
const message = document.getElementById("message");

//fixa local storage så att det uppdateras när man lägger till fler

createAccForm.addEventListener("click", () => {
    document.getElementById("accForm").style.display = "block";
  })
  
closeBtn.addEventListener("click", () => {
    document.getElementById("accForm").style.display = "none";
  })

if (localStorage.getItem("personsRegister")) {
    console.log("Det finns sparat i LS");
} else {
    console.log("Finns inget sparat i LS");

    let personsRegister = [
        {username:"janne", password:"test"},
        {username:"edvin", password:"ekström"},
        {username:"java", password:"script"},
        {username:"potatis", password:"mannen"},
    ]
    
    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));
}
  
createAccBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
        
        let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

        let newRegister = {
            username: usernameInput.value,
            password: passwordInput.value,
        };
    
        console.log("newRegister", newRegister);
    
        personsRegister.push(newRegister);
    
        localStorage.setItem("personsRegister", JSON.stringify(personsRegister));

        message.insertAdjacentText = "You have successfully created an account!";
        
    } else {
        function createAccError() {
            message.insertAdjacentText = "Passwords not matching";
        }
        createAccError();
    }
})

logInBtn.addEventListener("click", () => { 
    let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));
    for (i = 0; i < personsRegister.length; i++) {
      if (usernameInput.value == personsRegister[i].username && passwordInput.value == personsRegister[i].password) {
        loggedOutView.innerHTML = "";
        message.innerHTML = "";
        createAccForm.innerHTML = "";
        const logOut = document.getElementById("logOut");
        const loggedInView = document.getElementById("loggedInView");
        let logOutBtn = document.createElement("button");
        let textButton = document.createTextNode("Log Out");
        logOutBtn.appendChild(textButton);
        logOut.appendChild(logOutBtn);
        logOutBtn.addEventListener("click", () => {
            window.location.reload()
        })
        logOutBtn.style.padding = "10px"; 
        logOutBtn.style.margin = "2px"; 
        logOutBtn.style.cursor = "pointer";
        loggedInView.style.display = "block";
        message.innerHTML = "You are logged in as: " + usernameInput.value;
        return true;
    } else {
        message.innerHTML = "User not found";
    }
    }
})


//lyckat login meddelande

//en funktion då för att ändra innehållet på sidan

//Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
//Är besökaren inloggad så skall istället en logga-ut knapp visas.
// när man loggar ut ska bara de uppgifterna försvinna och man ska komma tillbaka till inloggningssidan
//tror om du har ett id på din button så kan du i javascript skriva style.display(none) eller något sånt