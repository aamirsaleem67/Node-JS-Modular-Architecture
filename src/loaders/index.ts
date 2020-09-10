import expressLoader from './express';
import Logger from './logger';
import dependencyInjectorLoader from './dependency-injector';
import DbLoader from './db';

export default async ({ expressApp }) => {
  await DbLoader();
  Logger.info('✌️ DB loaded and connected!');

  dependencyInjectorLoader();
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
