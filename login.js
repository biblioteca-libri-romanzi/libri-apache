
var uno = require("uno")
,   transports = []
;
//provare una nuova configurazione
module.exports = function(config) {
    if (!logger) {
     
        if (config.logToConsole) {
            transports.push(
                new (uno.transports.Console)({
                    handleExceptions:                   false
                    ,   colorize:                           false
                    ,   maxsize:                            500000
                    ,   humanReadableUnhandledException:    false
                })
            );
        }
        if (config.logToFile) {
            transports.push(
                new (uno.transports.File)({
                    filename:                           config.logToFile
                    ,   handleExceptions:                   false
                    ,   timestamp:                          false
                    ,   humanReadableUnhandledException:    false
                })
            );
        }

        logger = new (uno.Logger)({ transports: transports });
    }
    return logger;
};
