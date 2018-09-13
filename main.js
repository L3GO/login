window.onload = init;

function init() {
  var signUp = document.getElementById("signUp");
  signUp.onclick = signup();
}

function signup() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  if (email.includes("@") && email.includes(".com")) {
    console.log("pass");

    if (password.length > 6) {
      var user = user || {
        email: email,
        password: password
      };
      store(user);
    }
  } else {
    message.innerHTML = "please enter a valid email";
  }
}

// function store(user) {
//   localStorage.setItem("user", JSON.stringify(user));
// }
