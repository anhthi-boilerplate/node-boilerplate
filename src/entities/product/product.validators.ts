import Joi from "joi";

import { ProductFields } from "./product.constants";

export const productAddValidator = Joi.object({
  [ProductFields.NAME]: Joi.string().max(100).required().trim(),
});
