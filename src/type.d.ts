import { UPDATE_SELLIN, UPDATE_QUALITY } from "./ActionTypes";

export type ProductType = {
  id: number;
  name: string;
  img: string;
  sellInDate: number;
  quality: number;
  itemType: string;
};
export type ProductContextType = {
  products: ProductType[];
};
export type ContextActionType = {
  type: UPDATE_SELLIN | UPDATE_QUALITY;
  payload: ProductContextType;
};

export enum itemEnum {
  NORMAL = "normal",
  AGED_BRIE = "aged brie",
  BACKSTAGE_PASS = "backstage pass",
  CONJURED = "conjured",
  SULFURAS = "sulfuras",
}
