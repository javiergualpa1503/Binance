export class RecentTrade {
  constructor(
    public readonly price: number,
    public readonly qty: number,
    public readonly time: Date,
  ) {}
}
