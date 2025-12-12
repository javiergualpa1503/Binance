export class OrderBook {
  constructor(
    public readonly bids: Array<{ price: number; qty: number }>,
    public readonly asks: Array<{ price: number; qty: number }>,
  ) {}
}
