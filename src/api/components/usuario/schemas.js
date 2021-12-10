const Joi = require("joi")
const { validateRequest, validateQuery } = require("../../utils/schema")

const findUserSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().empty(''),
        email: Joi.string().email().empty(''),
        limit: Joi.number().max(100).default(10).empty(''),
        offset: Joi.number().default(0).empty(''),
        orderby: Joi.string().valid('DESC', 'ASC').default('DESC').empty(''),
        groupby: Joi.string().valid('nome', 'created_at').empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateQuery(req, next, schema)
}

const createUserSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().valid('admin', 'gestor', 'usuario').default('usuario'),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

const updateUserSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().max(100).empty(''),
        email: Joi.string().email().empty(''),
        password: Joi.string().min(8).empty(''),
        role: Joi.string().valid('gestor', 'usuario').empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

module.exports = {
    createUserSchema,
    updateUserSchema,
    findUserSchema,
}