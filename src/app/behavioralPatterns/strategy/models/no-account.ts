import { InterestCalculationStrategy } from './calculation.strategy';

export class NoAccount implements InterestCalculationStrategy {
    private interest = 0;
    calculateInterest(accountBalance: number): number {
        return + accountBalance * this.interest;
    }
}
