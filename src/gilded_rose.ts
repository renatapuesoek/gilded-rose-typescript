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

const QUALITY_MINIMUM = 0;

const QUALITY_MAXIMUM = 50;

const BACKSTAGE_FIRST_INCREASE = 10;

const BACKSTAGE_SECOND_INCREASE = 5;

const SELLIN_EXPIRED = 0;

const ITEMNAME_CHEESE = 'Aged Brie';

const ITEMNAME_BACKSTAGEPASS = 'Backstage passes to a TAFKAL80ETC concert';

const ITEMNAME_SULFURAS = 'Sulfuras, Hand of Ragnaros';

function isCheese(item: Item) {
  return item.name == ITEMNAME_CHEESE;
}

function isBackstagePass(item: Item) {
  return item.name == ITEMNAME_BACKSTAGEPASS;
}

function isSulfuras(item: Item) {
  return item.name == ITEMNAME_SULFURAS;
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
      if (!isCheese(item) && !isBackstagePass(item)) {
        if (item.quality > QUALITY_MINIMUM) {
          item.quality -= 1;
        }
      } else {
        if (item.quality < QUALITY_MAXIMUM) {
          item.quality += 1;
          if (isBackstagePass(item)) {
            if (item.sellIn <= BACKSTAGE_FIRST_INCREASE) {
              if (item.quality < QUALITY_MAXIMUM) {
                item.quality += 1;
              }
            }
            if (item.sellIn <= BACKSTAGE_SECOND_INCREASE) {
              if (item.quality < QUALITY_MAXIMUM) {
                item.quality += 1;
              }
            }
          }
        }
      }
      item.sellIn -= 1;
      if (item.sellIn < SELLIN_EXPIRED) {
        if (!isCheese(item)) {
          if (!isBackstagePass(item)) {
            if (item.quality > QUALITY_MINIMUM) {
              item.quality -= 1;
            }
          } else {
            item.quality = QUALITY_MINIMUM;
          }
        } else {
          if (item.quality < QUALITY_MAXIMUM) {
            item.quality += 1;
          }
        }
      }
    });

    return this.items;
  }
}
