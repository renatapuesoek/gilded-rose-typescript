import { Shop} from '../Shop';
import {Item} from "../Item";

describe("Shop#updateQuality()", () => {
    describe("normal item", () => {
        it("should decreases quality", () => {
            // arrangement
            const shopWithItem = new Shop([new Item("item", 12, 20)]);
            // action
            const items = shopWithItem.updateQuality();
            // assertion
            expect(items[0].quality).toEqual(19)
        })

        it('should decreases SellIn', () => {

            const shopWithItem = new Shop([new Item("item", 12, 20)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].sellIn).toEqual(11)
        });

        it('should decrease quality by 2 when item is expired', () => {

            const shopWithItem = new Shop([new Item("item", 0, 20)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(18)
        });

        it('should not decrease quality below 0', function () {

            const shopWithItem = new Shop([new Item("item", 0, 0)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(0)
        });
    })

    describe('backstage passes', () => {
        it('should increase quality by 1 when sellIn > 10', () => {

            const shopWithItem = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(21)
        })

        it('should increase quality by 2 when sellIn <= 10', () => {

            const shopWithItem = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(22)
        })

        it('should increase quality by 3 when sellIn <= 5', () => {

            const shopWithItem = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(13)
        })

        it('should decrease quality to 0 when expired (sellIn <= 0)', () => {

            const shopWithItem = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(0)
        })

        it('should not increase quality above 50', () => {

            const shopWithItem = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(50)
        })

    })
    describe('aged brie', () => {
        it('should increase the quality by 1', () => {

            const shopWithItem = new Shop([new Item("Aged Brie", 10, 21)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(22)

        });
        it('should increase the quality by 2 when sellIn < 0', () => {

            const shopWithItem = new Shop([new Item("Aged Brie", -1, 21)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(23)

        });
        it('should not increase the quality above 50', () => {

            const shopWithItem = new Shop([new Item("Aged Brie", 10, 50)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(50)

        });
        it('should not increase the quality above 50 when the quality = 49 & sellIn < 0', () => {

            const shopWithItem = new Shop([new Item("Aged Brie", -1, 49)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(50)

        });

    });

    describe('Sulfuras', () => {
        it('should not change the quality', () => {

            const shopWithItem = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 49)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].quality).toEqual(49)

        });
        it('should not change the sellIn', () => {

            const shopWithItem = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 49)]);

            const items = shopWithItem.updateQuality();

            expect(items[0].sellIn).toEqual(10)

        });
    });

});
