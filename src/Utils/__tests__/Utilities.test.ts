import { itemEnum } from "../../Logic/Item";
import {
  isTextValid,
  isQualityValid,
  isRemainingDateValid,
  isImageUrlValid,
} from "../Utilities";

describe("Utilities", () => {
  //Name validation
  it("Entering an empty text as name", () => {
    const result = isTextValid("");
    expect(result).toBe(false);
  });

  it("Entering valid text as name", () => {
    const result = isTextValid("Ahmet");
    expect(result).toBe(true);
  });

  // Image url validation
  it("Entering an invalid image url", () => {
    const result = isImageUrlValid("");
    expect(result).toBe(false);
  });

  it("Entering a valid image url", () => {
    const imgUrl =
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    const result = isImageUrlValid(imgUrl);
    expect(result).toBe(true);
  });

  it("Entering a negative sell in date", () => {
    const result = isRemainingDateValid(-1);
    expect(result).toBe(false);
  });

  // Test for quality
  //Normal
  it("Entering a valid quality for normal item", () => {
    const result = isQualityValid(1, itemEnum.NORMAL);
    expect(result).toBe(true);
  });

  it("Entering an invalid quality for normal item", () => {
    const result = isQualityValid(51, itemEnum.NORMAL);
    expect(result).toBe(false);
  });

  it("Entering a negative quality for normal item", () => {
    const result = isQualityValid(-1, itemEnum.NORMAL);
    expect(result).toBe(false);
  });

  //Aged Brie
  it("Entering a valid quality for Aged Brie", () => {
    const result = isQualityValid(1, itemEnum.AGED_BRIE);
    expect(result).toBe(true);
  });

  it("Entering an invalid quality for Aged Brie", () => {
    const result = isQualityValid(60, itemEnum.NORMAL);
    expect(result).toBe(false);
  });

  it("Entering a negative quality for Aged Brie", () => {
    const result = isQualityValid(-5, itemEnum.NORMAL);
    expect(result).toBe(false);
  });

  //Backstage Pass
  it("Entering a valid quality for Backstage Pass", () => {
    const result = isQualityValid(10, itemEnum.BACKSTAGE_PASS);
    expect(result).toBe(true);
  });

  it("Entering an invalid quality for Backstage Pass", () => {
    const result = isQualityValid(60, itemEnum.BACKSTAGE_PASS);
    expect(result).toBe(false);
  });

  it("Entering a negative quality for Backstage Pass", () => {
    const result = isQualityValid(-4, itemEnum.BACKSTAGE_PASS);
    expect(result).toBe(false);
  });

  //Sulfuras
  it("Entering a valid quality for Sulfuras", () => {
    const result = isQualityValid(80, itemEnum.SULFURAS);
    expect(result).toBe(true);
  });

  it("Entering an invalid quality for Sulfuras", () => {
    const result = isQualityValid(40, itemEnum.SULFURAS);
    expect(result).toBe(false);
  });

  it("Entering a negative quality for Sulfuras", () => {
    const result = isQualityValid(-4, itemEnum.SULFURAS);
    expect(result).toBe(false);
  });

  //Conjured
  it("Entering a valid quality for Conjured", () => {
    const result = isQualityValid(20, itemEnum.CONJURED);
    expect(result).toBe(true);
  });

  it("Entering an invalid quality for Conjured", () => {
    const result = isQualityValid(70, itemEnum.CONJURED);
    expect(result).toBe(false);
  });

  it("Entering a negative quality for Conjured", () => {
    const result = isQualityValid(-4, itemEnum.CONJURED);
    expect(result).toBe(false);
  });

  it("Entering valid values for every field", () => {
    const result =
      isTextValid("Ahmet") &&
      isQualityValid(10, itemEnum.NORMAL) &&
      isRemainingDateValid(5) &&
      isImageUrlValid(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      );
    expect(result).toBe(true);
  });

  it("Entering invalid quality value and checking if isValid fails", () => {
    const result =
      isTextValid("Ahmet") &&
      isQualityValid(90, itemEnum.NORMAL) &&
      isRemainingDateValid(5) &&
      isImageUrlValid(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      );
    expect(result).toBe(false);
  });
});
