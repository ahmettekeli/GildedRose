import { actionTypesEnum } from "./ActionTypes";
import { ProductContextType, ContextActionType } from "../type";
import { GildedRose } from "../Logic/gilded-rose-refactored";

//TODO create reducer actions.
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
        ...state,
        products: updatedProducts as typeof state.products,
      };
    case actionTypesEnum.DELETE:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        products: filteredProducts,
      };
    case actionTypesEnum.CREATE:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actionTypesEnum.PASS_DAY:
      // return {
      //   products: GildedRose.passDayForAll(state.products),
      // };
      return state;
    default:
      return state;
  }
}

export default Reducer;
