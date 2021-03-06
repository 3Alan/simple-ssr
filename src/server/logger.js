const path = require('path');

const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'winston.log',
      dirname: path.resolve(__dirname, './log')
    })
  ]
});

module.exports = {
  logger
};
