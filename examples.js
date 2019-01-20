function buttonCreation() {
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Change Color");
  x.appendChild(t);
  x.onclick = function() {
    document.body.style.backgroundColor = getRandomColor();
  }
  document.body.appendChild(x);
}

function getRandomColor() {
  var color = '#';
  var letters = '0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
