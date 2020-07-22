import {MenuInterface} from '../Menu/MenuInterface.js';
export class MenuClass implements MenuInterface{
    constructor(
        readonly menuItem: string,
        private details: String,
        public price: number,

    ){}
    add(): string {
        console.log("Inside Add method of MenuIneterface");
        throw new Error("Method not implemented.");
    }
    update(): string {
        console.log("Inside update method of MenuIneterface");
       throw new Error("Method not implemented.");
    }
    delete(): void {
        console.log("Inside delete method of MenuIneterface");
        throw new Error("Method not implemented.");
    }

}