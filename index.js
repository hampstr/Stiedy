
let runButton = document.getElementById('run');
let quizCodeEntry = document.getElementById('quizCode')

runButton.addEventListener('click', () => {
    location.href = "InQuiz/settings.html"
    window.quizCode = quizCodeEntry.value
    console.log(window.quizCode)
})