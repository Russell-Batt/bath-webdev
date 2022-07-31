window.onload = () => {
    
    let submit = document.querySelector("#submitBtn");
    submit.addEventListener("click", playRockPaperScissors);
    
    // let options = document.querySelectorAll(".optionBtn");
    // input.addEventListener("click", userOption);

}


function playRockPaperScissors(){
    const options = {"rock": 0, "paper": 1, "scissors": 2}; 

    var x = document.querySelector('input[name="option"]:checked').value;
    console.log(x);
    var y = Math.floor(Math.random() * 3);
    console.log(y)
    
    if (x = "paper") (y = 2)
     console.log("you lose")
     if (x = "paper") (y < 2)
     console.log("you win")

}
    
