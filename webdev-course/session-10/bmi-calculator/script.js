window.onload = () => {
    
    let button = document.querySelector("#calculate")

    button.addEventListener("click", calculateBMI);

}

function calculateBMI() {
    
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");
 
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
                                                                    
    if (bmi < 18.6) 
    result.innerHTML = `Underweight: <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
    result.innerHTML = `Normal: <span>${bmi}</span>`;

    else if (bmi > 24.9)
    result.innerHTML = `Overweight: <span>${bmi}</span>`;

}