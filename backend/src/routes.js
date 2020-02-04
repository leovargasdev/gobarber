import {Router} from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({a: "teste perdi"});
});


export default routes;