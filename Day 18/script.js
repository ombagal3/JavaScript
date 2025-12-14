const input = document .getElementById('input');
const button = document .getElementById('btn');
const p1 = document .getElementById('p1');
const output = document .getElementsByClassName('output');

button.addEventListener("click", () => {


     
     const value = input.value;


     
    p1.textContent = value;
    // output .textContent = `Output: ${text .toUpperCase()}`;

});

