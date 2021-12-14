import { GildedRose } from "./gilded-rose-refactored";
import { Item, itemEnum } from "./Item";

describe("Gilded Rose - item quality changes on sell in date change", () => {
  const imgUrl =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  // Normal items
  it("normal item sell date reduction by 1 on the item that has a positive sell in date", () => {
    const quality = 4;
    const sellIn = 5;
    const item = new Item(
      1,
      "normal_item",
      sellIn,
      quality,
      imgUrl,
      itemEnum.NORMAL
    );
    const gildedRose = new GildedRose([item]);
    // gildedRose.passDayForNormal(item);
    GildedRose.passDayForNormal(item);
    expect(item.quality).toBe(quality - 1);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("normal item sell date reduction by 1 on the item that has sellin date of 0", () => {
    const quality = 4;
    const sellIn = 0;
    const item = new Item(
      1,
      "normal_item",
      sellIn,
      quality,
      imgUrl,
      itemEnum.NORMAL
    );
    const gildedRose = new GildedRose([item]);
    // gildedRose.passDayForNormal(item);
    GildedRose.passDayForNormal(item);
    expect(item.quality).toBe(quality - 2);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("normal item sell date reduction by 1 on the item that has quality of 0", () => {
    const quality = 0;
    const sellIn = 3;
    const item = new Item(
      1,
      "normal_item",
      sellIn,
      quality,
      imgUrl,
      itemEnum.NORMAL
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForNormal(item);
    expect(item.quality).toBe(quality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  //Aged Brie
  it("Aged Brie sell date reduction by 1 on the item that has a positive sell in date", () => {
    const quality = 4;
    const sellIn = 5;
    const item = new Item(
      1,
      "Aged_Brie",
      sellIn,
      quality,
      imgUrl,
      itemEnum.AGED_BRIE
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForAgedBrie(item);
    expect(item.quality).toBe(quality + 1);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Aged Brie sell date reduction by 1 on the item that has sellin date of 0", () => {
    const quality = 4;
    const sellIn = 0;
    const item = new Item(
      1,
      "Aged_Brie",
      sellIn,
      quality,
      imgUrl,
      itemEnum.AGED_BRIE
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForAgedBrie(item);
    expect(item.quality).toBe(quality + 2);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Aged Brie sell date reduction by 1 on the item that has quality of 50", () => {
    const quality = 50;
    const sellIn = 2;
    const item = new Item(
      1,
      "Aged_Brie",
      sellIn,
      quality,
      imgUrl,
      itemEnum.AGED_BRIE
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForAgedBrie(item);
    expect(item.quality).toBe(quality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  //Backstage Pass
  it("Backstage Pass sell date reduction by 1 on the item that has a positive sell in date", () => {
    const quality = 4;
    const sellIn = 15;
    const item = new Item(
      1,
      "Backstage_Pass",
      sellIn,
      quality,
      imgUrl,
      itemEnum.BACKSTAGE_PASS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForBackstagePass(item);
    expect(item.quality).toBe(quality + 1);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Backstage Pass sell date reduction by 1 on the item that has a sell in date of 10", () => {
    const quality = 4;
    const sellIn = 10;
    const item = new Item(
      1,
      "Backstage_Pass",
      sellIn,
      quality,
      imgUrl,
      itemEnum.BACKSTAGE_PASS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForBackstagePass(item);
    expect(item.quality).toBe(quality + 2);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Backstage Pass sell date reduction by 1 on the item that has a sell in date of 5", () => {
    const quality = 4;
    const sellIn = 5;
    const item = new Item(
      1,
      "Backstage_Pass",
      sellIn,
      quality,
      imgUrl,
      itemEnum.BACKSTAGE_PASS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForBackstagePass(item);
    expect(item.quality).toBe(quality + 3);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Backstage Pass sell date reduction by 1 on the item that has quality of 50", () => {
    const quality = 4;
    const sellIn = 5;
    const item = new Item(
      1,
      "Backstage_Pass",
      sellIn,
      quality,
      imgUrl,
      itemEnum.BACKSTAGE_PASS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForBackstagePass(item);
    expect(item.quality).toBe(quality + 3);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  //Sulfuras
  it("Sulfuras sell date reduction by 1 on the item that has a false quality of 4", () => {
    const sulfurasQuality = 80;
    const quality = 4;
    const sellIn = 15;
    const item = new Item(
      1,
      "Sulfuras",
      sellIn,
      quality,
      imgUrl,
      itemEnum.SULFURAS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForSulfuras(item);
    expect(item.quality).toBe(sulfurasQuality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Sulfuras sell date reduction by 1 on the item that has a quality of 80", () => {
    const sulfurasQuality = 80;
    const quality = 80;
    const sellIn = 15;
    const item = new Item(
      1,
      "Sulfuras",
      sellIn,
      quality,
      imgUrl,
      itemEnum.SULFURAS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForSulfuras(item);
    expect(item.quality).toBe(sulfurasQuality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Sulfuras sell date reduction by 1 on the item that has sell in date of 0", () => {
    const sulfurasQuality = 80;
    const quality = 80;
    const sellIn = 0;
    const item = new Item(
      1,
      "Sulfuras",
      sellIn,
      quality,
      imgUrl,
      itemEnum.SULFURAS
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForSulfuras(item);
    expect(item.quality).toBe(sulfurasQuality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  //Conjured
  it("Conjured Pass sell date reduction by 1 on the item that has a positive sell in date", () => {
    const quality = 4;
    const sellIn = 15;
    const item = new Item(
      1,
      "Conjured",
      sellIn,
      quality,
      imgUrl,
      itemEnum.CONJURED
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForConjured(item);
    expect(item.quality).toBe(quality - 2);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Conjured Pass sell date reduction by 1 on the item that has a sell in date of 0", () => {
    const quality = 10;
    const sellIn = 0;
    const item = new Item(
      1,
      "Conjured",
      sellIn,
      quality,
      imgUrl,
      itemEnum.CONJURED
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForConjured(item);
    expect(item.quality).toBe(quality - 4);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Conjured Pass sell date reduction by 1 on the item that has a quality of 0", () => {
    const quality = 0;
    const sellIn = 3;
    const item = new Item(
      1,
      "Conjured",
      sellIn,
      quality,
      imgUrl,
      itemEnum.CONJURED
    );
    const gildedRose = new GildedRose([item]);
    GildedRose.passDayForConjured(item);
    expect(item.quality).toBe(quality);
    expect(item.sellIn).toBe(sellIn - 1);
  });

  it("Sell date reduction by 1 on all items", () => {
    const normalSellInDates = [5, 0, 10, -1];
    const normalQuality = [7, 3, 0, 10];
    const normalItems = normalQuality.map((quality, index) => {
      return new Item(
        index,
        `Normal_${index + 1}`,
        normalSellInDates[index],
        quality,
        imgUrl,
        itemEnum.NORMAL
      );
    });

    const agedBrieSellInDates = [3, 0, 10, -2];
    const agedBrieQuality = [7, 50, 0, 10];
    const agedBrieItems = agedBrieQuality.map((quality, index) => {
      return new Item(
        1,
        `Aged_Brie_${index + 1}`,
        agedBrieSellInDates[index],
        quality,
        imgUrl,
        itemEnum.AGED_BRIE
      );
    });

    const sulfurasSellInDates = [-1, 0, 1, 20];
    const sulfurasQuality = [0, 5, 80, -9];
    const sulfurasItems = sulfurasQuality.map((quality, index) => {
      return new Item(
        1,
        `Sulfuras_${index + 1}`,
        sulfurasSellInDates[index],
        quality,
        imgUrl,
        itemEnum.SULFURAS
      );
    });

    const backstagePassSellInDates = [0, 5, 10, 15];
    const backstagePassQuality = [10, 0, 1, 50];
    const backstagePassItems = backstagePassQuality.map((quality, index) => {
      return new Item(
        1,
        `Backstage_Pass_${index + 1}`,
        backstagePassSellInDates[index],
        quality,
        imgUrl,
        itemEnum.BACKSTAGE_PASS
      );
    });

    const conjuredSellInDates = [3, 0, 15, -7];
    const conjuredQuality = [7, 0, 50, 10];
    const conjuredItems = conjuredQuality.map((quality, index) => {
      return new Item(
        1,
        `Conjured_${index + 1}`,
        conjuredSellInDates[index],
        quality,
        imgUrl,
        itemEnum.CONJURED
      );
    });

    const sellInDates = [
      ...normalSellInDates,
      ...agedBrieSellInDates,
      ...sulfurasSellInDates,
      ...backstagePassSellInDates,
      ...conjuredSellInDates,
    ];

    const changedQualities = [
      ...[6, 1, 0, 8],
      ...[8, 50, 1, 12],
      ...[80, 80, 80, 80],
      ...[0, 3, 3, 50],
      ...[5, 0, 48, 6],
    ];

    const items = [
      ...normalItems,
      ...agedBrieItems,
      ...sulfurasItems,
      ...backstagePassItems,
      ...conjuredItems,
    ];

    const gildedRose = new GildedRose(items);
    GildedRose.passDayForAll(items);

    items.forEach((item, index) => {
      expect(item.quality).toBe(changedQualities[index]);
      expect(item.sellIn).toBe(sellInDates[index] - 1);
    });
  });
});
