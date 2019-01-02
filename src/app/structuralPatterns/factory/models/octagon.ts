import { Shape } from './shape';


export class Octagon implements Shape {

    constructor() {
       this.printShape();
    }
    shape: string;
    printShape() {
        this.shape = 'Octagon';
    }
}
