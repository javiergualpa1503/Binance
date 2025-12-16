export interface IMarketStreamPort {
  getTickerStream(symbol: string): void;
  desubscribeStream(symbol: string): void;
}
