import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleControler from './app/controllers/ScheduleControler';
import NotificationControler from './app/controllers/NotificationControler';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Tudo o que vier depois desse middle deve existir um token de autenticação
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleControler.index);

routes.get('/notifications', NotificationControler.index);
routes.put('/notifications/:id', NotificationControler.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
