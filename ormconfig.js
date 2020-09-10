// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./src/config/index.ts').default;
const db = config.db;
module.exports = {
  type: db.type,
  host: db.host,
  port: db.port,
  username: db.username,
  password: db.password,
  database: db.name,
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
