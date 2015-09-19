function newGame(){
  $("#pieces-played").html("");  
  $("#game-results").html("");
  $("#new-game").css("display", "none");
}

function winner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice)
    return "Draw";

  if (playerChoice === "Paper") {
    if (ComputerChoice === "Rock") {
      return "You Win";
    } else if (computerChoice === "Scissors") {
      return "You Lose";
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "You Lose";
    } else if (computerChoice === "Paper") {
      return "You Win";
    }
  } else if(playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "You Lose";
    } else if (computerChoice === "Scissors") {
      return "You Win";
    }
  }
}

$ (document).ready( function () {
  
$(".btn-primary").click(function() {

var pressedButton = $(this).text();
var playerChoice = pressedButton;
  
$.get("http://rock-paper-scissors-api.herokuapp.com/", function ( data ) {
    $("#pieces-played").html("You played "+data+", "+"I played " + pressedButton);
    $("#game-results").text(winner(playerChoice, data));
    $("#new-game").show();
      })
    .fail(function() {
        alert("There was an error");
    });
});
  $("#new-game").click(newGame);
});