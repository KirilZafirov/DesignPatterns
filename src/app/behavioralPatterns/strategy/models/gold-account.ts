import { InterestCalculationStrategy } from './calculation.strategy';

export class GoldAccount implements InterestCalculationStrategy {
    calculateInterest(accountBalance: number): number {
        return + accountBalance * (0.06 / 12);
    }
}
