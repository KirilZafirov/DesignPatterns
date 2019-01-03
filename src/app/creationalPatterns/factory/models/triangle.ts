import { Shape } from './shape';


export class Triangle implements Shape {

    constructor() {
       this.printShape();
    }
    shape: string;
    printShape() {
        this.shape = 'Triangle';
    }
}
