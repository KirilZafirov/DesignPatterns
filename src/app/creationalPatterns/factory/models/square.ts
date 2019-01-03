import { Shape } from './shape';


export class Square implements Shape {

    constructor() {
       this.printShape();
    }
    shape: string;
    printShape() {
        this.shape = 'Square';
    }
}
