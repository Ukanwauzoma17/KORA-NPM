
import { KoraBaseClient } from "../base/base-client";
import { KoraEndpoints } from "../utils/endpoints";
import { PayInDetails } from "./interface";

/**
 * This class handles all the pay-ins.
 * Pay-ins on Kora are done using our RESTful APIs, enabling a smooth, solid integration.
 * If a pay-in request is triggered, Kora will directly deposit to your positive balance.
 */
export class Payins {
  private _baseClient: KoraBaseClient;

  constructor(baseClient: KoraBaseClient) {
    this._baseClient = baseClient;
  }

  /**
   * To initiate a pay-in, you need to provide the pay-in details.
   * @param data [PayInDetails]
   * @returns 
   * initiatePayIn({
   *   reference: "",
   *   amount: 100,
   *   currency: "NGN",
   *   customer: { email: "johndoe@korapay.com" },
   *   destination: {
   *     type: "bank_account",
   *     bank_account: { bank: "044", account: "2131645298" },
   *   },
   * });
   */
  async initiatePayIn(data: PayInDetails) {
    return await this._baseClient.postRequest(
      KoraEndpoints.TRANSACTIONS.BANK_TRANSFER,
      data
    );
  }
  
}