const input = document.getElementById('input') 
const answer = document.getElementById('answer') 

 
function getNumber(num){ 
    switch(num){ 
        case 1: 
            input.value += '1' 
        break 
 
        case 2: 
            input.value += '2' 
        break 
 
        case 3: 
            input.value += '3' 
        break 
 
        case 4: 
            input.value += '4' 
        break 
 
        case 5: 
            input.value += '5' 
        break 
 
        case 6: 
            input.value += '6' 
        break 
 
        case 7: 
            input.value += '7' 
        break 
 
        case 8: 
            input.value += '8' 
        break 
 
        case 9: 
            input.value += '9' 
        break 
 
        case 0: 
            input.value += '0' 
        break 
    } 
} 
 
function getOperator(Operator){ 
    switch(Operator){ 
 
        case '+': 
            input.value += '+'; 
        break 
 
        case '-': 
            input.value += '-' 
        break 
 
             
        case '/': 
            input.value += '/'
        break 
 
        case '*': 
            input.value += '*' 
        break
        case '%' : 
            input.value += '%' 
        break 
        case '+/-' : 
            input.value += '+/-' 
        break 
        case '.' : 
            input.value += '.' 
        break 

 
    } 
 
} 

function jnjel(){
    var string = input.value;
    string = string.substring(0, string.length-1);
    input.value = string
}
function comparision(){ 
    answer.value = +eval(input.value) 
} 
 

 
function clearInput(){ 
    input.value = '' 
    answer.value = '' 
}