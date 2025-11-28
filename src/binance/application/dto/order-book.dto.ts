export interface OrderBook {
  lastUpdateId: number;
  bids: Array<string[]>;
  asks: Array<string[]>;
}
