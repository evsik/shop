/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/cart/cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/cart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet cart = {\n    items: [],\n    shown: false,\n    sum: 0,\n    qua: 0,\n    container: '.cart-block',\n    itemsContainer: '.cart-block__items',\n    createCartItem(id, name, price) {\n        return {\n            id_product: id,\n            price: +price,\n            product_name: name,\n            quantity: 1,\n            img: 'http://placehold.it/100x80',\n            createTemplate() {\n                return `\n                    <div class=\"b-item_cart\" data-id=\"${this.id_product}\">\n                        <img src=\"${this.img}\" alt=\"${this.product_name}\" width=\"100\" height=\"80\" class=\"b-item__img_cart\">\n                        <div class=\"b-item__desc_cart\">\n                            <p class=\"b-item__name_cart\">${this.product_name}</p>\n                            <p class=\"b-item__quantity_cart\">${this.quantity}</p>\n                            <p class=\"b-item__price_cart\">${this.price}</p>\n                        </div>\n                        <div class=\"right-block\">\n                            <p class=\"product-price\">$${this.price * this.quantity}</p>\n                            <button name=\"del-btn\" class=\"b-item__delete_cart\" data-id=\"${this.id_product}\">&times;</button>\n                        </div>\n                    </div>\n                    `\n            }\n        }\n    },\n    init() {\n        document.querySelector('#toggle-cart').addEventListener('click', () => {\n            cart.shown = !cart.shown\n            cart.render()\n            document.querySelector('.cart-block').classList.toggle('myVisible')\n        })\n\n        document.querySelector(this.container).addEventListener('click', evt => {\n            if (evt.target.name === 'del-btn') {\n                this.removeProduct(evt.target.dataset.id)\n            }\n        })\n    },\n    render() {\n        let container = document.querySelector(this.itemsContainer)\n        let domString = ''\n\n        this.items.forEach(item => {\n            domString += item.createTemplate()\n        })\n        container.innerHTML = domString\n\n        document.querySelector('#tot-sum').innerHTML = this.sum\n        document.querySelector('#tot-qua').innerHTML = this.qua\n    },\n    addProduct(product) {\n        let find = this.items.find(item => item.id_product === product.id)\n        if (!find) {\n            this.items.push(cart.createCartItem(product.id, product.name, product.price)) //потому-что дата-сет\n        } else {\n            find.quantity++\n        }\n        this.checkTotal()\n        this.render()\n    },\n    removeProduct(id) {\n        let find = this.items.find(item => item.id_product === id)\n        if (find.quantity === 1) {\n            this.items.splice(this.items.indexOf(find), 1)\n        } else {\n            find.quantity--\n        }\n        this.checkTotal()\n        this.render()\n    },\n    checkTotal() {\n        let s = 0\n        let q = 0\n\n        this.items.forEach(item => {\n            q += item.quantity\n            s += item.quantity * item.price\n        })\n\n        this.sum = s\n        this.qua = q\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://shop/./src/components/cart/cart.js?");

/***/ }),

/***/ "./src/components/catalog/catalog.js":
/*!*******************************************!*\
  !*** ./src/components/catalog/catalog.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/cart */ \"./src/components/cart/cart.js\");\n\n\n\nlet catalog = {\n    items: [],\n    container: '.products',\n    cart: null,\n    catalogUrl: 'https://raw.githubusercontent.com/evsik/JavaScript/master/catalogData.json',\n    createProduct(product) {\n        return {\n            product_name: product.product_name,\n            price: product.price,\n            id_product: product.id_product,\n            img: 'https://placehold.it/200x150',\n            createTemplate() {\n                return `\n                        <div class=\"b-item\" data-id=\"${this.id_product}\">\n                            <img src=\"${this.img}\" alt=\"${this.product_name}\" class=\"b-item__img\">\n                            <div class=\"b-desc\">\n                                <h3 class=\"b-item__name\">${this.product_name}</h3>\n                                <p class=\"b-item__price\"> ${this.price} </p>\n                                <button class=\"buy-btn\"\n                                    name=\"buy-btn\"\n                                    data-id=\"${this.id_product}\"\n                                    data-name=\"${this.product_name}\"\n                                    data-price=\"${this.price}\">\n                                    Купить\n                                </button>\n                            </div>\n                        </div>\n                    `\n            }\n        }\n    },\n    // cartInit: cart.init(),\n    init() {\n        this.items = []\n        this.cart = _cart_cart__WEBPACK_IMPORTED_MODULE_0__.default\n        this.getData(this.catalogUrl)\n            .finally(() => {\n                this._fetchItems()\n                this._render()\n            })\n\n        document.querySelector(this.container).addEventListener('click', evt => {\n            if (evt.target.name === 'buy-btn') {\n                this.cart.addProduct(evt.target.dataset)\n            }\n        })\n    }\n    ,\n    getData(url) {\n        return fetch(url)\n            .then(data => data.json())\n            .then((data2) => {\n                this.items = data2\n            })\n    }\n    ,\n    _fetchItems() {\n        let arr = []\n\n        this.items.forEach(item => {\n            arr.push(catalog.createProduct(item))\n        })\n        console.log(arr)\n        this.items = arr\n    }\n    ,\n    _render() {\n        let container = document.querySelector(this.container)\n        let domString = ''\n\n        this.items.forEach(item => {\n            domString += item.createTemplate()\n        })\n        container.innerHTML = domString\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://shop/./src/components/catalog/catalog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_catalog_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/catalog/catalog */ \"./src/components/catalog/catalog.js\");\n\n\n_components_catalog_catalog__WEBPACK_IMPORTED_MODULE_0__.default.init()\n_components_catalog_catalog__WEBPACK_IMPORTED_MODULE_0__.default.cart.init()\n\n//# sourceURL=webpack://shop/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;