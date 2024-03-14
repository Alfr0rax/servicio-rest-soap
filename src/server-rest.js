const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const morgan= require('morgan')
app.set('port',process.env.PORT || 3000) ;
app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());

// Rutas
app.use(require('./routes/index'))
app.use('/api/calcular',require('./routes/calcular'))

app.listen(app.get('port'), () => {
    console.log(`Servidor de calculadora escuchando en http://localhost:${app.get('port')}`);
});
