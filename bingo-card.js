window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;

  do {
    var newNum = getNewNum();
  } while(usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
  var words = [
    'Snarky Reference to Phil',
    '[A Constructive Comment]',
    'Too Powerful',
    'Secretarial Power',
    'Expulsion',
    '-1',
    'Bylaw',
    'Snarky Reference to Mike',
    '[Arbitrary Ad-hominem Attack]',
    'Formal Standards Body',
    'PHP',
    'Moral Stand',
    'Thicker Skin',
    'FIG 3.0',
    'Subordinate',
    'Drama',
    'Conspiracy',
    'People Not Projects',
    'Potential',
    'Middleware',
    'Social Justice',
    'Steering',
    'Authoritarian',
    '"I assert"',
    'Complainaint',
    'Committee',
    'Constrained Duties',
    'Secretarial Collaborator',
    'Clearing the Decks',
  ];

  return words[Math.floor(Math.random()*words.length)];
}

function anotherCard() {
  usedNums = new Array(76);
  newCard();
  return false;
}
