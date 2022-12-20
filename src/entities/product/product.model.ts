import { model, Schema } from "mongoose";

import { getSchemeOptions } from "../../utils/helpers";

import { ProductFields, MODEL_NAME } from "./product.constants";

const schema = new Schema(
  {
    [ProductFields.NAME]: {
      maxLength: 200,
      required: true,
      type: String,
    },
  },
  getSchemeOptions()
);

const ProductModel = model(MODEL_NAME, schema);

export default ProductModel;
