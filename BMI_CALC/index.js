const btnEl= document.getElementById("btn"); 
const bmiEl = document.getElementById("BMI");
const weightEl=document.getElementById("weight-condition");

function calculateBMI(){
    const height_val=document.getElementById("height").value /100; 
    const weight_val=document.getElementById("weight").value;  

    const BMI_val= weight_val/(height_val**2); 
    bmiEl.value = BMI_val;  

    if (BMI_val<18.5){
            weightEl.innerText="Underweight"; 
    } 
    else if(BMI_val >=18.5 && BMI_val <=24.9 ){
        weightEl.innerText = "Normal"
    }else if(BMI_val >=25 && BMI_val<=29.9){
        weightEl.innerText=" Overweight"
    }else if(BMI_val >30){
        weightEl.innerText="Obese"}
}
btnEl.addEventListener("click",calculateBMI);