const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const CRUD = mongoose.model('cruds');

router.get('/', (req, res)=>{
	res.render("crud/addOrEdit", {
		viewTitle : "insert data "
});
});

router.post('/', (req, res)=>{
       insertData(req, res);
});
 
function insertData(req,res){
	var crud = new  CRUD();
	crud.name = req.body.name;
	crud.email = req.body.email;
	crud.mobile = req.body.mobile;
	crud.city = req.body.city;
	crud.save((err, doc)=>{
	  if(!err){
		   res.redirect('/crud_operation/list')
		}
	else{
		if(err.name == 'ValidationError'){
			handleValidate(err, req.body);
			  res.render("crud/addOrEdit", {
               	   	  viewTitle : "insert data ",
			  crud : req.body,
			});

		}
		else{
		console.log('error in storing' + err);
		}
	}
});
}

router.get('/list', (req, res) => {
		res.json('from list');
		cruds.find((err, docs)=>{
		if(!err){
		res.render('crud/list', {
			list:docs
		});
		}
		else{
			console.log('error inlisting' + err);
		}
		});
});

function handleValidate(err, body){
	for(field in err.errors)
	  {
	   switch(err.errors[field].path) {
		case 'name':
			body['nameerror'] =err.errors[field].message;
	
		break;
		case 'email':
			body['emailerror'] = err.errors[filed].message;
		break;
		default:
			break;


		 }
	}
}

module.exports = router;

