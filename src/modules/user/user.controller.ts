import Router from 'express';
import UserService from './user.service';

const route = Router();
import { Container } from 'typedi';
export default (app: Router) => {
  app.use('/users', route);

  route.get('/me', (req, res) => {
    const userService = Container.get(UserService);
    const user = userService.getUser();
    return res.json(user).status(200);
  });
};
