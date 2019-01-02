import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StrategyComponent } from './strategy.component';


export const routes: Routes = [
    { path: '', component: StrategyComponent, pathMatch: 'full', data: { title: 'Strategy' }  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StrategyRoutingModule {
    static components = [ StrategyComponent ];
}
