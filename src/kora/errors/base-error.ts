export class KoraError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
    this.name = "KoraError";
  }
}
