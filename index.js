
let runButton = document.getElementById('run');
let quizCodeEntry = document.getElementById('quizCode')

runButton.addEventListener('click', () => {
    location.href = "InQuiz/quiz.html"
    localStorage.setItem('quizCode', quizCodeEntry.value)
})