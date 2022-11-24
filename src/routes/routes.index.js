const {Router} = require('express');
const routes = Router();
const {getUsuarios,findRequisiciones,insertModulo1,getModulo1,deleteModulo1} = require('../controllers/requisiciones.controller')


routes.get('/usuarios', getUsuarios )
routes.get('/modulo1', getModulo1 )
routes.delete('/modulo1/:id', deleteModulo1 )
routes.post('/guardarM1',insertModulo1)
routes.get('/requisiciones/:id',findRequisiciones)


module.exports = routes;