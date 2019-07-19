module.exports = function (e){
    switch(e) {
    case "Home":
      var home = require('./items/home.js');
      return home();
    case "Menu":
      var menu = require('./items/menu.js');
      return menu();
    case "About":
    	var about = require('./items/about.js');
      return about();
    case "Contact":
      var contact = require('./items/contact.js');	
      return contact();
  }
}