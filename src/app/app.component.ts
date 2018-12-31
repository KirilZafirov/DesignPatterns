import { Component } from '@angular/core';
import { InterestCalculationStrategyFactory } from './strategy/calculate-interest-factory';
import { AccountTypes } from './strategy/account-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-patterns';
  accountBalance = 250;
  calculation: InterestCalculationStrategyFactory = new InterestCalculationStrategyFactory(this.accountBalance);

  accounts = [{
    name: 'No Account',
    calculationValue: this.calculation.getInterest(AccountTypes.NO_ACCOUNT)
  },
  {
    name: 'Basic Account',
    calculationValue: this.calculation.getInterest(AccountTypes.BASIC_ACCOUNT)
  },
  {
    name: 'Silver Account',
    calculationValue: this.calculation.getInterest(AccountTypes.SILVER_ACCOUNT)
  },
  {
    name: 'Gold Account',
    calculationValue: this.calculation.getInterest(AccountTypes.GOLD_ACCOUNT)
  },
  {
    name: 'Premium Account',
    calculationValue: this.calculation.getInterest(AccountTypes.PREMIUM_ACCOUNT)
  }];

  constructor() {

  }
}
