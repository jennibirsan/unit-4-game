// <!-- I GOT HELP FROM ISABEL, MY TUTOR! -->


var targetNumber = 0;
var counter = 0;
var wins = 0;
var losses = 0;

$("#number-to-guess").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);
$("#numberGuessed").text(counter);

var imageOne = "./assets/images/donatello.jpg"
var imageTwo = "./assets/images/leonardo.jpg"
var imageThree = "./assets/images/michaelangelo.jpg"
var imageFour = "./assets/images/raphfinal.jpg"

var ImageArray = [imageOne, imageTwo, imageThree, imageFour]

//  isolate  funtionality (computer number, calculating the random number of the images, what do you need to clean)
function calculateComputerNumber() {
  targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#number-to-guess").text(targetNumber);


}

function imageTurtle() {
  var numberOptions = [Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1]
  for (var i = 0; i < numberOptions.length; i++) {
    var imageTurtle = $("<img class='turtle-image' src='" + ImageArray[i] + "' data-turtlevalue='" + numberOptions[i] + "' />");
    $("#turtles").append(imageTurtle);
  }
  $(".turtle-image").on("click", function () {
    var turtleValue = ($(this).attr("data-turtlevalue"));
    console.log(turtleValue)
    console.log($(this).attr("src"))
    turtleValue = parseInt(turtleValue);
    counter += turtleValue;
    $("#numberGuessed").text(counter);
    if (counter === targetNumber) {
      alert("Mission accomplished! Master Splinter would be proud!");
      wins++;
      $("#wins").text(wins);
      startMyGame();
    }
    else if (counter >= targetNumber) {
      alert("You lose! Shredder killed you.");
      losses++;
      $("#losses").text(losses);
      startMyGame();
    }
  });
};

function startMyGame(){
    counter = 0;
    $("#numberGuessed").text(counter);
    targetNumber = 0;
    $("#number-to-guess").text(targetNumber);
    $("#turtles").empty();
    calculateComputerNumber();
    imageTurtle();

  }
startMyGame()

$(document).ready(function () {

  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/theme.mp3");
  
  $(".theme-button").on("click", function () {
      audioElement.play()
  });
  $(".pause-button").on("click", function () {
      audioElement.pause()
  });
  });