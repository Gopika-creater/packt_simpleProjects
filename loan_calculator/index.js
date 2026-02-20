const PrincipleEl=document.getElementById("Principle"); 
const Interest_RateEl= document.getElementById("Interest_Rate"); 
const Time_durationEl=document.getElementById("Time_duration"); 
const calculateBtn = document.getElementById("calculate"); 
const final_amountEl=document.getElementById("final_amount"); 
function calculator(event){ 
    event.preventDefault();
    const priple = parseFloat(PrincipleEl.value); 
    const inter  = parseFloat(Interest_RateEl.value);
    const time   = parseFloat(Time_durationEl.value);

    const result = (priple * inter * time) / 100; 
    console.log(result);
    
    final_amountEl.value = result.toFixed(3);
    
    
}



calculateBtn.addEventListener("click",calculator);