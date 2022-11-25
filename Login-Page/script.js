/*
1. Localstorage - skapa konto
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
const loggedInView = document.getElementById("loggedInView");
 
let personsRegister = [
    {username:"janne", password:"test"},
    {username:"edvin", password:"ekström"},
    {username:"java", password:"script"},
    {username:"potatis", password:"mannen"},
]
 
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
 
    localStorage.setItem('personsRegister', JSON.stringify(personsRegister));
}
 
createAccBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
        
        let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

        personsRegister.push({"username": userName.value,"password": password.value});
    
        localStorage.setItem('personsRegister', JSON.stringify(personsRegister));

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
        loggedOutView.style.display = "none"
        message.innerHTML = ""
        createAccForm.style.display = "none"
        logOutBtn.style.padding = "10px"; 
        logOutBtn.style.margin = "2px"; 
        logOutBtn.style.cursor = "pointer";
        loggedInView.style.display = "block";
        message.innerHTML = "You are logged in as: " + usernameInput.value;
        localStorage.setItem("loginStatus", "loggedIn");
        return true;
    } else {
        message.innerHTML = "User not found";
    }
    }
})

let LoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

const logOut = document.getElementById("logOut");
let logOutBtn = document.createElement("button");
let textButton = document.createTextNode("Log Out");
logOutBtn.appendChild(textButton);
logOut.appendChild(logOutBtn);
    logOutBtn.addEventListener("click", () => {
        loggedInView.style.display = "none"
        loggedOutView.style.display = "block"
        createAccForm.style.display = "inline"
        message.innerHTML = "";
        localStorage.removeItem("loginStatus");
    })

function reloadLogInStatus(logInStatus) {
    if (logInStatus === null) {
        //DO NOTHING
    } else if (logInStatus === "loggedIn") {
        loggedOutView.style.display = "none"
        message.innerHTML = ""
        createAccForm.style.display = "none"
        logOutBtn.style.padding = "10px"; 
        logOutBtn.style.margin = "2px"; 
        logOutBtn.style.cursor = "pointer";
        loggedInView.style.display = "block";
        message.innerHTML = "You are logged in as: " + usernameInput.value;
    }
}

window.onload = reloadLogInStatus(localStorage.getItem("loginStatus"))