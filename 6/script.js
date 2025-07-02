var h1Text = document.querySelector("h1").textContent;

var splitText = h1Text.split("");
console.log(splitText);

var clutter = "";

splitText.forEach(function () {
  clutter = clutter + "hey";
});
