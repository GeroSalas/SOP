var winston = require('winston');
var logger = new winston.Logger({
		transports : [
			new winston.transports.Console({
				colorize: true,
				level: 'debug'
			})
		]
	});

module.exports = logger;
