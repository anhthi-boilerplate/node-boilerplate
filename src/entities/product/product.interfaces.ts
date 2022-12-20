import { ProductFields } from "./product.constants";

export interface IProduct {
  [ProductFields.ID]: string;
  [ProductFields.NAME]: string;
}

export interface IProductAddRequestPayload {
  [ProductFields.NAME]: string;
}

export interface IProductAddRequest {
  payload: IProductAddRequestPayload;
}
