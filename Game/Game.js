

// Get score display elements
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");

// Get message display element
const msgEl = document.getElementById("msg");

// Get all choice buttons
const choiceEl = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

// Loop through each choice and set up click behavior
for (const choice of choiceEl) {
  console.log(choice); // check element

  choice.addEventListener("click", () => {
    console.log("User chose:", choice.id); // log user pick

    // Store user choice for later comparisons
    const userChoice = choice.id;

    // Generate computer choice randomly
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chose:", compChoice); // log computer pick

    // Compare userChoice vs compChoice

    if (userChoice === compChoice) {
      msgEl.innerText = "It's a Draw!";
      msgEl.style.backgroundColor = "gray"; // optional styling   
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      userScore++;
      userScoreEl.innerText = userScore;
      msgEl.innerText = `You won! ${userChoice} beats ${compChoice}`;
      msgEl.style.backgroundColor = "green";
    }

    else{
        compScore++;
        compScoreEl.innerText = compScore;
        msgEl.innerText = `Alexa won! ${compChoice} beats ${userChoice}`;
        msgEl.style.backgroundColor = "red";
    }
  }); // closes click listener
} // closes for loop

//for changing the mode by me
/*
let modebtn = document.getElementById("mode");
let currMode = "light";

modebtn.addEventListener("click" , ()=>{
          if(currMode == "light"){
            currMode = "dark";
            document.querySelector("body").style.backgroundColor = "black";
          }else{
            currMode = "light";
            document.querySelector("body").style.backgroundColor = "#f0f0f0";
          }
});



// for changing the mode   by gpt
// Dark/Light mode toggle
// Dark/Light mode toggle
const modebtn = document.querySelector("#mode button");
let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.body.classList.add("dark-mode");
        modebtn.classList.add("dark-mode");
    } else {
        currMode = "light";
        document.body.classList.remove("dark-mode");
        modebtn.classList.remove("dark-mode");
    }
});

*/