import {decreaseSellIn, increaseQuality, isExpired, Item} from "./Item";

export const ITEMNAME_CHEESE = 'Aged Brie';

export function isCheese(item: Item) {
    return item.name == ITEMNAME_CHEESE;
}

export function updateCheese(item: Item) {
    increaseQuality(item)
    decreaseSellIn(item);
    if (isExpired(item)) {
        increaseQuality(item);
    }
}