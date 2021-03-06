import { itemEnum } from "../Logic/Item";

export function isTextValid(text: string): boolean {
  return text.length > 0;
}

export function isQualityValid(quality: number, itemType: itemEnum): boolean {
  return itemType === itemEnum.SULFURAS
    ? quality === 80
    : quality <= 50 && quality > 0;
}

export function isImageUrlValid(url: string): boolean {
  const regexUrlChecker =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return regexUrlChecker.test(url);
}

export function isRemainingDateValid(date: number): boolean {
  return date >= 0;
}

export function validate(
  name: string,
  imgUrl: string,
  quality: number,
  sellIn: number,
  itemType: itemEnum
): {
  isValid: boolean;
  message: string;
} {
  let message = "";
  if (!isTextValid(name)) {
    message = "Please enter a valid name";
  }
  if (!isImageUrlValid(imgUrl)) {
    message = "Please enter a valid image url";
  }
  if (!isQualityValid(quality, itemType)) {
    message = "Please enter a valid quality";
  }
  if (!isRemainingDateValid(sellIn)) {
    message = "Please enter a valid sell in date";
  }
  return {
    isValid:
      isTextValid(name) &&
      isImageUrlValid(imgUrl) &&
      isQualityValid(quality, itemType) &&
      isRemainingDateValid(sellIn),
    message,
  };
}
