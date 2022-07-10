function display(val){
    document.getElementById("output").value += val;
    return val;
}

function calculate(){
    let x = document.getElementById("output").value;
    let y = eval(x);
    document.getElementById("output").value = y;
    return y;
}

function clearOutput(){
    document.getElementById("output").value = "";
}
