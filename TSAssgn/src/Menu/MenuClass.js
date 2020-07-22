"use strict";
exports.__esModule = true;
exports.MenuClass = void 0;
var MenuClass = /** @class */ (function () {
    function MenuClass(menuItem, details, price) {
        this.menuItem = menuItem;
        this.details = details;
        this.price = price;
    }
    MenuClass.prototype.add = function () {
        console.log("Inside Add method of MenuIneterface");
        throw new Error("Method not implemented.");
    };
    MenuClass.prototype.update = function () {
        console.log("Inside update method of MenuIneterface");
        throw new Error("Method not implemented.");
    };
    MenuClass.prototype["delete"] = function () {
        console.log("Inside delete method of MenuIneterface");
        throw new Error("Method not implemented.");
    };
    return MenuClass;
}());
exports.MenuClass = MenuClass;
