const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json' });
        //res.write('hola mundo');

        let salida = {
            nombre: 'yoes',
            edad: '25',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);


console.log('escuchando el puerto 8080');