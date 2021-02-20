const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//http logger
// app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
