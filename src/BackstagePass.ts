import {decreaseSellIn, increaseQuality, isExpired, Item, setQualityToMinimum} from "./Item";

export const BACKSTAGE_10_DAYS_LEFT = 10;
export const BACKSTAGE_5_DAYS_LEFT = 5;
export const ITEMNAME_BACKSTAGEPASS = 'Backstage passes to a TAFKAL80ETC concert';

export function isBackstagePass(item: Item) {
    return item.name == ITEMNAME_BACKSTAGEPASS;
}

export function updateBackstagePass(item: Item) {
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