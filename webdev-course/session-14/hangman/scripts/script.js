var wordList = ["hello", "keyboard", "computer", "javascript", "bottle", "medicine", "landing", "window", "carpet", "basket", "doorbell", "trousers", "meaning", "losing", "fifteen"];

var word = wordList[Math.floor(Math.random() * wordList.length)];

var answer = [];
for (var i = 0; i < word.length; i++) {
    answer[i] = "_"
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answer.join(" "));
    var guess = prompt("Guess a letter");
    if (guess == null) {
        break;
    } else if (guess.length !== 1) {
        alert ("Please enter a single letter")
    } else{
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answer[j] = guess;
                remainingLetters --;
            }
        }
    }
}

alert (answer.join(" "));

alert ("The answer was " + [word])