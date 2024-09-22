function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNum = parseFloat(inputValue);

  return inputValueNum;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNum = parseFloat(textValue);

  return textValueNum;
}