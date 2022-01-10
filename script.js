var numbers = ["0"]
var storedOperand = " "
const display = document.querySelector("#display")
const text = document.createElement("h1")
text.classList.add("text")
display.appendChild(text)

const addButton = document.querySelector("#addButton")
const subButton = document.querySelector("#subButton")
const mulButton = document.querySelector("#mulButton")
const divButton = document.querySelector("#divButton")
function resetButtonColors() {

}
function selectNumber(num) {
    if (numbers.length == 1) {
        numbers.push(num)
    }else {
        a = num.toString()
        b = numbers[numbers.length - 1]
        c = b + a
        num = c
        numbers[numbers.length - 1] = num
    }
    if (storedOperand == "add") {
        numbers.push((parseInt(numbers[numbers.length - 2]) + parseInt(numbers[numbers.length - 1])).toString())
    }
    else if (storedOperand == "sub") {
        numbers.push((parseInt(numbers[numbers.length - 2]) - parseInt(numbers[numbers.length - 1])).toString())
    }
    else if (storedOperand == "mul") {
        numbers.push((parseInt(numbers[numbers.length - 2]) * parseInt(numbers[numbers.length - 1])).toString())
    }
    else if (storedOperand == "div") {
        numbers.push((parseInt(numbers[numbers.length - 2]) / parseInt(numbers[numbers.length - 1])).toString())
    }
    console.log(numbers)
    text.textContent = num
    display.appendChild(text)
}
function selectOperand(op) {
    if (op == "equ") {
        // if (storedOperand == "add") {
        //     numbers.push((parseInt(numbers[numbers.length - 2]) + parseInt(numbers[numbers.length - 1])).toString())
        // }
        // else if (storedOperand == "sub") {
        //     numbers.push((parseInt(numbers[numbers.length - 2]) - parseInt(numbers[numbers.length - 1])).toString())
        // }
        // else if (storedOperand == "mul") {
        //     numbers.push((parseInt(numbers[numbers.length - 2]) * parseInt(numbers[numbers.length - 1])).toString())
        // }
        // else if (storedOperand == "div") {
        //     numbers.push((parseInt(numbers[numbers.length - 2]) / parseInt(numbers[numbers.length - 1])).toString())
        // }
        console.log(numbers)
        text.textContent = numbers[numbers.length - 1]
        display.appendChild(text)
        storedOperand = " "
    }else {
        storedOperand = op
        numbers.push(" ")
    }
    
    console.log(numbers)
}

function clearNum() {
    numbers = ["0"]
    text.textContent = numbers[numbers.length - 1]
    display.appendChild(text)
}