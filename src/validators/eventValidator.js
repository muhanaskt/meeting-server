const Joi = require("joi");

const eventValidationSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.string().required(),  
  startTime: Joi.string().required(),  
  endTime: Joi.string().required(),  
   email: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  project: Joi.string().required(),
});

module.exports = eventValidationSchema;
