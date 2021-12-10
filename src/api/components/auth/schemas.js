const Joi = require("joi")
const { validateRequest } = require("../../utils/schema")

const authUserSchema = function(req, res, next) {
    const schemaRules = {
        email: Joi.string().email().empty(''),
        password: Joi.string().min(5).empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

module.exports = {
    authUserSchema,
}