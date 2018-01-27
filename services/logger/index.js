const moment = require('moment');

module.exports = (config) => {
  const format = config.format;
  return {
    log: (message) => {
      const time = [moment().format(format) + ':: '];
      console.log.apply(null, time.concat(message));
    },
  };
};