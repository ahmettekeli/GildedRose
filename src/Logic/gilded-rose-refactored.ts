import { Item, itemEnum } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  passDayForNormal(item: Item) {
    item.sellIn -= 1;
    if (item.quality == 0) {
      return;
    }
    item.quality -= 1;
    if (item.sellIn <= 0) {
      item.quality -= 1;
    }
  }

  passDayForAgedBrie(item: Item) {
    item.sellIn -= 1;
    if (item.quality >= 50) {
      return;
    }
    item.quality += 1;
    if (item.sellIn <= 0) {
      item.quality += 1;
    }
  }

  passDayForBackstagePass(item: Item) {
    item.sellIn -= 1;
    //in case its quality previously increased to 50
    if (item.quality >= 50) {
      return;
    }
    item.quality += 1;
    if (item.sellIn <= 0) {
      item.quality = 0;
      return;
    }
    if (item.sellIn <= 10) {
      item.quality += 1;
    }
    if (item.sellIn <= 5) {
      item.quality += 1;
    }
  }

  passDayForConjured(item: Item) {
    item.sellIn -= 1;
    if (item.quality == 0) {
      return;
    }
    item.quality -= 2;
    if (item.sellIn <= 0) {
      item.quality -= 2;
    }
  }

  passDayForSulfuras(item: Item) {
    item.sellIn -= 1;
    if (item.quality == 80) {
      return;
    }
    item.quality = 80;
  }

  passDayForAll() {
    this.items.forEach((item) => {
      switch (item.itemType) {
        case itemEnum.NORMAL:
          this.passDayForNormal(item);
          break;
        case itemEnum.AGED_BRIE:
          this.passDayForAgedBrie(item);
          break;
        case itemEnum.BACKSTAGE_PASS:
          this.passDayForBackstagePass(item);
          break;
        case itemEnum.CONJURED:
          this.passDayForConjured(item);
          break;
        case itemEnum.SULFURAS:
          this.passDayForSulfuras(item);
          break;
        default:
          break;
      }
    });
  }
}
