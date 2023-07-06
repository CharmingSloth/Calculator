const add = function(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}

const substract = function(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}

const multiply = function(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}

const divide = function(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}

function operate(firstOperand, secondOperand, operator){
    if (operator === '+'){
        return add(firstOperand, secondOperand);
    }else if(operator === '-'){
        return substract(firstOperand,secondOperand);
    }else if(operator === 'X'){
        return multiply(firstOperand,secondOperand);
    }else if(operator === '/'){
        return divide(firstOperand,secondOperand);
    }
}

const numberButtons = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const input = document.querySelector('.input');
const lastInput = document.querySelector('.last-input');
const resultButton = document.querySelector('.result-button');
const crearButton = document.querySelector('.clean-button');
const deleteButton = document.querySelector('.delete-button');
const buttons = document.querySelectorAll('.button');

let firstOperand
let secondOperand
let operator
let result
let operand = '';

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operand += e.target.textContent;
        input.textContent = operand;
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', (e) => {
        if(firstOperand === undefined){
            firstOperand = parseInt(operand);
            operator = e.target.textContent
            operand = '';
        }else{
            if(operand === ''){
                secondOperand = firstOperand;
            }else{
                secondOperand = parseInt(operand);
            }
            result = operate(firstOperand, secondOperand, operator);
            firstOperand = result;
            input.textContent = result;
            operator = e.target.textContent;
            operand = '';
        }

    })
})

resultButton.addEventListener('click', () => {
    if(operand === ''){
        secondOperand = firstOperand;
    }else{
        secondOperand = parseInt(operand);
    }
    result = operate(firstOperand, secondOperand, operator);
    input.textContent = result;
})