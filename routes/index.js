const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.wendyRoute);
routes.get('/alex', lesson1Controller.alexRoute);
routes.get('/yuki', lesson1Controller.yukiRoute);
routes.get('/charity', lesson1Controller.charityRoute);
routes.get('/gracey', lesson1Controller.graceyRoute);
routes.get('/lincoln', lesson1Controller.lincolnRoute);

module.exports = routes;