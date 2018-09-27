var express = require('express');
var app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    //let salida = {
    //    nombre: 'yoes',
    //    edad: '25',
    //    url: req.url
    //}
    res.render('home', {
        nombre: 'yoes  monterroza'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});


//app.get('/', (req, res) => {
//let salida = {
//    nombre: 'yoes',
//    edad: '25',
//    url: req.url
//}
//res.send(salida);
//});


app.get('/data', (req, res) => {
    res.send('hola data');
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});