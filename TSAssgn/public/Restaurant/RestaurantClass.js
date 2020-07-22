export class RestaurantClass {
    constructor(rName, rCity, rating) {
        this.rName = rName;
        this.rCity = rCity;
        this.rating = rating;
    }
    modify() {
        console.log("Inside Modify method of Restaurant");
        throw new Error("Method not implemented.");
    }
}
