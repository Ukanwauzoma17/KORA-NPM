import "dotenv/config";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { KoraError } from "../errors/base-error";

/**
 * This is the base class for the KoraPay API
 * The API key can either be passed in when creating an instance of this class or
 *  it can be set as an environment variable. If it is set
 * as an environment variable, and the api key is passed in, the
 * api key passed in it will be used as the API key.
 *
 */
export class KoraBaseClient {
  private readonly _api_key: string;
  private readonly _base_url: string = "https://api.korapay.com";
  private httpClient: AxiosInstance;

  constructor(api_key: string) {
    this._api_key = api_key ;
    this.httpClient = axios.create({
      baseURL: this._base_url,
      headers: {
        Authorization: `Bearer ${this._api_key}`,
        "Content-Type": "application/json",
      },
    });

    this.httpClient.interceptors.response.use(this._parseResponse);

    if (!api_key) {
      throw new KoraError("API key is required", 400);
    }
  }

  async postRequest(path: string, payload: any) {
    return await this.httpClient.post(path, payload);
  }
  async getRequest(path:string){
    return await this.httpClient.get(path);
  }

  private _parseResponse(response: AxiosResponse): AxiosResponse {
    return JSON.parse(response.data);
  }
}
