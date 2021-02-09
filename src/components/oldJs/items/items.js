import Item from '../item/item';

export class BasketItem extends Item {
    constructor(item) {
        super(item);
        this.quantity = 1;
    }

    render() {
        return `
                 <div class="b-item_cart" data-id="${this.item.id_product}">
                        <img src="${this.item.img}" alt="${this.item.product_name}" width="100" height="80" class="b-item__img_cart">
                        <div class="b-item__desc_cart">
                            <p class="b-item__name_cart">${this.item.product_name}</p>
                            <p class="b-item__quantity_cart">${this.item.quantity}</p>
                            <p class="b-item__price_cart">${this.item.price}</p>
                        </div>
                        <div class="right-block">
                            <p class="product-price">$${this.item.price * this.item.quantity}</p>
                            <button name="del-btn" class="b-item__delete_cart" data-id="${this.item.id_product}">&times;</button>
                        </div>
                 </div>
                    `
    }
}

export class CatalogItem extends Item {
    constructor(item) {
        super(item);
    }

    render() {
        return `
               <div class="b-item" data-id="${this.item.id_product}">
                   <img src="${this.item.img}" alt="${this.item.product_name}" class="b-item__img">
                   <div class="b-desc">
                       <h3 class="b-item__name">${this.item.product_name}</h3>
                       <p class="b-item__price"> ${this.item.price} </p>
                       <button class="buy-btn"
                          name="buy-btn"
                          data-id="${this.item.id_product}"
                          data-name="${this.item.product_name}"
                          data-price="${this.item.price}">
                          Купить
                       </button>
                   </div>
              </div>
        `
    }
}