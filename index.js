require('./js/db');

const express = require('express');

const crudController = require('./controllers/crudcontroller');

const path = require('path');

const exhndls = require('express-handlebars');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());


app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', exhndls({ extname: 'hbs', defaultLayout: 'mainLayout',  layoutsDir: __dirname + '/views/layouts/'  }));

app.set('view engine', 'hbs');

app.listen(3003,() =>{
	console.log('express server is started in http://178.128.5.79:3003');
});


app.use('/crud_operation', crudController);

