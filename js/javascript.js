// lets see if this can work...


// borrowed random generating code
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

// borrowed text code
// https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom

const parks = ["Skiles Test",
                "Heritage",
                "Founders",
                "River Road",
                "School and Goats",
                "Sahm",
                "Hundred Acres",
                "Fall Creek Trail",
                "Central"];

function whichPark() {
  const random = Math.floor(Math.random() * parks.length);
  console.log(random, parks[random]);

  var paragraph = document.getElementById("p");

  // the extra space just to separate multiples until I find a better solution.
  var text = document.createTextNode(parks[random] + " ");

  paragraph.appendChild(text);


}

function refreshPage() {
  location.reload();
}
