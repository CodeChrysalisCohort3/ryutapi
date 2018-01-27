module.exports = {
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      database: 'ryutapi',
  },
  port: 5000,
  pool: {
      min: 2,
      max: 10
  },
  migrations: {
      tableName: 'knex_migrations'
  }
};