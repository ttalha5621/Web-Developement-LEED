const config = require('../../config');

class responseModel {
    // eslint-disable-next-line no-restricted-syntax
    constructor(type) {
        if (type === 'redis' && config.environment === 'development') {
            this.source = 'cache';
        } else {
            this.source = undefined;
        }
        this.setStatus('');
        this.setData('');
        this.setError('');
    }

    // eslint-disable-next-line no-restricted-syntax
    getStatus() {
        return this.status;
    }

    // eslint-disable-next-line no-restricted-syntax
    setStatus(status) {
        this.status = status;
    }

    // eslint-disable-next-line no-restricted-syntax
    getData() {
        return this.data;
    }

    // eslint-disable-next-line no-restricted-syntax
    setData(data) {
        this.data = data;
    }

    // eslint-disable-next-line no-restricted-syntax
    getError() {
        return this.error;
    }

    // eslint-disable-next-line no-restricted-syntax
    setError(error) {
        this.error = error;
    }

    // eslint-disable-next-line no-restricted-syntax
    getSource() {
        return this.data;
    }

    // eslint-disable-next-line no-restricted-syntax
    setSource(data) {
        this.data = data;
    }
}

module.exports = responseModel;
