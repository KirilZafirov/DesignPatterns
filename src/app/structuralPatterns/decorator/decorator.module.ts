import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DecoratorRoutingModule } from './decorator-routing.module';

@NgModule({
  imports: [CommonModule , RouterModule , DecoratorRoutingModule],
  declarations: [ DecoratorRoutingModule.components],
  exports: [ DecoratorRoutingModule.components ],
  providers: []
})
export class DecoratorModule { }
