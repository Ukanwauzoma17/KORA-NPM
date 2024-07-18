
import { KoraBaseClient } from "../base/base-client";
import { KoraEndpoints } from "../utils/endpoints";
import { BankResolve } from "./interface";

  /**
   * This class shows the representation of the banks available in the nigeria(for now),
   * Other versions of this package will incorporate other banks in other countries
   * 
   */
export class Banks {
  private _baseClient: KoraBaseClient;

  constructor(baseClient: KoraBaseClient) {
    this._baseClient = baseClient;
  }
  async bankDetails() {
    return await this._baseClient.getRequest(KoraEndpoints.BANKS.LIST_BANKS);
  }
  /**
   * To verify the bank, you need to provide the bank Resolve details.
   * @param data [BankResolve]
   * @returns 
  verifyBank({
  bankCode: string; // e.g 044
  accountNumber: string; //2102345909
  currency: string; // e.g NG
  });
   */
  async verifyBank(data: BankResolve) {
    return await this._baseClient.postRequest(
      KoraEndpoints.BANKS.RESOLVE,
      data
    );
  }
}

