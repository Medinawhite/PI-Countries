//Este va a ser nuestro control de errores

function errorhandler (err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
};
module.exports = errorhandler;