import { InterestCalculationStrategy } from './calculation.strategy';

export class NoAccount implements InterestCalculationStrategy {
    calculateInterest(accountBalance: number): number {
        return 0;
    }
}
