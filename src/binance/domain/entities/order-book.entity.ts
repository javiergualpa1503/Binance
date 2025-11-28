export class OrderBook {
  constructor(
    public readonly lastUpdateId: number,
    public readonly bids: [string, string][],
    public readonly asks: [string, string][],
  ) {}
}
