window.onload = function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  save(processInput(email, password));
};

function processInput(email, password) {
  if (email.value == "" && email.value == null) {
    //set email background to  red (invaild email )
    //   set field text to invalid
  }
}
function save(params) {
  // save as object
}
