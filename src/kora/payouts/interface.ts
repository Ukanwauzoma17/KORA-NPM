/**
 * See more at KoraPay Documentation: https://docs.korapay.com/
 */
export interface PayoutDetails {
  /**
   * Unique transaction reference.
   */
  reference: string;
  /**
   * Destination details for the transaction.
   */
  destination: {
    /**
     * Type of destination, can be 'bank_account' or 'mobile_money'.
     */
    type: "bank_account" | "mobile_money";
    /**
     * Transaction amount in two decimal places.
     */
    amount: number;
    /**
     * Transaction amount currency, e.g., NGN, KES.
     */
    currency: string;
    /**
     * Transaction narration or description (optional).
     */
    narration?: string;
    /**
     * Bank account details (required if destination type is 'bank_account').
     */
    bank_account?: {
      /**
       * Recipient bank code. Some bank codes that you can use to simulate successful transactions
       * in Test mode are 044, 033, 058 (i.e., for Access Bank, UBA, and GTCO respectively).
       * See the bank details for other test scenarios.
       */
      bank: string;
      /**
       * Recipient account number.
       */
      account: string;
      /**
       * Recipient account name (required if currency is ZAR).
       */
      account_name?: string;
    };
    /**
     * Mobile money details (required if destination type is 'mobile_money').
     */
    mobile_money?: {
      /**
       * Mobile money operator slug, e.g., safaricom-ke.
       */
      operator: string;
      /**
       * Mobile number attached to the mobile money account.
       */
      mobile_number: string;
    };
    /**
     * Customer details.
     */
    customer: {
      /**
       * Customer name (optional).
       */
      name?: string;
      /**
       * Customer email.
       */
      email: string;
    };
  };
}
