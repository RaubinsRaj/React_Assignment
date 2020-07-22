export class MenuClass {
    constructor(menuItem, details, price) {
        this.menuItem = menuItem;
        this.details = details;
        this.price = price;
    }
    add() {
        console.log("Inside Add method of MenuIneterface");
        throw new Error("Method not implemented.");
    }
    update() {
        console.log("Inside update method of MenuIneterface");
        throw new Error("Method not implemented.");
    }
    delete() {
        console.log("Inside delete method of MenuIneterface");
        throw new Error("Method not implemented.");
    }
}
