import { useReducer, createContext, ReactNode, Dispatch } from "react";
import Reducer from "./Reducer";
import { ProductContextType } from "../type";

const initialState: ProductContextType = {
  products: [],
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
