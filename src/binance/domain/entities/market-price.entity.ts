export class MarketPrice {
  constructor(
    public readonly symbol: string,
    public readonly price: number,
    public readonly updatedAt: Date = new Date(),
  ) {}
}
