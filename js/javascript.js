// lets see if this can work...


// borrowed random generating code
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

const parks = ["Skiles Test",
                "Heritage",
                "Founders",
                "River Road",
                "School and Goats",
                "Sahm",
                "Hundred Acres",
                "Fall Creek Trail",
                "Central"];

const random = Math.floor(Math.random() * parks.length);
console.log(random, parks[random]);



// borrowed text code
var paragraph = document.getElementById("p");
var text = document.createTextNode(parks[random]);
// https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom

function whichPark() {
  paragraph.appendChild(text);
}

function refreshPage() {
  location.reload();
}
