import { MarketPrice } from '../entities/market-price.entity';
import { OrderBook } from '../entities/order-book.entity';
import { RecentTrade } from '../entities/trade.entity';

export interface IMarketDataProvider {
  getPrice(symbol: string): Promise<MarketPrice>;
  getOrderBook(symbol: string): Promise<OrderBook>;
  getRecentTrades(symbol: string): Promise<RecentTrade[]>;
}
