const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

function validateRequest(req, next, schema) {
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Erro de validação: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

function validateQuery(req, next, schema) {
    const { error, value } = schema.validate(req.query, options);
    if (error) {
        next(`Erro de validação: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.query = value;
        next();
    }
}

module.exports = {
    validateRequest,
    validateQuery,
}