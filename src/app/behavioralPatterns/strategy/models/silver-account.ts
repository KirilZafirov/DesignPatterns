import { InterestCalculationStrategy } from './calculation.strategy';

export class SilverAccount implements InterestCalculationStrategy {
    calculateInterest(accountBalance: number): number {
        return + accountBalance * (0.04 / 12);
    }
}
