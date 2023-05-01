// Global fields
let typing = ''
let previousNum = '' 
let nextNum = ''
let currentOperand = ''
// const operands = ['%','/','*','-','+']

//display() function wil display the value of the clicked buttons with logic for apporptiate input order
function display(clicked){
    typing += clicked
    saveValues(clicked)
    
    document.querySelector('.display-box').value = typing
    
}

function saveValues(clicked){
    // console.log(clicked)
    // console.log(+clicked)
    // console.log(Number(clicked))
    // console.log(`typedof clicked: ${typeof clicked}`)
    // console.log(`typedof clicked: ${typeof Number(clicked)}`)
    
    if(Number(clicked) == clicked){
        // console.log(`clicked is ${clicked}`)
        // console.log(`previousNum is ${previousNum}`)
        // console.log(`nextNum is ${nextNum}`)
        // console.log(`currentOperand is ${currentOperand}`)


        if(currentOperand.length === 0){
            previousNum += clicked
            console.log(`previousNum is ${previousNum}`)
        } else {
            nextNum += clicked
            console.log(`nextNum is ${nextNum}`)
        }
    } else {
        if(currentOperand.length === 0){
            currentOperand = clicked
            console.log(`currentOperand is ${currentOperand}`)
        } else {
            calculate()

        } 
    }
    
}




// calculate() function will evaluate the entered expression
function calculate(){
    console.log('calculating')
    let answer = 0
    // split the typed elements into numeric expressions






    switch(currentOperand){
        case '+':
            answer = Number(previousNum) + Number(nextNum);
            console.log(answer)
            break;
        
    }

    document.querySelector('.display-box').value = answer
}


// clearLast() function will delete the last entered value


// clearScreen() function will clear all on the screen

























/*
for(let i = 0; i < typedArr.length; i++){
    console.log(i)
    // console.log(`typedArr[i] is ${typedArr[i]} and typeof typedArr[i] is ${typeof typedArr[i]}`)
    // console.log(`+typedArr[i] is ${+typedArr[i]} and typeof +typedArr[i] is ${typeof +typedArr[i]}`)
    console.log(`Number(typedArr[i]) is ${Number(typedArr[i])} and typeof Number(typedArr[i]) is ${typeof Number(typedArr[i])}`)
    if(typeof Number(typedArr[i]) === 'number'){
        if (operand.length > 0){
            num2 += Number(typedArr[i])
            console.log(`num2 is ${num2}`)
        }
        num1 += Number(typedArr[i])
            console.log(`num1 is ${num1}`)
    } else {
        operand = typedArr[i]
        // num2 = Number(typedArr.slice(i))
        // console.log(`operand is ${operand}`)
        // console.log(`num2 is ${num2}`)

    }
}

*/