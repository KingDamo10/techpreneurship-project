// let selectedOperator = '';

// document.querySelector('.dropdown-button').addEventListener('click', function(){
//     var dropdownOptions = document.querySelector('.dropdown-options');
//     dropdownOptions.style.display = dropdownOptions.style.display === 'none'?'block':'none';
// });

// document.querySelectorAll('.dropdown-options li').forEach(function (option) {
//     option.addEventListener('click',function(){
//         selectedOperator = option.getAttribute('data-value');
//         console.log('seleted operator:', selectedOperator);
//     }); 
// }); 

// const calculate1 = document.querySelector('#num1'); 
// const calculate2 = document.querySelector('#num2');
// const generate_btn = document.querySelector('#generate');
// const result = document.querySelector(".result");

// generate_btn.addEventListener("click", () => {
//     // covert inputs values to numbers
//     const value1 = parseFloat(calculate1.value);
//     const value2 = parseFloat(calculate2.value);

//     // check if operator is selected
//     if (!selectedOperator) {
//         result.innerHTML = "Please select an operator.";
//         return;
//     }

//     // check if what has been inputed is a valid number
//     if (isNaN(value1) || isNaN(value2)) {
//         result.innerHTML = "please enter valid numbers.";
//         return;
//     }

//     // perform the operation that has been selected
//     const operations = {
//         '+': value1 + value2,
//         '-': value1 - value2,
//         '*': value1 * value2,
//         '/': value2 !== 0 ? value1 / value2 : "cannot divide by zero"
//     };

//     // Display / Print the result
//     result.innerHTML = `Result: ${operations[selectedOperator]}`;   
// });


const calculate1 = document.querySelector('#num1');
const calculate2 = document.querySelector('#num2');
const generate_btn = document.querySelector('#generate');
const operator = document.querySelector(".dropdown-options");
const result = document.querySelector(".result");


generate_btn.addEventListener("click", () => {
    // alert(operator.value)
    const operand_1 = parseFloat(calculate1.value);
    const operand_2 = parseFloat(calculate2.value);
    const operator_value = operator.value;

    if (operator_value === "" || !operand_1 || !operand_2) {
        result.innerHTML = "Inputs or operator is required";
    }

    switch (operator_value) {
        case "+":
            result.innerHTML = operand_1 + operand_2;
            break;
        case "-":
            result.innerHTML = operand_1 - operand_2;
            break;
        case "*":
            result.innerHTML = operand_1 * operand_2;
            break;
        case "/":
            result.innerHTML = operand_1 / operand_2;
            break;

        default:
            result.innerHTML = "No operator selected"
            break;
    }
});