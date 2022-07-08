import {isBackstagePass, updateBackstagePass} from "./BackstagePass";
import {isCheese, updateCheese} from "./Cheese";
import {isSulfuras} from "./Sulfuras";
import {updateNormalItem} from "./NormalItem";
import {Item} from "./Item";

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
