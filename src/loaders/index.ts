import expressLoader from './express';
import Logger from './logger';
import dependencyInjectorLoader from './dependency-injector';
import DbLoader from './db';
import { Connection } from 'typeorm';

export default async ({ expressApp }) => {
  const connection: Connection = await DbLoader();
  Logger.info('✌️ DB loaded and connected!');

  dependencyInjectorLoader(connection);
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
