var protocol = window.location.protocol;
var host = window.location.host;
var path = path || "";
var newlink = protocol + "//" + host + path;

window.onload = init;

function init() {
  if (window.location.host == "" || window.location.host == null) {
    offline();
  } else {
    online();
  }
}

function offline() {
  if (window.location.pathname.includes("signUp.html")) {
    var signUp = document.getElementById("signUp");
    signUp.onclick = signup;
  } else if (window.location.pathname.includes("login.html")) {
    var Login = document.getElementById("login");
    Login.onclick = login;
  }
}

function online() {
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
      if (window.location.host == "") {
        let pathArray = window.location.pathname.split("/");
        pathArray.pop();
        pathArray.push("login.html");
        let newPathname = "";
        for (let index = 0; index < pathArray.length; index++) {
          newPathname += "/";
          newPathname += pathArray[index];
        }
        window.location.replace(protocol + "/" + newPathname);
      } else {
        path = "/simpleLogin/login.html";
        let newlink = protocol + "//" + host + path;
        window.location.replace(newlink);
      }
    }
  } else {
    message.innerHTML = "please enter a valid email";
  }
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
    let pathArray = window.location.pathname.split("/");
    pathArray.pop();
    pathArray.push("signUp.html");
    path = "/simpleLogin/signUp.html";
    let newPathname = "";
    for (let index = 0; index < pathArray.length; index++) {
      newPathname += "/";
      newPathname += pathArray[index];
    }
    let newlink = protocol + "//" + host + path;
    if (window.location.host == "") {
      setTimeout(function() {
        window.location.replace(newPathname);
      });
    } else {
      setTimeout(function() {
        window.location.replace(newlink);
      }, 10000);
    }
  } else {
    // compare here
    if (email == matchUser.email) {
      if (password == matchUser.password) {
        // mactching route
        if (window.location.host == "") {
          var pathArray = window.location.pathname.split("/");
          pathArray.pop();
          pathArray.push("landingPage.html");
          var newPathname = "";
          for (let index = 0; index < pathArray.length; index++) {
            newPathname += "/";
            newPathname += pathArray[index];
          }
          window.location.replace(newPathname);
        } else {
          path = "/simpleLogin/landingPage.html";
          let newlink = protocol + "//" + host + path;
          window.location.replace(newlink);
        }
      } else {
        message.innerHTML = "invalid email or password";
      }
    } else {
      message.innerHTML = "invalid email or password";
    }
  }
}
