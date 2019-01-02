import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryRoutingModule } from './factory-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule , RouterModule , FactoryRoutingModule],
  declarations: [ FactoryRoutingModule.components],
  exports: [ FactoryRoutingModule.components ],
  providers: []
})
export class FactoryModule { }
