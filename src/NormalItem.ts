import {decreaseQuality, decreaseSellIn, isExpired, Item} from "./Item";

export function updateNormalItem(item: Item) {
    decreaseQuality(item);

    decreaseSellIn(item);
    if (isExpired(item)) {
        decreaseQuality(item);
    }
}