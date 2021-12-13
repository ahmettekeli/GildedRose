import { actionTypes } from "./ActionTypes";
import { ProductContextType, ContextActionType } from "../type";

//TODO create reducer actions.
function Reducer(
  state: ProductContextType,
  action: ContextActionType
): ProductContextType {
  switch (action.type) {
    case actionTypes.UPDATE:
      return state;
    case actionTypes.DELETE:
      return state;
    case actionTypes.CREATE:
      return state;
    default:
      return state;
  }
}

export default Reducer;
