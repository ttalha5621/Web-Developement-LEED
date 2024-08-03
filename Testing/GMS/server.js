const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const config = require('./config');
const specs = require('./swagger');

const { logger, Logger } = require('./services/logger');

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({
    extended: false,
}));

// app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.set('trust proxy', true);

// Logging
app.use(logger.createRequestsLogger());
app.use(Logger.createMorganLogger());

app.use('/users', require('./api/routes/user.routes'));
app.use('/customers', require('./api/routes/customer.routes'));
app.use('/signIn', require('./api/routes/signIn.routes'));
app.use('/registration', require('./api/routes/registration.routes'));
app.use('/rate', require('./api/routes/rate.routes'));
app.use('/quality', require('./api/routes/quality.routes'));
app.use('/token', require('./api/routes/token.routes'));
app.use('/items', require('./api/routes/item.routes'));
app.use('/tags', require('./api/routes/tags.routes'));
app.use('/stones', require('./api/routes/stone.routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs.default));

app.get('/', (req, res) => {
    const help = `
    <pre>
      Welcome to the API!
      Use an x-access-token header to work with your own data:
      fetch(url, { headers: { 'x-access-token': 'whatever-you-want' }})
      The following endpoints are available:
    </pre>
  `;

    res.send(help);
});

app.listen(config.port).on('listening', () => {
    console.log(`API is live on ${config.port}`);
});

const db = require('./api/sequelize');
// Test database connection.
try {
    db.authenticate().then(() => {
        logger.info('Connection has been established successfully.');
    }).catch((err) => { logger.error('Error: ', err); });
} catch (err) {
    logger.error('Unable to connect to the database:');
}
