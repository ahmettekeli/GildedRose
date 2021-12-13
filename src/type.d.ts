import { UPDATE_SELLIN, UPDATE_QUALITY } from "./ActionTypes";

//TODO

export type ProductType = {
  id: number;
  name: string;
  img: string;
  sellInDate: string;
  quality: number;
};
export type ProductContextType = {
  products: ProductType[];
};
export type ContextActionType = {
  type: UPDATE_SELLIN | UPDATE_QUALITY;
  payload: ProductContextType;
};
