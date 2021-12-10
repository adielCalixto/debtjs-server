const Joi = require("joi")
const { validateRequest, validateQuery } = require("../../utils/schema")

const findPersonSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().empty(''),
        cpf: Joi.number().empty(''),
        email: Joi.string().email().empty(''),
        limit: Joi.number().max(100).default(10),
        offset: Joi.number().default(0),
        orderby: Joi.string().valid('DESC', 'ASC').default('DESC'),
        groupby: Joi.string().valid('nome', 'created_at').empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateQuery(req, next, schema)
}

const createPersonSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().max(100).required(),
        email: Joi.string().email().empty(''),
        cpf: Joi.string().pattern(/[0-9]{11}/).required(),
        telefone: Joi.string().pattern(/[0-9]{9,11}/).empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

const updatePersonSchema = function(req, res, next) {
    const schemaRules = {
        nome: Joi.string().max(100).empty(''),
        email: Joi.string().email().empty(''),
        cpf: Joi.string().pattern(/[0-9]{11}/).empty(''),
        telefone: Joi.string().pattern(/[0-9]{9,11}/).empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

module.exports = {
    createPersonSchema,
    updatePersonSchema,
    findPersonSchema,
}