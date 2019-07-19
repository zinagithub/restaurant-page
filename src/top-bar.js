

module.exports = function (id,i){
  const content = document.getElementById('content');
  const newDiv = document.createElement("div");
  newDiv.id = id;
  newDiv.style.width = "100%";
  newDiv.style.height= "200px";
  newDiv.style.background = "blue";
  content.appendChild(newDiv);


var elem = document.createElement("img");
elem.setAttribute("src", i);
elem.setAttribute("height", "200px");
elem.setAttribute("width", "100%");
newDiv.appendChild(elem);
}