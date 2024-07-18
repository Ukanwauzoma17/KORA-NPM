/**
 * See more at KoraPay Documentation: https://docs.korapay.com/
 */

export interface PayInDetails {
    reference: string;
    amount: number;
    currency: string;
    customer: {
      email: string;
      name:string;
    };
    destination: {
      type: string; // e.g., "bank_account"
      bank_account: {
        bank: string; // e.g., bank code
        account: string;
      };
    };
  }
  