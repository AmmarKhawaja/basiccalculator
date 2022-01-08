var totalNumber = 0
var currentNumber = 0
var start = true
var storedOperand = " "
const display = document.querySelector("#display")
const text = document.createElement("h1")
text.classList.add("text")
text.textContent = currentNumber
display.appendChild(text)

function selectNumber(num) {
    if (start == true) {
        totalNumber = num
        start = false
    }else {
        if (currentNumber == 0) {
            currentNumber = num
        }else {
            var a = currentNumber.toString()
            var b = num.toString()
            var c = a + b
            currentNumber = parseInt(c)
            num = currentNumber
        }
    }
    //     var a = currentNumber.toString()
    //     var b = num.toString()
    //     var c = a + b
    //     currentNumber = parseInt(c)
    //     num = currentNumber
    // if (currentNumber == 0 && totalNumber == 0) {
    //     totalNumber = num
    // }
    // if (currentNumber == 0 && totalNumber != 0) {
    //     currentNumber = num
    // }
    // else {
    //     var a = currentNumber.toString()
    //     var b = num.toString()
    //     var c = a + b
    //     currentNumber = parseInt(c)
    //     num = currentNumber
    // }
    
    // if (totalNumber == 0) {
    //     totalNumber = num
    // }else if (currentNumber != 0) {
    //     alert("aaa")
    //     a = currentNumber.toString()
    //     b = num.toString()
    //     c = a + b
    //     currentNumber = c.toInt()
    //     num = currentNumber
    // }else {
    //     currentNumber = num
    // }
    text.textContent = num
    display.appendChild(text)
}
function selectOperand(op) {
    if (op == "equ") {
        if (storedOperand == "add") {
            totalNumber = totalNumber + currentNumber
        }
        else if (storedOperand == "sub") {
            totalNumber = totalNumber - currentNumber
        }
        else if (storedOperand == "mul") {
            totalNumber = totalNumber * currentNumber
        }
        else if (storedOperand == "div") {
            totalNumber = totalNumber / currentNumber
        }
        alert(totalNumber)
        currentNumber = 0
        storedOperand = " "
    }else {
        storedOperand = op
    }
}