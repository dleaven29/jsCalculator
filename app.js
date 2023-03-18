const screenDisplay=document.querySelector('.screen');
//The querySelectorAll method will get all HTML button elements from the document object model and store them within a node list
const buttons=document.querySelectorAll('button');

let calculation=[];
let accumulativeCalculation;

function calculate(button){
    const value=button.textContent;
    if(value=="CLEAR"){
        calculation=[];
        screenDisplay.textContent=0;
    }else if(value=="="){
        //The eval method evaluates the Javascript code that is a String and it will return its value
        screenDisplay.textContent=eval(accumulativeCalculation);  
    }else{
        calculation.push(value);
        //The join method below will change the array elements from calculation into a String
        accumulativeCalculation=calculation.join('');
        screenDisplay.textContent=accumulativeCalculation;
    }
   
}

buttons.forEach(button=>button.addEventListener('click', ()=>calculate(button) ))
