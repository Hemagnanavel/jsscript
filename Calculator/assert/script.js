const display = document.getElementById("display");
document.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttonValue = event.target.textContent;
    if (buttonValue >= 0 && buttonValue <= 9 || buttonValue === ".") {
      //console.log(buttonValue);
      display.value += buttonValue;
    }
    else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      display.value += buttonValue;
    }
    else if (buttonValue === "=") {
      display.value = eval(display.value);
    }
    else {
      if (buttonValue === "C") {
        display.value = "";
      }
    }
  } 
});



