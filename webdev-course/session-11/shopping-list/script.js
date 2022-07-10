window.onload = () => {
    
    let submit = document.querySelector("#submitBtn");
    submit.addEventListener("click", shopping);
    let button = document.querySelector("#favs");
    button.addEventListener("click", favorites);

}

const shoppingList = ""

let items =[
    "carrots",
    "lettuce",
    "milk",
]

function favorites() {
    
    var newElement = document.createElement("li");
    output.appendChild(newElement);
    newElement.textContent = shoppingList[items];
    items++;
    if (items >= shoppingList.length){
        items = 0;
    }

}

function shopping() {
    
    const userItem = document.getElementById("textBox").value;
    document.getElementById("textBox").innerHTML = items;
    if (items.includes(userItem) == true){
        window.alert(`${userItem} is already on the list`);
    } else {
        items.push(userItem);
    }

} 

