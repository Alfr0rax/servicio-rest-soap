const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({"Title:": "HOLA SOY UNA CALCULADORA"})
    //console.log(`HOLA SOY UNA CALCULADORA`)
});


module.exports = router