import { NoAccount } from './no-account';
import { BasicAccount } from './basic-account';
import { SilverAccount } from './silver-account';
import { GoldAccount } from './gold-account';
import { PremiumAccount } from './premium-account';
import { InterestCalculationStrategy } from './calculation.strategy';
import { AccountTypes } from './account-type.enum';

export class InterestCalculationStrategyFactory {

    private noAccount: InterestCalculationStrategy  = new NoAccount();
    private basicAccount: InterestCalculationStrategy  = new BasicAccount();
    private silverAccount: InterestCalculationStrategy  = new SilverAccount();
    private goldAccount: InterestCalculationStrategy  = new GoldAccount();
    private premiumAccount: InterestCalculationStrategy = new PremiumAccount();

    public getInterest = (accountType: AccountTypes): InterestCalculationStrategy => ({
            0: this.noAccount,  // AccountTypes.NoAccount
            1: this.basicAccount, // AccountTypes.BasicAccount
            2: this.silverAccount, // AccountTypes.SilverAccount
            3: this.goldAccount, // AccountTypes.GoldAccount
            4: this.premiumAccount, // AccountTypes.PremiumAccount
            })[accountType]
}
