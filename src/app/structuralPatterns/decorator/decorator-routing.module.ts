import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DecoratorComponent } from './decorator.component';

export const routes: Routes = [
    { path: '', component: DecoratorComponent, pathMatch: 'full', data: { title: 'Decorator' }  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule {
    static components = [ DecoratorComponent ];
}
