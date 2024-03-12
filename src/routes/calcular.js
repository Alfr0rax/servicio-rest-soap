const {Router} = require('express')
const router = Router()



router.get('/',(req, res) =>{
    res.send('Calculadora')
})
router.get('/sumar',(req, res) =>{
    res.send('Entramos a sumar')
})
router.get('/restar',(req, res) =>{
    res.send('vamos a restar')
})
router.get('/multiplicar',(req, res) =>{
    res.send('hora de multiplicar')
})
router.get('/dividir',(req, res) =>{
    res.send('Hay que dividir')
})





router.post('/sumar', (req, res) => {
    const { numeros } = req.body;
    const resultado = numeros.reduce((acc, num) => acc + num, 0);
    res.json({ resultado });
});

router.post('/restar', (req, res) => {
    const { numeros } = req.body;
    const resultado = numeros.reduce((acc, num, index) => index === 0 ? num : acc - num, 0);
    res.json({ resultado });
});

router.post('/multiplicar', (req, res) => {
    const { numeros } = req.body;
    const resultado = numeros.reduce((acc, num) => acc * num, 1);
    res.json({ resultado });
});

router.post('/dividir', (req, res) => {
    const { numeros } = req.body;
    const resultado = numeros.reduce((acc, num, index) => index === 0 ? num : acc / num, 0);
    res.json({ resultado });
});

module.exports = router