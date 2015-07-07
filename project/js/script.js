function build() {
  //Grabs digit interger from DOM.  Digit = the number of base rows of Pyramid.
  var digit = +document.getElementById("digit").value;
  //Opens <center> tag to keep pryamid centered so it is viewed correctly
  document.write("<center>");
  //Loop counts from 0 to 'digit' and creates X amoint of rows in the Pyramid.  X = the number of rows, AKA 'digit'.
  for (var i = 0; i <= digit; i++) {
    //Loops from 0 to the current value of I
    for (var x = 0; x <= i; x++) {
      //Creates a * character for each row || for Loop loops through and writes * per line
      document.write("*");
    }
    //Creates a new line at the end of each iteration (row)
    document.write("<br/>");
  }
  //Closes the <center> tag
  document.write("</center>");
}
