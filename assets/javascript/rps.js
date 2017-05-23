  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcW4_sgXptBtDaVjTSRJEV7CS_e_caLkM",
    authDomain: "rockpaperscissors-5a2c3.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-5a2c3.firebaseio.com",
    projectId: "rockpaperscissors-5a2c3",
    storageBucket: "rockpaperscissors-5a2c3.appspot.com",
    messagingSenderId: "564101305817"
  };
  firebase.initializeApp(config);

  var database= firebase.database();

  var player1;
  var player2;
  var losses1=0;
  var losses2=0;
  var wins1=0;
  var wins2=0;
  var name="";
  var name2="";
  var playerList=[];

if (playerList.length===0){
  $(".status").html("Waiting for two players to join the game. Enter your name to join!");
}

$("#submit").on("click", function(){
  event.preventDefault();
  console.log($("#name-input").val().trim());
  name=$("#name-input").val().trim();
  playerList.push(name);

  if (playerList.length===1){
    $(".status").html("Waiting for one player to join the game. Enter your name to join!");
    $("#player1name").html("Player 1: "+ playerList[0]);

      database.ref("/players").child("1").set({
        name: playerList[0],
        losses: losses1,
        wins: wins1
      });

    }
    if (playerList.length===2){
      $(".status").html("Player 1 goes first!");
      $("#player2name").html("Player 2: "+ playerList[1]);

      database.ref("/players").child("2").set({
        name: playerList[1],
        losses: losses2,
        wins: wins2
      });
    }
  });

$(".button1").on("click", function(){
  var player1choice=$(this).attr("data-type");
  database.ref("/players").child("1").update({
        choice: player1choice
  });
});
$(".button2").on("click", function(){
  var player2choice=$(this).attr("data-type");
  database.ref("/players").child("2").update({
        choice: player2choice
  });
});
var answerCompare = {
  rock: {
    paper: "Player 2 Wins!",
    scissors: "Player 1 Wins!",
    rock: "tie"
  },
  scissors: {
    paper: "Player 1 Wins!",
    scissors: "tie",
    rock: "Player 2 Wins!"
  },
  paper: {
    paper: "tie",
    scissors: "Player 2 Wins!",
    rock: "Player 1 Wins!"
  }
}


// if (player1choice){
//   $(".status").html("Your turn Player 2!");
// }
