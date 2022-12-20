import hapi from "@hapi/hapi";

import { HttpMethod, HttpStatusCode } from "../../common/enums";

import { IProductAddRequest } from "./product.interfaces";
import ProductModel from "./product.model";
import * as productServices from "./product.services";
import { productAddValidator } from "./product.validators";

const getAllProducts: hapi.ServerRoute = {
  method: HttpMethod.GET,
  path: "/api/products",
  options: {
    description: "Get all products",
    tags: ["api"],
    handler: async (
      hapiRequest: hapi.Request,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const products = await productServices.getAllProducts();
      return hapiResponse.response(products).code(HttpStatusCode.OK);
    },
  },
};

const addProduct: hapi.ServerRoute = {
  method: HttpMethod.POST,
  path: "/api/product",
  options: {
    description: "Add a new product",
    tags: ["api"],
    validate: {
      payload: productAddValidator,
    },
    handler: async (
      hapiRequest: IProductAddRequest,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const createdProduct = await ProductModel.create(hapiRequest.payload);
      return hapiResponse
        .response(createdProduct.toObject())
        .code(HttpStatusCode.CREATED);
    },
  },
};

const ProductController: hapi.ServerRoute[] = [getAllProducts, addProduct];

export default ProductController;
