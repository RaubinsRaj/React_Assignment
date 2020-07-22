"use strict";
exports.__esModule = true;
exports.RestaurantClass = void 0;
var RestaurantClass = /** @class */ (function () {
    function RestaurantClass(rName, rCity, rating) {
        this.rName = rName;
        this.rCity = rCity;
        this.rating = rating;
    }
    RestaurantClass.prototype.modify = function () {
        console.log("Inside Modify method of Restaurant");
        throw new Error("Method not implemented.");
    };
    return RestaurantClass;
}());
exports.RestaurantClass = RestaurantClass;
