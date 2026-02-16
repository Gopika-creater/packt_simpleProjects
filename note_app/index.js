<<<<<<< HEAD
const appEl=document.getElementById("app"); 
const btnEl=document.getElementById("btn");  

getNote().forEach((note)=>{
    const noteEl = createNoteEl(note.id,note.content); 
    appEl.insertBefore(noteEl,btnEl)
})

function createNoteEl(id, content){
    const element = document.createElement("textarea"); 
    element.classList.add("note"); 
    element.placeholder="Empty Note"; 
    element.value = content ; 
   

    element.addEventListener("dblclick",()=>{
        const warning = confirm("Do you want to delete this note?");
        if (warning){
            deleteNote(id, element);
        }
    }); 
    element.addEventListener("input",()=>{
        updateNote(id,element.value);
    })
    return element;
}
function updateNote(id,content){
    const notes= getNote() ;
    const target= notes.filter((note)=>note.id == id)[0];
    target.content = content; 
    saveNote(notes); 

}
function deleteNote(id,element){
    const notes = getNote().filter((note)=>note.id !=id); 
    saveNote(notes); 
    appEl.removeChild(element);
}

function addNote(){  
    const notes=getNote();
    const noteObj = { 
        id: Math.floor(Math.random() * 100000), 
        content: "", 
    };
    const noteEl = createNoteEl(noteObj.id,noteObj.content);
    appEl.insertBefore(noteEl,btnEl); 
    notes.push(noteObj);
    saveNote(notes);
} 

function saveNote(notes){
     localStorage.setItem("note-app",JSON.stringify(notes));
} 
   
function getNote(){
   return JSON.parse(localStorage.getItem("note-app")||"[]");
}


=======
const appEl=document.getElementById("app"); 
const btnEl=document.getElementById("btn");  

getNote().forEach((note)=>{
    const noteEl = createNoteEl(note.id,note.content); 
    appEl.insertBefore(noteEl,btnEl)
})

function createNoteEl(id, content){
    const element = document.createElement("textarea"); 
    element.classList.add("note"); 
    element.placeholder="Empty Note"; 
    element.value = content ; 
   

    element.addEventListener("dblclick",()=>{
        const warning = confirm("Do you want to delete this note?");
        if (warning){
            deleteNote(id, element);
        }
    }); 
    element.addEventListener("input",()=>{
        updateNote(id,element.value);
    })
    return element;
}
function updateNote(id,content){
    const notes= getNote() ;
    const target= notes.filter((note)=>note.id == id)[0];
    target.content = content; 
    saveNote(notes); 

}
function deleteNote(id,element){
    const notes = getNote().filter((note)=>note.id !=id); 
    saveNote(notes); 
    appEl.removeChild(element);
}

function addNote(){  
    const notes=getNote();
    const noteObj = { 
        id: Math.floor(Math.random() * 100000), 
        content: "", 
    };
    const noteEl = createNoteEl(noteObj.id,noteObj.content);
    appEl.insertBefore(noteEl,btnEl); 
    notes.push(noteObj);
    saveNote(notes);
} 

function saveNote(notes){
     localStorage.setItem("note-app",JSON.stringify(notes));
} 
   
function getNote(){
   return JSON.parse(localStorage.getItem("note-app")||"[]");
}


>>>>>>> c43ce860aaa74519c136506415ed5023bb923b15
btnEl.addEventListener("click",addNote);