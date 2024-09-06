const express = require('express')
const UserController = require('./controllers/UserControllers')
const AddressController = require('./controllers/AddressController')
const TachController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/address', AddressController.index)
routes.post('/users/:user_id/address', AddressController.store)

routes.get('/users/:user_id/techs', TachController.index)
routes.post('/users/:user_id/techs', TachController.store)
routes.delete('/users/:user_id/techs', TachController.delete)

routes.get('/report', ReportController.show)

module.exports = routes