export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export const QUALITY_MINIMUM = 0;

export const QUALITY_MAXIMUM = 50;

export const BACKSTAGE_10_DAYS_LEFT = 10;

export const BACKSTAGE_5_DAYS_LEFT = 5;

export const SELLIN_EXPIRED = 0;

export const ITEMNAME_CHEESE = 'Aged Brie';

export const ITEMNAME_BACKSTAGEPASS = 'Backstage passes to a TAFKAL80ETC concert';

export const ITEMNAME_SULFURAS = 'Sulfuras, Hand of Ragnaros';

export function  isCheese(item: Item) {
  return item.name == ITEMNAME_CHEESE;
}

export function  isBackstagePass(item: Item) {
  return item.name == ITEMNAME_BACKSTAGEPASS;
}

export function  isSulfuras(item: Item) {
  return item.name == ITEMNAME_SULFURAS;
}

export function  decreaseQuality(item: Item) {
  if (item.quality > QUALITY_MINIMUM) {
    item.quality -= 1;
  }
}

export function  increaseQuality(item: Item) {
  if (item.quality < QUALITY_MAXIMUM) {
    item.quality += 1;
  }
}

export function  isExpired(item: Item) {
  return item.sellIn < SELLIN_EXPIRED;
}

export function  decreaseSellIn(item: Item) {
  item.sellIn -= 1;
}

export function  setQualityToMinimum(item: Item) {
  item.quality = QUALITY_MINIMUM;
}

export function  updateCheese(item: Item) {
  increaseQuality(item)
  decreaseSellIn(item);
  if (isExpired(item)) {
    increaseQuality(item);
  }
}

export function  updateBackstagePass(item: Item) {
  increaseQuality(item)
  if (item.sellIn <= BACKSTAGE_10_DAYS_LEFT) {
    increaseQuality(item);
  }
  if (item.sellIn <= BACKSTAGE_5_DAYS_LEFT) {
    increaseQuality(item);
  }
  decreaseSellIn(item);
  if (isExpired(item)) {
    setQualityToMinimum(item);
  }
}

export function  updateNormalItem(item: Item) {
  decreaseQuality(item);

  decreaseSellIn(item);
  if (isExpired(item)) {
    decreaseQuality(item);
  }
}

export class Shop {
  items: Item[];

  constructor(items:Item[]=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (isSulfuras(item)) {
        return
      }


      if (isCheese(item)) {
        updateCheese(item);
        return;
      }


      if (isBackstagePass(item)) {
        updateBackstagePass(item);
        return;
      }


      updateNormalItem(item);

    });

    return this.items;
  }
}
