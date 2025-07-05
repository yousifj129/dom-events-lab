function init() {

    let expression = '';
    const display = document.querySelector('.display');
    const calculator = document.querySelector('#calculator');

    let displayingResult = false;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'C', 'Enter'];

    function evaluateExpression(expr) {
        let numbers = []
        let operations = []

        const patternNumbers = new RegExp('[\\+\\-\\*\\/]');
        numbers = expr.split(patternNumbers);
        numbers.forEach((num, index) => {
            numbers[index] = Number(num);   
        });
        operations = [];
        for (let i = 0; i < expr.length; i++) {
            if (['+', '-', '*', '/'].includes(expr[i])) {
                operations.push(expr[i]);
            }
        }


        console.log('Numbers:', numbers);
        console.log('Operations:', operations);

        if (numbers.length === 0) {
            display.innerText = '0';
            return;
        }
        if (operations.length === 0) {
            display.innerText = numbers[0];
            return;
        }

        let result = numbers[0];
        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            const number = numbers[i + 1];

            if (operation === '+') {
                result += number;
            } else if (operation === '-') {
                result -= number;
            } else if (operation === '*') {
                result *= number;
            } else if (operation === '/') {
                if (number === 0) {
                    display.innerText = 'No division by zero';
                    return;
                }
                result /= number;
            }
        }
        display.innerText = result;
        displayingResult = true;
    }
    calculator.addEventListener('click', (event) => {
        if (!displayingResult) {
            if (event.target.classList.contains('button')) {
                if (!event.target.innerText.includes('=')) {
                    console.log(event.target.innerText);
                    expression += event.target.innerText;
                    display.innerText = expression;
                }
                if (event.target.innerText.includes('=')) {
                    evaluateExpression(expression);
                }
                if (event.target.innerText.includes('C')) {
                    expression = '';
                    display.innerText = expression;
                    displayingResult = false;
                }
            }

        }
        else {
            if (event.target.classList.contains('button')) {
                expression = '';
                display.innerText = expression;
                displayingResult = false;
            }
        }
    });
    window.addEventListener('keydown', (event) => {
        if (!displayingResult) {
            if (validKeys.includes(event.key)) {
                if (!event.key.includes('=') && !event.key.includes('C') && !event.key.includes('Enter')) {
                    console.log(event.key);
                    expression += event.key;
                    display.innerText = expression;
                }
                if (event.key.includes('=') || event.key.includes('Enter')) {
                    evaluateExpression(expression);
                }
                if (event.key.includes('C')) {
                    expression = '';
                    display.innerText = expression;
                    displayingResult = false;
                }
            }


        }
        else {
            if (validKeys.includes(event.key)) {
                expression = '';
                display.innerText = expression;
                displayingResult = false;
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', init)