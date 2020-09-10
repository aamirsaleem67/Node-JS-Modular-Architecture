import { Router } from 'express';
import UserController from '../modules/user/user.controller';
const CONTROLLERS = [UserController];

// the purpose of this file is to register all the controllers and provide each controller dependency

function injectDependenciesToControllers(app) {
  CONTROLLERS.forEach(controller => {
    controller(app);
  });
}

export default () => {
  const app = Router();
  injectDependenciesToControllers(app);
  return app;
};
