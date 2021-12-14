export enum itemEnum {
  NORMAL = "normal",
  AGED_BRIE = "aged brie",
  BACKSTAGE_PASS = "backstage pass",
  CONJURED = "conjured",
  SULFURAS = "sulfuras",
}

export class Item {
  id: number;
  name: string;
  sellIn: number;
  quality: number;
  img: string;
  itemType: itemEnum;

  constructor(
    id: number,
    name: string,
    sellIn: number,
    quality: number,
    img: string,
    itemType: itemEnum
  ) {
    this.id = id;
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.img = img;
    this.itemType = itemType;
  }
}
