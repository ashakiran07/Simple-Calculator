const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
//* gives all buttons

let string = "";
const arr = Array.from(buttons);
arr.forEach(button => {
  // used arrow function on button. Iterates through each button in the array
  // Checks which button was clicked based on its inner HTML content.
  // whenever a button is clicked it passes 'e'

  button.addEventListener('click', (e) => {
    // if the clicked button is = equal button, evaluates the current string using eval and updates the input value
    if(e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }

    // If 'AC' is clicked, clears the string and updates the input value.
    else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value = string;
    }

    // If 'DE' (assuming it's a delete or backspace button) is clicked, removes the last character from the string and updates the input value.
    else if(e.target.innerHTML == 'DE'){
      string = string.substring(0, string.length - 1);
      input.value = string;
    }

    // For other buttons, appends their content to the string and updates the input value.
    else{
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
