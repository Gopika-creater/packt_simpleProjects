const quoteEl = document.getElementById("Quote");  
const btnEl = document.getElementById("btn"); 
const apiURL = "http://api.quotable.io/random"; 
const authorEl = document.getElementById("author")




async function getQuote(){
    try {
        btnEl.innerText= "Fighting demons to get your Quote...";
        btnEl.disabled =true;
        const response = await fetch(apiURL); 
        const data =  await response.json(); 
        quoteEl.innerText= '"'+data.content+ '"'; 
        authorEl.innerText = "~"+data.author; 
        btnEl.innerText= "Another one???get back to work go";
        btnEl.disabled =false;
    } catch (error) {
        console.log(error); 
        quoteEl.innerText= "An error occured bro!! no motivation for you today :(";  
        authorEl.innerText = "By your one and only error(open console to see who i am)";
        btnEl.disabled = false;
    }
}

btnEl.addEventListener("click",getQuote);
