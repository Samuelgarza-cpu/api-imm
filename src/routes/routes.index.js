const {Router} = require('express');
const routes = Router();
const {getUsuarios,findRequisiciones,insertModulo1,getModulo1,deleteModulo1,UpdateModulo1,getModulo1ID} = require('../controllers/requisiciones.controller')


routes.get('/usuarios', getUsuarios )
routes.get('/modulo1', getModulo1 )
routes.get('/modulo1/:id', getModulo1ID )
routes.delete('/modulo1/:id', deleteModulo1 )
routes.patch('/modulo1/:id', UpdateModulo1)
routes.post('/guardarM1',insertModulo1)
routes.get('/requisiciones/:id',findRequisiciones)


module.exports = routes;