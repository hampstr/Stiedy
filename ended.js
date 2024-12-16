
document.getElementById("percent").innerHTML = localStorage.getItem("percent")+"%";
document.getElementById("correct").innerHTML = localStorage.getItem("correct") + " correct out of " + localStorage.getItem("questionCount");