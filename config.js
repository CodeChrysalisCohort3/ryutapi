module.exports = {
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'ryutapi',
    },
    port: 3000,
  },
  express: {
    port: 4000,
  },
  logger: {
    format: 'dddd MMMM Do YYYY, h:mm:ss a',
  },
}