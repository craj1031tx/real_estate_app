//USER BLANK MODEL

console.log("loading userModel.js...");

var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: [true,"A name is required"]},
	email: {type: String,
		required: [true,"an email is required..."],
		unique: [true, "Email is already in use!"],
		validate: {
          validator: function( value ) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
          },
          message: "Email is not in the proper format: example@example.com"
        }
	},
	password: {type:String,
		required: [true, "A password is reuiqred"],
		minlength: [8, "Your password is too short. The minimum length is 8 characters."],
		maxlength: [32, "Your password is too long. The maximum length is 32 characters."]
		},
	plaintext: {type: String}
},{timestamps: true});

UserSchema.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
UserSchema.pre("save", function(done){
	this.password = this.encrypt(this.password);
	done();
});

var User = mongoose.model("User", UserSchema);
