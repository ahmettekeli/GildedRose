import { actionTypesEnum } from "./ActionTypes";
import { Item } from "./Logic/Item";

export type ProductContextType = {
  products: Item[];
};
export type ContextActionType = {
  type: actionTypesEnum;
  payload: Item | Item[];
};

export enum itemEnum {
  NORMAL = "normal",
  AGED_BRIE = "aged brie",
  BACKSTAGE_PASS = "backstage pass",
  CONJURED = "conjured",
  SULFURAS = "sulfuras",
}
