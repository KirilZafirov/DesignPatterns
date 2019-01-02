import { InterestCalculationStrategy } from './calculation.strategy';

export class PremiumAccount implements InterestCalculationStrategy {
    private interest = (0.08 / 12);
    calculateInterest(accountBalance: number): number {
        return + accountBalance * this.interest;
    }
}
