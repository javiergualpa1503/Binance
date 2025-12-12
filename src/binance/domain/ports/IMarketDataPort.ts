import { MarketPrice } from '../entities/MarketPrice';
import { OrderBook } from '../entities/OrderBook';
import { RecentTrade } from '../entities/RecentTrade';

export interface IMarketDataPort {
  getPrice(symbol: string): Promise<MarketPrice>;
  getOrderBook(symbol: string): Promise<OrderBook>;
  getRecentTrades(symbol: string): Promise<RecentTrade[]>;
}
