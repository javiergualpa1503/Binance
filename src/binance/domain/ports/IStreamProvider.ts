export interface TradeEvent {
  symbol: string;
  price: number;
  qty: number;
  time: Date;
}

export interface IStreamProvider {
  getTradeStream(symbol: string): void;
}
