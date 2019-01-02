import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrategyModule } from './behavioralPatterns/strategy/strategy.module';
import { FactoryComponent } from './structuralPatterns/factory/factory.component';
import { FactoryModule } from './structuralPatterns/factory/factory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StrategyModule,
    FactoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
