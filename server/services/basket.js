function _search(arr, id) {
    return arr.find(item => item.id_product == id);
}

module.exports = {
    add(basket, item) {
        basket.content.push(item);
        return basket;
    },
    change(basket, id, quantity) { //amount == 1/-1
        let find = _search(basket.content, id);
        find.quantity += quantity;
        return basket;
    },
    delete(basket, id) {
        let find = _search(basket.content, id);
        basket.content.splice(basket.content.indexOf(find), 1);
        return basket;
    }
}
