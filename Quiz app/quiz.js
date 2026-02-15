const timer_text = document.getElementById("timer-text");
const next_button = document.getElementById("next-button");

const question = document.getElementById("question");
const option_a = document.getElementById("option-a");
const option_b = document.getElementById("option-b");
const option_c = document.getElementById("option-c");
const option_d = document.getElementById("option-d");

const rai_option_a = document.getElementById("rai-option-a");
const rai_option_b = document.getElementById("rai-option-b");
const rai_option_c = document.getElementById("rai-option-c");
const rai_option_d = document.getElementById("rai-option-d");

let timer_id = 0;
let currentQuestionIndex = 0;
let score = 0;

const questionBank = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    category: "Science"
  },
  {
    id: 2,
    question: "Who painted the 'Mona Lisa'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci",
    category: "Art"
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    category: "Geography"
  },
  {
    id: 4,
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1898"],
    answer: "1912",
    category: "History"
  },
  {
    id: 5,
    question: "What is the chemical symbol for Gold?",
    options: ["Gd", "Ag", "Au", "Fe"],
    answer: "Au",
    category: "Science"
  },
  {
    id: 6,
    question: "Which country is home to the Kangaroo?",
    options: ["South Africa", "Australia", "Brazil", "India"],
    answer: "Australia",
    category: "Geography"
  },
  {
    id: 7,
    question: "Who is the author of 'Harry Potter'?",
    options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
    answer: "J.K. Rowling",
    category: "Literature"
  },
  {
    id: 8,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
    category: "Science"
  },
  {
    id: 9,
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
    category: "Science"
  },
  {
    id: 10,
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    answer: "Tokyo",
    category: "Geography"
  }
];

const startTimer = () => {
    let counter = 5;
timer_id = setInterval(() => {
    timer_text.textContent = counter;
     counter--;   
    if(counter < 0) {
        clearInterval(timer_id);
        if(currentQuestionIndex < questionBank.length) {
        calculateResult();
        nextQuestion();
      } else {
        calculateResult();
      //  alert("your score is "  +  score  +  "/10"); 
      }
        return;
      }
  }, 1000); 
};

const nextQuestion = () => {
  rai_option_a.checked = false;
  rai_option_b.checked = false;
  rai_option_c.checked = false;
  rai_option_d.checked = false;

//  timer_text.textContent = "";
  clearInterval(timer_id);
  startTimer();
  console.log("next question called - ", currentQuestionIndex);
 question.textContent = 
 currentQuestionIndex + 
 1 +
 ". " +
  questionBank[currentQuestionIndex].question;
  option_a.textContent = questionBank[currentQuestionIndex].options[0];
  option_b.textContent = questionBank[currentQuestionIndex].options[1]; 
  option_c.textContent = questionBank[currentQuestionIndex].options[2];
  option_d.textContent = questionBank[currentQuestionIndex].options[3];

  if(currentQuestionIndex < questionBank.length - 1) {
  currentQuestionIndex++;
  }else{
   currentQuestionIndex++;
  next_button.textContent = "Submit";

 
}
};


const calculateResult = () => {
 
 if (rai_option_a.checked) {
    if(questionBank[currentQuestionIndex - 1].answer == 
      questionBank[currentQuestionIndex - 1].options[0]
    ) {
      console.log(true);

      score++;
    } else {

    }
 } else if(rai_option_b.checked) {
   if(questionBank[currentQuestionIndex - 1].answer == 
      questionBank[currentQuestionIndex - 1].options[1]
    ) {
      console.log(true);

      score++;
    } else {
      
    }
 } else if(rai_option_c.checked) {
   if(questionBank[currentQuestionIndex - 1].answer == 
      questionBank[currentQuestionIndex - 1].options[2]
    ) {
      console.log(true);

      score++;
    } else {
      
    }
  } else if(rai_option_d.checked) {
     if(questionBank[currentQuestionIndex - 1].answer == 
      questionBank[currentQuestionIndex - 1].options[3]
    ) {
      console.log(true);

      score++;
    } else {
      
    }
 }
    console.log("current score: " + score);

};


startTimer();
nextQuestion();
next_button.addEventListener("click", ()=> {
if(currentQuestionIndex < questionBank.length)
  {
    calculateResult();
     nextQuestion();
  }else{
    calculateResult();
        alert("your score is " + score + "/10");
 next_button.href = "result.html";
  }

});

