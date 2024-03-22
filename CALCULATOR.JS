/*var solnbox=document.getElementById("soln")
var disp=document.getElementById("display")
function one(event){
    var no1=document.getElementById("001")
   disp.textContent= no1.value
    console.log(event)
    
}
function two(){
    var no2=document.getElementById("002")
    console.log(no2.value)
}
*/
class Calculator {
    constructor() {
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
    }

    appendNumber(number) {
        this.currentInput += number.toString();
        this.updateDisplay();
    }

    appendOperator(operator) {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

    updateDisplay() {
        document.getElementById('display').textContent = this.currentInput;
    }

    clear() {
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentInput = result.toString();
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    }
}

const calculator = new Calculator();

function appendNumber(number) {
    calculator.appendNumber(number);
}

function appendOperator(operator) {
    calculator.appendOperator(operator);
}

function clearDisplay() {
    calculator.clear();
}

function calculateResult() {
    calculator.calculate();
}


