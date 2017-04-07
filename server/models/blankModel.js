//BLANK MONGO MODEL

console.log("loading blankModel.js...");

var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var BlankSchema = new mongoose.Schema({
	name: String
});

var Blank = mongoose.model("Blank", BlankSchema);