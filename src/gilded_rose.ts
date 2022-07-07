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

export class Shop {
  items: Item[];

  constructor(items:Item[]=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > QUALITY_MINIMUM) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality -= 1;
          }
        }
      } else {
        if (item.quality < QUALITY_MAXIMUM) {
          item.quality += 1;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
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
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
      }
      if (item.sellIn < SELLIN_EXPIRED) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > QUALITY_MINIMUM) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality -= 1;
              }
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
