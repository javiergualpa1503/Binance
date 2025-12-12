/* import { IMarketDataPort } from '../domain/ports/IMarketDataPort';

export interface MarketSummaryDTO {
  asset: string;
  currentPrice: number;
  spread: number;
  lastTradeTime: Date;
}

export class GetMarketSummaryUseCase {
  constructor(private marketProvider: IMarketDataProvider) {}

  async execute(pair: string): Promise<MarketSummaryDTO> {
    const [priceEntity, orderBookEntity, tradesEntity] = await Promise.all([
      this.marketProvider.getPrice(pair),
      this.marketProvider.getOrderBook(pair),
      this.marketProvider.getRecentTrades(pair),
    ]);

    const bestBid = orderBookEntity.bids[0]?.price || 0;
    const bestAsk = orderBookEntity.asks[0]?.price || 0;
    const spread = bestAsk - bestBid;

    return {
      asset: priceEntity.symbol,
      currentPrice: priceEntity.price,
      spread: parseFloat(spread.toFixed(2)),
      lastTradeTime: tradesEntity[0]?.time || new Date(),
    };
  }
}
 */
