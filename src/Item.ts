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
export const SELLIN_EXPIRED = 0;

export function decreaseQuality(item: Item) {
    if (item.quality > QUALITY_MINIMUM) {
        item.quality -= 1;
    }
}

export function increaseQuality(item: Item) {
    if (item.quality < QUALITY_MAXIMUM) {
        item.quality += 1;
    }
}

export function isExpired(item: Item) {
    return item.sellIn < SELLIN_EXPIRED;
}

export function decreaseSellIn(item: Item) {
    item.sellIn -= 1;
}

export function setQualityToMinimum(item: Item) {
    item.quality = QUALITY_MINIMUM;
}