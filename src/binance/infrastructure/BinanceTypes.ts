export interface BinanceTicker {
  symbol: string;
  price: string;
}

export interface BinanceDepth {
  bids: string[][];
  asks: string[][];
}

export interface BinanceTrade {
  price: string;
  qty: string;
  time: number;
}

export interface BinancePriceWs {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
}
