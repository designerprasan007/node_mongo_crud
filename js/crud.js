const mongoose = require('mongoose');


var crudSchema = new mongoose.Schema({
  name: {
		type: String,
		required: 'name must be filled',
	},
  email: {
                type: String
        },
  mobile: {
                type: String
        },
  address: {
                type: String
        },
});

//email validation

crudSchema.path('email').validate((val) =>{
	emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return emailRegexp.test(val)

}, 'Invalid email');


mongoose.model('cruds', crudSchema);
