
import { Payouts } from "./payouts/payouts";
import { Payins } from "./payins/payins";
import { KoraBaseClient } from "./base/base-client";
import { Banks } from "./banks/bank";

export class KoraPay {
  private _baseClient: KoraBaseClient;
  public payouts: Payouts;
  public payins: Payins;

  public banks:Banks;
  constructor(api_key: string) {
    const { KORA_SECRET_KEY } = process.env;
    api_key = api_key ?? (KORA_SECRET_KEY as string);

    this._baseClient = new KoraBaseClient(api_key);
    this.payouts = new Payouts(this._baseClient);
    this.payins = new Payins(this._baseClient);
    this.banks= new Banks(this._baseClient)
  }
}

