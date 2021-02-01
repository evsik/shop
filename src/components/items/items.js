import Item from '../item/item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.amount = 1;
    }

    render() {
        //
    }
}

export class CatalogItem extends Item { }