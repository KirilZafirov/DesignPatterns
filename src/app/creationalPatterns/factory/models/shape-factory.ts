import { Shape } from './shape';
import { Octagon } from './octagon';
import { ShapeTypesEnum } from './shape.enum';
import { Triangle } from './triangle';
import { Square } from './square';
import { Circle } from './circle';

export class ShapeFactory {

    public static createShape (shape: ShapeTypesEnum): Shape  {
        switch (shape) {
            case ShapeTypesEnum.Triangle:
                return new Triangle();
                case ShapeTypesEnum.Square:
                return new Square();
                case ShapeTypesEnum.Octagon:
                return new Octagon();
                case ShapeTypesEnum.Circle:
                return new Circle();
            default:
                break;
        }
    }
}
