import {RestaurantInterface} from '../Restaurant/RestaurantInterface.js';

export class RestaurantClass implements RestaurantInterface{
    constructor(
        readonly rName: string,
        private rCity: string,
        public rating: number,
    ){}
    modify(): string {
        console.log("Inside Modify method of Restaurant");
        throw new Error("Method not implemented.");
    }
}