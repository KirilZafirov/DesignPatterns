import { Component, OnInit } from '@angular/core';
import { InterestCalculationStrategyFactory } from './models/calculate-interest-factory';
import { AccountTypes } from './models/account-type.enum';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
