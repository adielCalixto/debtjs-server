const Joi = require("joi")
const { validateRequest, validateQuery } = require("../../utils/schema")

const findDebtSchema = function(req, res, next) {
    const schemaRules = {
        valor: Joi.number().empty(''),
        status: Joi.string().valid('valida', 'pendente', 'zerada').default('valida'),
        limit: Joi.number().max(100).default(10),
        offset: Joi.number().default(0),
        orderby: Joi.string().valid('DESC', 'ASC').default('DESC'),
        groupby: Joi.string().valid('status', 'created_at', 'valor').empty(''),
        data: Joi.date().empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateQuery(req, next, schema)
}

const createDebtSchema = function(req, res, next) {
    const schemaRules = {
        valor: Joi.number().required(),
        pessoa_id: Joi.number().required(),
        status: Joi.string().valid('valida', 'pendente', 'zerada').empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

const updateDebtSchema = function(req, res, next) {
    const schemaRules = {
        valor: Joi.number().empty(''),
        status: Joi.string().valid('valida', 'pendente', 'zerada').empty(''),
    };

    const schema = Joi.object(schemaRules)
    validateRequest(req, next, schema)
}

module.exports = {
    createDebtSchema,
    updateDebtSchema,
    findDebtSchema,
}