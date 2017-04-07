//BLANK EXPRESS ROUTE MODULE
console.log("loading routes.js...");

var blankSScontroller = require("../controllers/blankSSController.js");
var userSSController = require("../controllers/userSSController.js")

module.exports = function(app){
	app.post("/register_user", userSSController.register);
	app.post("/login_user", userSSController.login);
}