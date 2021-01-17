require('dotenv/config')

const config = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts', 'dist/entities/**/*.js'],
};

module.exports = config;