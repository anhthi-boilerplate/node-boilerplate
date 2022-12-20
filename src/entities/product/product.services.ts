import { IProduct } from "./product.interfaces";
import ProductModel from "./product.model";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await ProductModel.find();
  return products.map((product) => product.toObject());
};

export const getProductById = async (
  id: string
): Promise<IProduct | undefined> => {
  const product = await ProductModel.findById(id);
  return product?.toObject();
};
