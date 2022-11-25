/*
1. Localstorage - skapa konto
2. Logga ut knapp som funkar
3. förbli inloggad om man uppdaterar sidan 
*/

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const logInBtn = document.getElementById("logInBtn");
const createAccBtn = document.getElementById("createAccBtn");
const closeBtn = document.getElementById("closeBtn");
const createAccForm = document.getElementById("createAccForm");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const loggedOutView = document.getElementById("loggedOutView");
const message = document.getElementById("message");
 
let personsRegister = [
    {username:"janne", password:"test"},
    {username:"edvin", password:"ekström"},
    {username:"java", password:"script"},
    {username:"potatis", password:"mannen"},
]
 
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
 
    localStorage.setItem("personsRegister", JSON.stringify(personsRegister));
 
}
 
let personsRegisterTemp = JSON.parse(localStorage.getItem("personsRegister"));  
 
createAccBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
        
        let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

        let newRegister = {
            username: userName.value,
            password: password.value,
        };
    
        personsRegisterTemp.push(newRegister);
    
        localStorage.removeItem("personsRegister", JSON.stringify(personsRegister));

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
            loggedInView.innerHTML = "";
            message.innerHTML = "";
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

function reloadLogInStatus() {
    if (g) {

    } else if (g) {

    }

}

window.onload = reloadLogInStatus(localStorage.getItem("personsRegister"));

