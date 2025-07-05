function init() {

    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let result = 0;
    const calculator = document.querySelector('#calculator');

    calculator.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        // You have to click a button to see this log
        console.log(event.target.innerText);

        // Example
        if (event.target.classList.contains('number')) {
            
        }

        // Example
        if (event.target.innerText === '*') {
            // Do something with this operator
        }
    });
}
document.addEventListener('DOMContentLoaded', init)