function append(value){
    document.getElementById("result").value += value;
}

function clearResult(){
    document.getElementById("result").value = "";
}

function calculate(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}