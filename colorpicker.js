// //user functionality 
// //click on the icon for the extension __X__
// //shows a popup __X__
// //there's a button that says "pick color" -> invoke the function (?) utilizing eventlistener
// //user will hover certain elements
// //stretch - magnifying glass that magnifies the color 
// //when user clicks on an element, return the RGB color of whatever the user clicked on
// //display the RGB color within the actual extension


document.addEventListener('DOMContentLoaded', () => {
  //on button click, call EyeDropper API and display color in pickedColor div
  document.querySelector('button').addEventListener('click', () => {
    const pickedColor = document.querySelector('#result');
    const eyeDropper = new EyeDropper();
    eyeDropper.open()
      .then((result) => {
        pickedColor.innerHTML = result.sRGBHex;
        pickedColor.style.backgroundColor = result.sRGBHex;
      })
    eyeDropper.catch((e) => {
      pickedColor.innerHTML = e;
    })
  })
})
