// alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

puppyNames = ['Spot', 'Fido', 'Buddy', 'Benji', 'Patches', 'Max', 'Lassie', 'Sparky', 'Fluffy', 'Princess', 'Rex', 'Bear', 'Milo', 'Scout', 'Duke', 'Lady', 'Shadow', 'Rufus'];

imgArray = ["assets/images/24_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_512443759_thanai-asawaroengchai-760x506.jpg",
    "assets/images/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY-760x506.jpg",
    "assets/images/33_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_696648019_michaelheim-760x506.jpg",
    "assets/images/47274f49266963b38d73c419936de394.jpg",
    "assets/images/beagle-puppy-in-large-cushion-chair.jpg",
    "assets/images/Cesars-Today-Top-Ten-Puppy-Tips.jpg",
    "assets/images/chihuahua-dog-puppy-cute-39317.jpeg",
    "assets/images/cut.jpg",
    "assets/images/girl-with-papillon-puppy.jpg",
    "assets/images/impossibly-cute-puppy-cute-puppies-14593488214nk8g.jpg",
    "assets/images/Labrador-Retriever-MP.jpg",
    "assets/images/pearl_16x9.jpg",
    "assets/images/pexels-photo-117486.jpeg",
    "assets/images/puppies.jpg",
    "assets/images/puppy-twitter-1-FB.jpg"];

var wins = 0, guessesLeft, lettersGuessed, blank;

var gameAlert = document.getElementById("game");

var wordNowText = document.getElementById("current-word");

var winsText = document.getElementById("wins");

var guessesLeftText = document.getElementById("guesses-left");

var lettersGuessedText = document.getElementById("letters-guessed");

var num = Math.floor(Math.random() * (imgArray.length + 1));

var element = document.getElementById("pup");

var pupRand = Math.floor(Math.random() * puppyNames.length);

var wordNow = puppyNames[pupRand].toUpperCase();

var remLet = wordNow.length;

function reset() {

    guessesLeft = 0;

    lettersGuessed = [];

    blank = [];

    pupRand = Math.floor(Math.random() * puppyNames.length);

    wordNow = puppyNames[pupRand].toUpperCase();

    remLet = wordNow.length;

    if (wordNow.length <= 5) {

        guessesLeft = 10;

    } else {

        guessesLeft = remLet * 2;

    }

    var underS = function() {

        for (var i = 0; i < remLet; i++) {

            blank[i] = ("_");
            
        }
        
        return blank;

    };

    underS();

}

reset();

var begin = function() {

    gameAlert.textContent = "Press any letter key to get started.";
    
    wordNowText.textContent = "PUP NAME: " + blank.join(' ');

    winsText.textContent = "WINS: " + wins;

    guessesLeftText.textContent = "GUESSES REMAINING: " + guessesLeft;

    lettersGuessedText.textContent = "LETTERS GUESSED: " + lettersGuessed.join(', ');

};

begin();

var wrong = function() {

    var splat = new Audio("assets/soundz/SPLAT2.mp3");
    splat.play();
    return false;

};

var right = function() {

    var chop = new Audio("assets/soundz/headchop.mp3");
    chop.play();
    return false;

};

var yay = function() {

    var monst = new Audio("assets/soundz/monster2.mp3");
    var scream = new Audio("assets/soundz/nmh_scream1.mp3");
    monst.play();
    scream.play();
    return false;

};

var ohNo = function() {

    var ha = new Audio("assets/soundz/lach01.mp3");
    var oct = new Audio("assets/soundz/octabrain.mp3");
    ha.play();
    oct.play();
    return false;

};

var pupImg = function() {

    element.src = imgArray[num];

};

document.addEventListener("keypress", function() {
    
    var letter = event.key.toUpperCase();

    if (lettersGuessed.indexOf(letter) === -1) {

        lettersGuessed.push(letter);
        wrong();

    }

    for (var j = 0; j < wordNow.length; j++) {

        if (wordNow[j] === letter) {
                
            blank[j] = letter;

            right();

        }

    }

    if ((guessesLeft >= 1) && (wordNow.indexOf(letter) === -1)) {

        guessesLeft--;

    }

    begin();

    var won = true;

    for (var i = 0; i < blank.length; i++) {

        if (blank[i] === '_') {

            won = false;

            break;

        }

    }

    if (won) {

        won = false;

        pupImg();
        
        yay();

        wins++;

        gameAlert.textContent = "EVIL JOB! Press any letter key to continue.";

        reset();

        return;

    } else if (guessesLeft === 0) {

        ohNo();

        gameAlert.textContent = "CURSES UPON YOUR SOUL. Press any letter key to continue.";

        reset();

        return;
    }
        
});