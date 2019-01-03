import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'factory', loadChildren: './creationalPatterns/factory/factory.module#FactoryModule' },
  { path: 'strategy', loadChildren: './behavioralPatterns/strategy/strategy.module#StrategyModule' },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    HomeComponent ];
}
