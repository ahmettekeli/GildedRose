export enum itemEnum {
  NORMAL = "normal",
  AGED_BRIE = "aged brie",
  BACKSTAGE_PASS = "backstage pass",
  CONJURED = "conjured",
  SULFURAS = "sulfuras",
}

export class Item {
  name: string;
  sellIn: number;
  quality: number;
  itemType: itemEnum;

  constructor(
    name: string,
    sellIn: number,
    quality: number,
    itemType: itemEnum
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.itemType = itemType;
  }
}
