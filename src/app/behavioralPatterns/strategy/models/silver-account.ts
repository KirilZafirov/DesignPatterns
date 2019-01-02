import { InterestCalculationStrategy } from './calculation.strategy';

export class SilverAccount implements InterestCalculationStrategy {
    private interest = (0.04 / 12);
    calculateInterest(accountBalance: number): number {
        return + accountBalance * this.interest;
    }
}
