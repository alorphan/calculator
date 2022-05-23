const display = document.querySelector(".display");
const operators = ["+", "-", "*", "/"];
let opPressed = false;
let str1 = "";
let str2 = "";
let opStr = "";

function operate(num1, num2, op){
    console.log(num1 + op + num2);
    switch(op)
    {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "ERROR";
    }
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", buttonPress);
}

function buttonPress(e) {
    const input = this.textContent;
    if (input == "C")
    {
        resetCalculator();
    }
    else if (input == "=" || (opPressed && operators.includes(input)))
    {
        if (str2 == "") str2 = str1;
        
        str1 = operate(parseInt(str1), parseInt(str2), opStr);
        display.textContent = str1;
        str2 = "";
        opPressed = false;
        opStr = "";
        resetOpBtns();
        if (operators.includes(input))
        { 
            opStr = input;
            opPressed = true;
            this.style.backgroundColor = "green";
        }

        if (input == "=")
        {
            str1 = "";
        }
    }
    else if (operators.includes(input))
    {
        opPressed = true;
        opStr = input;
        console.log(opStr);
        resetOpBtns();
        this.style.backgroundColor = "green";
    }
    else if (opStr == "")
    {
        str1 += input;
        display.textContent = str1;

    }
    else
    {
        str2 += input;
        display.textContent = str2;
    }
}

function resetCalculator()
{
    opPressed = false;
    opStr = "";
    str1 = "";
    str2 = "";
    display.textContent = "";
    resetOpBtns();
}

function resetOpBtns()
{
    const opBtns = document.querySelectorAll('.opBtn');
    for (const btn of opBtns)
    {
        btn.style.backgroundColor = "gray";
    }
}