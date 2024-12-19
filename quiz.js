
let quizCode = localStorage.getItem('quizCode').split('\n')
let question = 1
let correct = 0
let questionCount = 0
let newQuestionIndecies = []


// QUESTION FORMAT 

// @
// insert question here e.g What is 1+1
// insert correct here e.g 2
// 2
// 3
// 4
// 5

//TODO: SHOW WHICH QUESTIONS YOU GOT WRONG

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


for (let i = 0; i < quizCode.length; i++) {
    if (quizCode[i] == "@") {
        questionCount++
        newQuestionIndecies.push(i)
    }
}

document.getElementById("questionCount").innerHTML = questionCount

function updateQuestion() {
    document.getElementById("questionNumber").innerHTML = question
    
    let currentQuestionCode = []
    
    for (let i = newQuestionIndecies[question-1]; i < quizCode.length; i++) {
        if (quizCode[i] == "@") {
            if (i > newQuestionIndecies[question-1]) {
                break
            }
        }
        else {
            currentQuestionCode.push(quizCode[i])  
        }
    }
    
    let currentQuestion = {
        "question" : currentQuestionCode[0],
        "answer" : currentQuestionCode[1], 
        "choices" : currentQuestionCode.slice(2, currentQuestionCode.length)
    }
    
    currentQuestion["choices"] = shuffleArray(currentQuestion["choices"])

    let answersWrapper = document.getElementById("answersWrapper")
    answersWrapper.innerHTML = ""
    
    document.getElementById("question").innerHTML = currentQuestion["question"]
    
    for (let i = 0; i < currentQuestion["choices"].length; i++) {
        let answerButton = document.createElement("button")
        answerButton.innerHTML = currentQuestion["choices"][i]
        answerButton.classList.add("answerButton")
        
        
        answerButton.addEventListener("click", function() 
        {
            if (answerButton.innerHTML == currentQuestion["answer"]) {
                correct++
            } 
            question++
            updateQuestion()
        })
        
        
        answersWrapper.appendChild(answerButton)
    }
    if (question > questionCount) {
        quizEnded()
        return
    }
}
updateQuestion()

function quizEnded() {
    let percent = (correct / questionCount) * 100
    localStorage.setItem("percent", percent)
    localStorage.setItem("correct", correct)
    localStorage.setItem("questionCount", questionCount)
    location.href = "ended.html"
}

