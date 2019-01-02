import { InterestCalculationStrategy } from './calculation.strategy';

export class GoldAccount implements InterestCalculationStrategy {
    private interest = (0.06 / 12);
    calculateInterest(accountBalance: number): number {
        return + accountBalance * this.interest;
    }
}
