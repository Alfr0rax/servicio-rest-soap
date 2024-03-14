const {Router} = require('express')
const router = Router()
const soap = require('soap');
const fs = require('fs');


const calculatorService = {
    CalculatorService: {
        CalculatorPort: {
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











module.exports = router