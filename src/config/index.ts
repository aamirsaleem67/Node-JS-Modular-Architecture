import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api',
  },
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER_NAME,
    name: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },
};
