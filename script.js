const buttons = document.querySelectorAll(".activeButtons");
const input = document.querySelector("#expressionInput");

buttons.forEach(button => button.addEventListener("click", (e)=>{
    insert(e.target.innerText);
}));

function insert(element) {
    if(input.value==="Error"){
        deleteAll();
    }
    input.value+=element;
}

function deleteAll(){
    input.value='';
}

function deleteLast(){
    //input.value=input.value.slice(0, input.value.length-1)
    if(input.value==="Error"){
        deleteAll();
        return;
    }
    input.value=input.value.slice(0, -1);
}

function calculate(){
    let expression=input.value;
    let result=0;
    try{
        result=eval(expression);
    }
    catch(error){
        result= "Error";
    }
    input.value=result;
}