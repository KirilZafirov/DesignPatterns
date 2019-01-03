import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FactoryComponent } from './factory.component';

export const routes: Routes = [
    { path: '', component: FactoryComponent, pathMatch: 'full', data: { title: 'Factory' }  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryRoutingModule {
    static components = [ FactoryComponent ];
}
