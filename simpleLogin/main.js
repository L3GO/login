var protocol = window.location.protocol;
var host = window.location.host;
var path = path || "";
var newlink = protocol + "//" + host + path;

window.onload = init;

function init() {
  if (window.location.pathname == "/simpleLogin/signUp.html") {
    var signUp = document.getElementById("signUp");
    signUp.onclick = signup;
  } else if (window.location.pathname == "/simpleLogin/login.html") {
    var Login = document.getElementById("login");
    Login.onclick = login;
  }
}

function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  if (email.includes("@") && email.includes(".com")) {
    if (password.length > 6) {
      var userObject = {
        email: email,
        password: password
      };
      let user = JSON.stringify(userObject);
      localStorage.setItem("userCredential", user);
      console.log(localStorage);
    }
  } else {
    message.innerHTML = "please enter a valid email";
  }
  path = "/simpleLogin/login.html";
  let newlink = protocol + "//" + host + path;

  window.location.replace(newlink);
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  // retrive
  var matchUser = JSON.parse(localStorage.getItem("userCredential"));
  //check if user match exist
  if (matchUser == null || matchUser == "") {
    message.innerHTML = "please SignUp first";
    path = "/simpleLogin/signUp.html";
    let newlink = protocol + "//" + host + path;
    setTimeout(function() {
      window.location.replace(newlink);
    }, 10000);
  } else {
    // compare here
    if (email == matchUser.email) {
      if (password == matchUser.password) {
        path = "/simpleLogin/landingPage.html";
        let newlink = protocol + "//" + host + path;
        window.location.replace(newlink);
      } else {
        message.innerHTML = "invalid email or password";
      }
    } else {
      message.innerHTML = "invalid email or password";
    }
  }
}
