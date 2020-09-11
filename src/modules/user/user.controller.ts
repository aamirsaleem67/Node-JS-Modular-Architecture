import express from 'express';
import { Router } from 'express-serve-static-core';
import UserService from './user.service';

const route = express();
import { Container } from 'typedi';
export default (app: Router) => {
  app.use('/users', route);

  route.get('/:id', async (req, res) => {
    const userService = Container.get(UserService);
    const user = await userService.getUser(req.params.id);
    return res.json(user).status(200);
  });

  route.get('/', async (req, res) => {
    const userService = Container.get(UserService);
    const user = await userService.getUsers();
    return res.json(user).status(200);
  });
};
