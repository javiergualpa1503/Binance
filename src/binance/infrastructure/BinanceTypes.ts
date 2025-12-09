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
