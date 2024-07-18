
import { KoraBaseClient } from "../base/base-client";
import { KoraEndpoints } from "../utils/endpoints";
import { PayoutDetails } from "./interface";
/**
 * This class handles all the payouts.
 * Payouts on Kora are done using our RESTful APIs, enabling a smooth, solid integration.
 * If a payout request is triggered, Kora will directly disburse from your positive balance,
 */
export class Payouts {
  private _baseClient: KoraBaseClient;

  constructor(baseClient: KoraBaseClient) {
    this._baseClient = baseClient;
  }

  /**
   * To initiate a payout, you need to provide the payout details.
   * @param data [PayoutDetails]
   * @returns 
  initiatePayout({
    reference: "",
    destination: {
      type: "bank_account",
      customer: { email: "johndoe@korapay.com" },
      amount: 100,
      currency: "NGN",
      bank_account: { bank: "044", account: "2131645298" },
    },
  });
   */

  async initiatePayout(data: PayoutDetails) {
    return await this._baseClient.postRequest(
      KoraEndpoints.TRANSACTIONS.DISBURSE,
      data
    );
  }

  /**
   * To initiate a payout, you need to provide the payout details.
   * @param data [PayoutDetails]
   * @returns 
  initiatePayout([
    {
      reference: "",
      destination: {
        type: "bank_account",
        customer: { email: "johndoe@korapay.com" },
        amount: 100,
        currency: "NGN",
        bank_account: { bank: "044", account: "2131645298" },
      },
    }
  ]);
  */
  async initiateBulkPayout(data: PayoutDetails[]) {
    return await this._baseClient.postRequest(
      KoraEndpoints.TRANSACTIONS.DISBURSE_BULK,
      data
    );
  }
}
