import { useReducer, createContext, ReactNode, Dispatch } from "react";
import Reducer from "./Reducer";
import { ProductContextType } from "../type";
import productData from "../products.dummy.json";

const initialState: ProductContextType = {
  products: productData,
};

export const Context = createContext<{
  state: ProductContextType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default StoreProvider;
