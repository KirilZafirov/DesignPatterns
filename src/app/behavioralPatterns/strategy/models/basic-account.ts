import { InterestCalculationStrategy } from './calculation.strategy';

export class BasicAccount implements InterestCalculationStrategy {
    private interest = (0.02 / 12);
    calculateInterest(accountBalance: number): number {
        return + accountBalance * this.interest;
    }
}
