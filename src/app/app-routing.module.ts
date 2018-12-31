import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrategyComponent } from './behavioralPatterns/strategy/strategy.component';

const routes: Routes = [
  { path: '', component: StrategyComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
