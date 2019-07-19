
var renderPage = require('./render.js');

module.exports = function (id,item){
  const content = document.getElementById('content');
  const newDiv = document.createElement("ul");
  newDiv.id = id;
  newDiv.style.width = "500px";
  newDiv.style.height= "auto";
  newDiv.style.listStyle = "none";
  newDiv.style.margin = "20px auto";
  newDiv.style.display = "flex";
  content.appendChild(newDiv);
 
  item.forEach(function(element) {
  	var elem = document.createElement("li");
	elem.style.marginRight = "10px" ;
  	elem.style.color =  "#fff" ;
  	//elem.style.background  =  "#c00";	
  	var link = document.createElement("a");
  	link.innerHTML = element;
  	link.setAttribute("href", "#"+element);
  	link.classList.add("link");
  	link.addEventListener('click', () => renderPage(element));
  	elem.appendChild(link);
	newDiv.appendChild(elem);
  });


    const page = document.createElement("div");
    
    page.id = "itemDiv";
    content.appendChild(page);
    renderPage('Home')
}