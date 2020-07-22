import {AdminInterface} from '../Admin/AdminInterface.js';
export class AdminClass implements AdminInterface {
    constructor(
        readonly fname: string,
        private lname: string,
        public age: number
        
    ){}
    create(): string {
        throw new Error("Method not implemented.");
    }
    edit(): string {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}