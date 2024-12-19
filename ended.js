
document.getElementById("percent").innerHTML = localStorage.getItem("percent")+"%";
document.getElementById("correct").innerHTML = localStorage.getItem("correct") + " correct out of " + localStorage.getItem("questionCount");

let overview = JSON.parse(localStorage.getItem("overview"))
let overviewTable = document.getElementById("overviewTable")

for (let i = 0; i < Object.keys(overview).length; i++) {
    let num = Object.keys(overview)[i]
    let question = overview[String(i+1)][0]
    let correct = overview[String(i+1)][1]
    let answer = overview[String(i+1)][2]
    let row = document.createElement("tr")

    let numCell = document.createElement("td")
    numCell.innerHTML = num
    row.appendChild(numCell)
    
    let questionCell = document.createElement("td")
    questionCell.innerHTML = question
    row.appendChild(questionCell)
    
    let correctCell = document.createElement("td")
    correctCell.innerHTML = correct
    row.appendChild(correctCell)
    
    let answerCell = document.createElement("td")
    answerCell.innerHTML = answer
    row.appendChild(answerCell)
    
    overviewTable.appendChild(row)
}

