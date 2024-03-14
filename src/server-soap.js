const express = require('express');
const soap = require('soap');
const fs = require('fs');

const app = express();
const morgan= require('morgan')
app.set('port',process.env.PORT || 3000) ;


//middlewares
app.use(morgan('dev'))

const calcularService = {
    CalcularService: {
        CalcularPort: {
            sumar: function(args, callback) {
                const resultado = args.num1 + args.num2;
                callback(null, { resultado });
            },
            restar: function(args, callback) {
                const resultado = args.num1 - args.num2;
                callback(null, { resultado });
            },
            multiplicar: function(args, callback) {
                const resultado = args.num1 * args.num2;
                callback(null, { resultado });
            },
            dividir: function(args, callback) {
                const resultado = args.num1 / args.num2;
                callback(null, { resultado });
            }
        }
    }
};

app.get('/calcular', (req, res) => {
    const wsdlPath = __dirname + '/calcular.wsdl';
    const wsdl = fs.readFileSync(wsdlPath, 'utf8');
    res.set('Content-Type', 'text/xml');
    res.send(wsdl);
});



const wsdlPath = './calcular.wsdl';
soap.listen(app, '/calcular', calcularService, wsdlPath);



app.listen(app.get('port'), () => {
    console.log(`Servidor de calculadora escuchando en http://localhost:${app.get('port')}/calcular?wsdl`);
});
