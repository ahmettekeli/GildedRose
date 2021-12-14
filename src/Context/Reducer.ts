import { actionTypesEnum } from "./ActionTypes";
import { GildedRose } from "../Logic/gilded-rose-refactored";
import { ProductContextType, ContextActionType } from "../type";

function Reducer(
  state: ProductContextType,
  action: ContextActionType
): ProductContextType {
  switch (action.type) {
    case actionTypesEnum.UPDATE:
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      return {
        products: updatedProducts as typeof state.products,
      };
    case actionTypesEnum.DELETE:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        products: filteredProducts,
      };
    case actionTypesEnum.CREATE:
      return {
        products: [...state.products, action.payload],
      };
    case actionTypesEnum.PASS_DAY:
      return {
        products: GildedRose.passDayForAll(state.products),
      };
    default:
      return state;
  }
}

export default Reducer;
