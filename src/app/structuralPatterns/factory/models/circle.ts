import { Shape } from './shape';


export class Circle implements Shape {
    constructor() {
       this.printShape();
    }
    shape: string;
    printShape() {
        this.shape = 'Circle';
    }
}
