const inputHeight = document.getElementById('height');
const inputweight = document.getElementById('weight');
const btn = document.getElementById('btn');
const answer = document.querySelector('#result');
const info = document.querySelector('#info');

btn.addEventListener('click', calculateBMI);

function calculateBMI(){
    const height = Number(inputHeight.value);
    const weight = Number(inputweight.value);
    const heightMeter = (height/100);
    const BMI = (weight/Math.pow(heightMeter, 2)).toFixed(2);
    answer.innerHTML= `${BMI}`;

    if(BMI < 18.5){
        info.innerHTML = "You are underweight, please consult your doctor or nutritionist"
    } else if(BMI <= 24.9) {
        info.innerHTML = "Your weight is normal, please keep your diet up"
   
    } else{
        info.innerHTML = "You are overweight, please consult your doctor or nutritionist"
 

    }

}
