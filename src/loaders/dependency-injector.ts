import { Container } from 'typedi';
import LoggerInstance from './logger';
import { Connection } from 'typeorm';
import entitiesProviders from './entities-providers';

export default (connection: Connection) => {
  entitiesProviders.forEach(entityProvider => {
    Container.set(entityProvider.provide, entityProvider.useFactory(connection));
  });
  Container.set('logger', LoggerInstance);
};
