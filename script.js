"use strict"

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = () => {
  result.innerText = "";
  const originalText = textInput.value;
  let resultText = originalText;
  if(!originalText){
    alert("Please input a value");
    return;
  } else {
    let arrayText = originalText.toLowerCase().replace(/[^A-Za-z\d]/g,'');
    let arrayReverse = arrayText.split('').reverse().join('');
    if(arrayText === arrayReverse){
      resultText += " is a palindrome";
    } else {
      resultText += " is not a palindrome";
    }
    result.innerText = resultText;
    result.style.display = "block";
    return;
  }
}

checkButton.addEventListener("click", isPalindrome);
