var isAnswered = false;
var twoFiveOnes = [["G min7","C7","F maj7"],
                   ["Ab min7","Db7","Gb maj7"],
                   ["A min7","D7","G maj7"],
                   ["Bb min7","Eb7","Ab maj7"],
                   ["B min7","E7","A maj7"],
                   ["C min7","F7","Bb maj7"],
                   ["C# min7","F#7","B maj7"],
                   ["D min7","G7","C maj7"],
                   ["Eb min7","Ab7","Db maj7"],
                   ["E min7","A7","D maj7"],
                   ["F min7","Bb7","Eb maj7"],
                   ["F# min7", "B7","E maj7"]];

var rootNotes = ["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"];

function randomNote(){
  return Math.floor(Math.random() * 12)
}

var rootNote = null;

function newRootNote(){
  rootNote = randomNote(); 
  document.getElementById('display').innerHTML = rootNotes[rootNote];
  document.getElementById('twoFiveOneButton').innerHTML = "Reveal Answer";
}

function revealAnswer(){
  var twoFiveOne = twoFiveOnes[rootNote];
  document.getElementById('display').innerHTML = twoFiveOne[0] + ", " + twoFiveOne[1] + ", " + twoFiveOne[2]; 
  document.getElementById('twoFiveOneButton').innerHTML = "New Root Note";
}

function twoFiveOneExercise(){
  if(isAnswered){
    newRootNote();
  }else{
    revealAnswer();
  }
  isAnswered = !isAnswered;
}

window.onload = newRootNote;
