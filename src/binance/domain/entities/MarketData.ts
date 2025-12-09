export class CryptoPrice {
  constructor(
    public readonly symbol: string,
    public readonly price: number,
  ) {}
}

export class OrderBook {
  constructor(
    public readonly bids: Array<{ price: number; qty: number }>,
    public readonly asks: Array<{ price: number; qty: number }>,
  ) {}
}

export class RecentTrade {
  constructor(
    public readonly price: number,
    public readonly qty: number,
    public readonly time: Date,
  ) {}
}
