import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyRoutingModule } from './strategy-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule , RouterModule , StrategyRoutingModule],
  declarations: [StrategyRoutingModule.components],
  exports: [ StrategyRoutingModule.components ],
  providers: []
})
export class StrategyModule { }
