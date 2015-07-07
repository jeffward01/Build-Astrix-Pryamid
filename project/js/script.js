//Builds the Pyramid!
function build() {
  var log = logger('output');
  //Grabs digit interger from DOM.  Digit = the number of base rows of Pyramid.
  var digit = +document.getElementById("digit").value;
  //Loop counts from 0 to 'digit' and creates X amoint of rows in the Pyramid.  X = the number of rows, AKA 'digit'.
  for (var i = 0; i < digit; i++) {
    //Loops from 0 to the current value of I
    for (var x = 0; x <= i; x++) {
      //Creates a * character for each row || for Loop loops through and writes * per line
      log("*");
    }
    //Creates a new line at the end of each iteration (row)
    log("<br/>");
  }
}

/////Reset Function
function resetScreen() {
  document.getElementById('output').innerHTML = '';
}
//Logs to screen
function logger(x) {
  var output = getById(x);
  return function (text) {
    output.innerHTML += text + '\n';
  };
}
// Grabs Element by ID
function getById(x) {
  return document.getElementById(x);
}
