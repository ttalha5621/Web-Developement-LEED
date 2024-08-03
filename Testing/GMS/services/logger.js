/* eslint-disable class-methods-use-this */
const fs = require('fs');
const path = require('path');
const pino = require('pino');
const pinoHttp = require('pino-http');
const prettifier = require('pino-pretty');
const morgan = require('morgan');
const makeDir = require('make-dir');
const config = require('../config');

// const DEV_MODE = config.isDevMode();
const logPath = path.resolve(config.logPath);

try {
    fs.statSync(logPath);
} catch (e) {
    makeDir.sync(logPath);
}

const prettyOptions = {
    prettyPrint: {
        levelFirst: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
    },
    prettifier,
};

class Logger {
    /**
     *
     * @param {object=} options - Logger options
     * @param {object=} pinoOptions - options for pino
     */
    // eslint-disable-next-line no-restricted-syntax
    constructor(options = {}, pinoOptions = {}) {
        this.options = { ...options };
        this.pinoOptions = {
            name: 'LMS',
            ...pinoOptions,
        };

        // eslint-disable-next-line no-underscore-dangle
        this._logger = this.createLogger(null, this.options.destination);
        // eslint-disable-next-line no-underscore-dangle
        this._consoleLogger = this.createConsoleLogger();
    }

    /**
     * Common log method to both console and file
     * @param {string=} type - log type, default: "info"
     * @param rest
     */
    // eslint-disable-next-line no-restricted-syntax
    log(type = 'info', ...rest) {
        // eslint-disable-next-line no-underscore-dangle
        this._consoleLogger[type](...rest);
        // eslint-disable-next-line no-underscore-dangle
        this._logger[type](...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    trace(...rest) {
        this.log('trace', ...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    debug(...rest) {
        this.log('debug', ...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    info(...rest) {
        this.log('info', ...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    warn(...rest) {
        this.log('warn', ...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    fatal(...rest) {
        this.log('fatal', ...rest);
    }

    // eslint-disable-next-line no-restricted-syntax
    error(...rest) {
        this.log('error', ...rest);
    }

    /**
     * Create a pino logger
     * @param {object=} options - pino options
     * @param {object=} destination - pino destination, e.g: to file
     */
    // eslint-disable-next-line no-restricted-syntax
    createLogger(options = {}, destination) {
        return pino(
            Object.assign(this.pinoOptions, options),
            destination || pino.destination(path.join(logPath, 'lms.log')),
        );
    }

    /**
     * Create a pino logger to console
     * @param {object=} options - pino options with prettifier enabled
     */

    // eslint-disable-next-line no-restricted-syntax
    createConsoleLogger(options) {
        return pino(Object.assign(prettyOptions, options));
    }

    /**
     * Create pino logger that log koa requests to file
     * @param {object=} options
     * @param {object=} destination
     * @return {function}
     */
    // eslint-disable-next-line no-restricted-syntax
    createRequestsLogger(options, destination) {
        return pinoHttp(
            {
                logger: this.createLogger(
                    options,
                    destination || pino.destination(path.join(logPath, 'requests.log')),
                ),
                serializers: {
                    err: pino.stdSerializers.err,
                    req: pino.stdSerializers.err,
                    res: pino.stdSerializers.res,
                },
                ...options,
            },
        );
    }

    /**
     * Create a morgan koa middleware for common log format
     * @static
     * @return {*}
     */
    // eslint-disable-next-line no-restricted-syntax
    static createMorganLogger() {
        return morgan('dev');
    }
}

exports.logger = new Logger();
exports.Logger = Logger;
