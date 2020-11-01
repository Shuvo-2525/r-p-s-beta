// ---------------------------- Random Number maker

function randomDecision() {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    if (randomNumber === 100 ) {
        randomNumber = randomNumber - 1
        return randomNumber
    }

    
    return randomNumber
    
}

function takingNumber() {
    const numberContainer = randomDecision();

if (numberContainer >= 1 && numberContainer <= 33) {
    var str = "rock"
    return str
}


if (numberContainer >= 34 && numberContainer <= 66) {
    var str = "paper"
    return str
    
}


if (numberContainer >= 67 && numberContainer <= 99) {
    var str = "scissor"
    return str
    
}


}




function handleClickRock() {
    const idCollector =  document.getElementById('rock').value
    const computerDecision = takingNumber()
    let yourPoint = document.getElementById('youWin').innerText
    const yourPointNumber = parseFloat(yourPoint)
    let pcPoint = document.getElementById('pcWin').innerText
    const pcPointNumber = parseFloat(pcPoint)
    

    if (computerDecision === "rock") { 
        const countingNum = yourPointNumber + 0
        document.getElementById('youWin').innerText = countingNum   
        document.getElementById('pcChoice').innerText = "Pc picks Rock"

        const res = "tie"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;

    }
    if (computerDecision === "paper") {
        const countingNum = pcPointNumber + 1
        document.getElementById('pcWin').innerText = countingNum;
        document.getElementById('pcChoice').innerText = "Pc picks Paper"

        const res = "you lose"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }
    if (computerDecision === "scissor") {
        const countingNum = yourPointNumber + 1
        document.getElementById('youWin').innerText = countingNum  
        document.getElementById('pcChoice').innerText = "Pc picks Scissor"

        const res = "you won"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }
    
}

function handleClickPaper() {
    const idCollector =  document.getElementById('paper').value
    const computerDecision = takingNumber()
    let yourPoint = document.getElementById('youWin').innerText
    const yourPointNumber = parseFloat(yourPoint)
    let pcPoint = document.getElementById('pcWin').innerText
    const pcPointNumber = parseFloat(pcPoint)
    
    if (computerDecision === "rock") {
        const countingNum = yourPointNumber + 1
        document.getElementById('youWin').innerText = countingNum  
        document.getElementById('pcChoice').innerText = "Pc picks Rock"

        const res = "you won"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;

    }
    if (computerDecision === "paper") { 
        const countingNum = yourPointNumber + 0
        document.getElementById('youWin').innerText = countingNum ;
        document.getElementById('pcChoice').innerText = "Pc picks Paper"

        const res = "tie"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }
    if (computerDecision === "scissor") {
        const countingNum = pcPointNumber + 1
        document.getElementById('pcWin').innerText = countingNum;
        document.getElementById('pcChoice').innerText = "Pc picks Scissor"

        const res = "you lose"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    } 

}

// function showResult() {
//     if (condition) {
        
//     }
    
// }

function handleClickScissor() {
    const idCollector =  document.getElementById('scissor').value
    const computerDecision = takingNumber()
    let yourPoint = document.getElementById('youWin').innerText
    const yourPointNumber = parseFloat(yourPoint)
    let pcPoint = document.getElementById('pcWin').innerText
    const pcPointNumber = parseFloat(pcPoint)
    
    if (computerDecision === "rock") {
        const countingNum = pcPointNumber + 1
        document.getElementById('pcWin').innerText = countingNum;
        document.getElementById('pcChoice').innerText = "Pc picks Rock"
        const res = "you lose"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }
    if (computerDecision === "paper") {
        const countingNum = yourPointNumber + 1
        document.getElementById('youWin').innerText = countingNum  ;
        document.getElementById('pcChoice').innerText = "Pc picks Paper"

        const res = "you won"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }
    if (computerDecision === "scissor") { 
        const countingNum = yourPointNumber + 0
        document.getElementById('youWin').innerText = countingNum   ;
        document.getElementById('pcChoice').innerText = "Pc picks Scissor"

        const res = "tie"
        const resultView = ("you pick" + "-" + idCollector + "," + "pc pick"+ "-" + computerDecision + " ;" + "result --" + res)
        document.getElementById('result').innerText = '';
        document.getElementById('result').innerText = resultView;
    }  

}

// const handleClickPaper1 = handleClickPaper()
// const handleClickRock1 = handleClickRock()
// const handleClickScissor1 = handleClickScissor()

// console.log(handleClickScissor1)
// console.log(handleClickRock1)
// console.log(handleClickPaper1)


