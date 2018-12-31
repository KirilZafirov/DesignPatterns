export interface InterestCalculationStrategy {
    calculateInterest(accountBalance: number): number;
}
