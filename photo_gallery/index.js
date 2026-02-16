<<<<<<< HEAD
const btnEL = document.getElementById("btn") ; 
const errorMessageEl=document.getElementById("errorMessage");
const galleryEl=document.getElementById("gallery");
async function fetchImage(){ 
    const inputValue = document.getElementById("input").value 
    if(inputValue>10 ||inputValue < 1){
        errorMessageEl.style.display = "block"; 

        return; 
    }

    imgs= ""; 

    try { 
        btnEL.style.display="none"; 

        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=kpXgJ90iMXthF0nCRFG2QGhtGcYaDIWb7hnKk1hKKSI`).then((res)=>
            res.json().then((data)=>{
                if (data){data.forEach((pic)=>{
                    imgs += `
                    <img src=${pic.urls.small} alt="image"/>
                    `; 
                    galleryEl.style.display= "block";
                    galleryEl.innerHTML=imgs; 
                    btnEL.style.display="block";
                })}})); 
        errorMessageEl.style.display = "none"; 
    } catch (error) { 
        errorMessageEl.style.display ="block"
          errorMessageEl.innerHTML=" An error occured" 
          btnEL.style.display="block";
    }
}
btnEL.addEventListener("click", fetchImage); 
=======
const btnEL = document.getElementById("btn") ; 
const errorMessageEl=document.getElementById("errorMessage");
const galleryEl=document.getElementById("gallery");
async function fetchImage(){ 
    const inputValue = document.getElementById("input").value 
    if(inputValue>10 ||inputValue < 1){
        errorMessageEl.style.display = "block"; 

        return; 
    }

    imgs= ""; 

    try { 
        btnEL.style.display="none"; 

        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=kpXgJ90iMXthF0nCRFG2QGhtGcYaDIWb7hnKk1hKKSI`).then((res)=>
            res.json().then((data)=>{
                if (data){data.forEach((pic)=>{
                    imgs += `
                    <img src=${pic.urls.small} alt="image"/>
                    `; 
                    galleryEl.style.display= "block";
                    galleryEl.innerHTML=imgs; 
                    btnEL.style.display="block";
                })}})); 
        errorMessageEl.style.display = "none"; 
    } catch (error) { 
        errorMessageEl.style.display ="block"
          errorMessageEl.innerHTML=" An error occured" 
          btnEL.style.display="block";
    }
}
btnEL.addEventListener("click", fetchImage); 
>>>>>>> c43ce860aaa74519c136506415ed5023bb923b15
