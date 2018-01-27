const Knex = require('knex');

module.exports = (config) => {
  const knex = Knex({
    client: config.client,
    port: config.connection.port,
    connection: {
      host: config.connection.host,
      database : config.connection.database
    }
  });

  return {
    student: require('./users')(knex)
  };
}