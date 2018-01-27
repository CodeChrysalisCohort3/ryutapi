const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

module.exports = (config) => {
  let services = {};
  fs.readdirSync(__dirname).forEach(fileName => {
    if(fileName.indexOf('.') === -1) {
      const serviceName = fileName;
      services[fileName] = require(`${__dirname}/${fileName}`)(config[fileName]);
    }
  });
  console.log("#################",services.logger.log)
  return services;
};