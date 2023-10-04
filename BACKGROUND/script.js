const generateButton = document.getElementById('generate-button');
const background = document.getElementById('background');
const colorCode = document.getElementById('color-code');

generateButton.addEventListener('click', function() {
  // Get the color from the color picker.
  const color = document.getElementById('color-picker').value;

  // Set the background color of the background element.
  background.style.backgroundColor = color;

  // Display the color code.
  colorCode.innerHTML = color;
});
