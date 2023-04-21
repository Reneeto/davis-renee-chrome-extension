// //user functionality 
// //click on the icon for the extension __X__
// //shows a popup __X__
// //there's a button that says "pick color" -> invoke the function (?) utilizing eventlistener
// //user will hover certain elements
// //stretch - magnifying glass that magnifies the color 
// //when user clicks on an element, return the RGB color of whatever the user clicked on
// //display the RGB color within the actual extension


document.addEventListener('DOMContentLoaded', () => {
  class Color {
    constructor () {
      this.innerContainer = document.createElement('div');
      this.outerContainer = document.createElement('div');
    }
  }
  //on button click, call EyeDropper API and display color in pickedColor div
  document.querySelector('button').addEventListener('click', () => {
    //create new instance of Color class
    const pickedColor = new Color;
    //assign class names to inner and outer containers
    pickedColor.innerContainer.className = 'inner-container';
    pickedColor.outerContainer.className = 'outer-container';
    //get results-container div and store under resultsContainer label
    const resultsContainer = document.getElementById('results-container');
    //append to document
    pickedColor.outerContainer.appendChild(pickedColor.innerContainer);
    resultsContainer.appendChild(pickedColor.outerContainer);
    document.body.appendChild(resultsContainer);

    const eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((result) => {
        pickedColor.outerContainer.innerHTML = result.sRGBHex;
        pickedColor.innerContainer.style.backgroundColor = result.sRGBHex;
      })
      .catch((e) => {
        alert(e);
      })
  })
})
