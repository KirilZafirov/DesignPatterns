import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Shape } from './models/shape';
import { ShapeTypesEnum } from './models/shape.enum';
import { ShapeFactory } from './models/shape-factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactoryComponent implements OnInit {

  shapes: Shape[] = [];

  ngOnInit(): void {
    this.shapes.push(ShapeFactory.createShape(ShapeTypesEnum.Triangle));
    this.shapes.push(ShapeFactory.createShape(ShapeTypesEnum.Square));
    this.shapes.push(ShapeFactory.createShape(ShapeTypesEnum.Circle));
    this.shapes.push(ShapeFactory.createShape(ShapeTypesEnum.Octagon));
  }
  trackByFn(index, item) {
    return index;
  }
}
