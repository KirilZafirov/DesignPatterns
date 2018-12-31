import { InterestCalculationStrategy } from './calculation.strategy';

export class PremiumAccount implements InterestCalculationStrategy {
    calculateInterest(accountBalance: number): number {
        return + accountBalance * (0.02 / 12);
    }
}
