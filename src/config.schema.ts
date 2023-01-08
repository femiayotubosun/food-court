import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  STAGE: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
