import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrategyComponent } from './behavioralPatterns/strategy/strategy.component';
import { FactoryComponent } from './structuralPatterns/factory/factory.component';

const routes: Routes = [
  { path: '', component: FactoryComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
