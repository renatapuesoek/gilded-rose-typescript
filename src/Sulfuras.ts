import {Item} from "./Item";

export const ITEMNAME_SULFURAS = 'Sulfuras, Hand of Ragnaros';

export function isSulfuras(item: Item) {
    return item.name == ITEMNAME_SULFURAS;
}