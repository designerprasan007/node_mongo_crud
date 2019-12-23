const mongoose = require("mongoose");




mongoose.connect('mongodb://localhost:27017/Node_crud',{useNewUrlParser: true},(err) => {
	if(!err) {
		console.log("mongo connected"); 
		}
	else{
		consol.log("error in mongo" + err);
		}	
});

require('./crud');
