import { productType } from "../components/pages/Product";

export const ADD_PRODUCT = "ADD_PRODUCT";

export type actionType = {
  type: string;
  product: productType;
};

export const addProduct = (product: productType) => {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
};
