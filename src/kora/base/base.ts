
class KoraClient {
    private apiUrl: string;
    private headers: { [key: string]: string };
  
    constructor(apiUrl: string, headers: {key: string }) {
      this.apiUrl = apiUrl;
      this.headers = headers;
    }
  
    public fetchData(endpoint: string): Promise<any> {
      const url = `${this.apiUrl}/${endpoint}`;
  
      return fetch(url, {
        headers: this.headers
      })
      .then(response => response.json())
      .catch(error => {
        throw error;
      });
    }
  }
  
  export default KoraClient;