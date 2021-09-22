import { ADD_PRODUCT } from "./actions";
import { productType } from "../components/pages/Product";
import { actionType } from "./actions";

type stateType = {
  products: Array<productType>;
};

const initialState: stateType = {
  products: [],
};

export const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_PRODUCT:
      state.products.push(action.product);
      return {
        products: state.products,
      };
    default:
      return initialState;
  }
};
