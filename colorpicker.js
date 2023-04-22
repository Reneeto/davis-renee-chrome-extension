// //user functionality 
// //click on the icon for the extension __X__
// //shows a popup __X__
// //there's a button that says "pick color" -> invoke the function (?) utilizing eventlistener__X__
// //user will hover certain elements__X__
// //stretch - magnifying glass that magnifies the color __X__
// //when user clicks on an element, return the RGB color of whatever the user clicked on__X__
// //display the RGB color within the actual extension__X__


document.addEventListener('DOMContentLoaded', () => {
  //on button click, create new instance of EyeDropper API
  document.querySelector('#button').addEventListener('click', () => {
    const eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((result) => {
        const resultsContainer = document.querySelector('#results-container');
        const innerContainer = document.createElement('div');
        const outerContainer = document.createElement('div');
        const outerContainerText = document.createElement('div');

        outerContainerText.innerHTML = result.sRGBHex;
        innerContainer.style.backgroundColor = result.sRGBHex;

        innerContainer.className = "inner-container";
        outerContainer.className = "outer-container";
        outerContainerText.className = "hex-code";

        resultsContainer.appendChild(outerContainer);
        outerContainer.appendChild(innerContainer);
        outerContainer.appendChild(outerContainerText);
      })
      .catch((e) => {
        alert(e);
      })
    //append to document

  })
});

document.querySelector('#refresh').addEventListener('click', () => {
  function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  removeElementsByClass("outer-container");

  // const outerDiv = document.querySelector(".outer-container");
  // const innerDiv = document.querySelector(".inner-container");
  // const hexDiv = document.querySelector(".hex-code");
  // outerDiv.classList.remove("outer-container");
  // innerDiv.classList.remove("inner-container");
  // hexDiv.classList.remove("hex-code");
})

function exportHTML(){
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
       "xmlns:w='urn:schemas-microsoft-com:office:word' "+
       "xmlns='http://www.w3.org/TR/REC-html40'>"+
       "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML = header+document.getElementById("results-container").innerHTML+footer;
  
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'document.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}
