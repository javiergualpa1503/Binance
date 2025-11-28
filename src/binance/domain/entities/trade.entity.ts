export class Trade {
  constructor(
    public readonly id: number,
    public readonly price: number,
    public readonly qty: number,
    public readonly time: number,
    public readonly isBuyerMaker: boolean,
  ) {}
}
